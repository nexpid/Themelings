import { join } from "path";
import { readdir, writeFile, mkdir, copyFile } from "fs/promises";
import type { makeProgress } from "../util";

export default async function icons(
  progress: ReturnType<typeof makeProgress>,
  code: string[],
  ...paths: string[]
) {
  const lookForFiles = new Array<{
    httpServerLocation: string;
    width: number;
    height: number;
    scales: number[];
    hash: string;
    name: string;
    type: "png" | "svg" | "lottie";
  }>();

  progress.start("icons_getting");
  for (let i = 0; i < code.length; i++) {
    const line = code[i];

    // easiest way to check
    if (
      line.includes("'httpServerLocation'") &&
      code[i - 1]?.includes(".registerAsset")
    ) {
      const objText = line
        .split("{")
        .slice(1)
        .join("{")
        .split("}")
        .slice(0, -1)
        .join("}");
      const obj = (0, eval)(`({${objText}})`);

      // the next line has scales for the icon
      const scalesText = code[i + 1]
        .split("[")
        .slice(1)
        .join("[")
        .split("]")
        .slice(0, -1)
        .join("]");
      const scales = (0, eval)(`([${scalesText}])`);

      if (!Array.isArray(scales) || scales.some((x) => Number.isNaN(x)))
        continue;

      obj.scales = scales;

      if (
        ["httpServerLocation", "hash", "name", "type"].every((x) => obj[x]) &&
        ["svg", "png", "lottie"].includes(obj.type)
      ) {
        lookForFiles.push(obj);
        continue;
      }
    }
  }

  // get files of every folder
  const listed = (
    (await Promise.allSettled(
      paths.map((path) =>
        readdir(path, { recursive: true }).then((f) =>
          f.map((e) => join(path, e))
        )
      )
    )) as PromiseFulfilledResult<string[]>[]
  )
    .filter((f) => f.status === "fulfilled")
    .map((f) => f.value)
    .flat();

  const icons = {} as Record<
    string,
    {
      file: string;
      hash: string;
      scales: number[];
      width: number | null;
      height: number | null;
    }
  >;
  const toMove = new Array<[string, string]>();
  for (const lookFor of lookForFiles) {
    const path =
      `${lookFor.httpServerLocation.split("/").slice(2).join("_")}_${
        lookFor.name
      }`
        .toLowerCase()
        .replace(/\W+/g, "") + `.${lookFor.type}`;

    const filePath = listed.find((f) => f.endsWith(`/${path}`));
    if (filePath) {
      const actualPath = join(
        lookFor.httpServerLocation.split("/").slice(2).join("/"),
        `${lookFor.name}.${lookFor.type}`
      );
      icons[lookFor.name] = {
        file: actualPath,
        hash: lookFor.hash,
        scales: lookFor.scales,
        width: lookFor.width ?? null,
        height: lookFor.height ?? null,
      };

      toMove.push([
        filePath,
        actualPath.startsWith("../") ? `_/${actualPath.slice(3)}` : actualPath,
      ]);
    }
  }

  progress.update("icons_getting", true);
  progress.start("icons_copying");

  await writeFile("data/icons.json", JSON.stringify(icons, null, 2));
  await Promise.all(
    toMove
      .map(([og, actual]) => [
        mkdir(join("data/icons", actual.split("/").slice(0, -1).join("/")), {
          recursive: true,
        }).then(() => copyFile(og, join("data/icons", actual))),
      ])
      .flat()
  );
  progress.update("icons_copying", true);
}
