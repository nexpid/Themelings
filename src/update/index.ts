import { handleShellErr, makeProgress, wrapPromise } from "./util";
import { exists } from "fs/promises";
import { mkdir } from "fs/promises";
import { join } from "path";
import decompile from "./tasks/decompile";
import colors from "./tasks/colors";
import icons from "./tasks/icons";

const version = await Bun.file("data/version.txt").text();
const api = `https://tracker.vendetta.rocks/tracker/download/${version}/`;

const mediaFiles = ["res", "*.{lottie,png,jpg,svg}"] as [string, string];

const apksToDownload = ["base", "config.xxhdpi", "config.hdpi"] as const;
const apkStuffToDownload = {
  base: [["assets/index.android.bundle"], mediaFiles],
  "config.xxhdpi": [mediaFiles],
  "config.hdpi": [mediaFiles],
} satisfies Record<
  (typeof apksToDownload)[number],
  ([string, string] | [string])[]
>;

const canReuseFolder = (
  await Promise.allSettled(
    Object.entries(apkStuffToDownload)
      .map(([apk, x]) => x.map(([y]) => join("main/tmp", apk, y)))
      .flat()
      .map(
        (p) => exists(p) // Bun's Bun.file().exists doesn't support folders
      )
  )
).every((x) => x.status === "fulfilled" && x.value);

// Temp folder yippee!

const tempFolder = "main/tmp";
await mkdir(tempFolder, { recursive: true });

if (!canReuseFolder) {
  // Download the APKs
  console.log("Downloading APKs...");

  const downloadProgress = makeProgress(
    Object.fromEntries(
      apksToDownload.map((apk) => [apk, `Downloading ${apk}.apk`])
    )
  );

  const apks = (await Promise.allSettled(
    apksToDownload.map((path) => {
      return wrapPromise(
        fetch(api + path, {
          headers: { "Cache-contorl": "public, max-age=3600" },
        }),
        downloadProgress,
        path
      );
    })
  )) as PromiseFulfilledResult<ArrayBuffer>[];
  if (downloadProgress.anyFailed())
    throw new Error(
      `Failed to download all APKs!\n${downloadProgress.prettyErrors()}`
    );

  for (let i = 0; i < apksToDownload.length; i++)
    await Bun.write(
      join(tempFolder, `${apksToDownload[i]}.zip`),
      apks[i].value
    );

  console.log("\nUnzipping APKs...");

  const unzipProgress = makeProgress(
    Object.fromEntries(
      apksToDownload.map((apk) => [apk, `Unzipping ${apk}.apk`])
    )
  );
  await Promise.allSettled(
    apksToDownload.map((apk) =>
      wrapPromise(
        Bun.$`unzip -o ${join(tempFolder, `${apk}.zip`)} ${{
          raw: apkStuffToDownload[apk]
            .map(([folder, files]) =>
              Bun.$.braces(files ? join(folder, files) : folder).map((y) =>
                JSON.stringify(y)
              )
            )
            .flat()
            .join(" "),
        }} -d ${join(tempFolder, apk)} 2>/dev/null`
          .quiet()
          .nothrow()
          .then(handleShellErr),
        unzipProgress,
        apk
      )
    )
  );
  if (unzipProgress.anyFailed())
    throw new Error(
      `Failed to unzip all APKs!\n${unzipProgress.prettyErrors()}`
    );
} else console.log("Reusing folder!");

// Run tasks

console.log("\nRunning tasks...");
const taskProgress = makeProgress(
  {
    decompile: "Decompiling index.android.bundle",
    decompile_downloading: "Downloading decompiler",
    decompile_decompiling: "Decompiling",
    decompile_gzip: "Gzip code",
    colors: "Getting colors",
    colors_raw: "Getting raw colors",
    colors_semantic: "Getting semantic colors",
    icons: "Getting icons",
    icons_getting: "Writing icons.json",
    icons_copying: "Copying images",
    diff: "Generate diffs",
    diff_colors: "Diff colors",
    diff_icons: "Diff icons",
    diff_code: "Diff code",
  },
  true
);

let pathToJs: string;
try {
  taskProgress.start("decompile");
  pathToJs = await decompile(
    taskProgress,
    join(tempFolder, "base", "assets", "index.android.bundle"),
    tempFolder
  );
  taskProgress.update("decompile", true);
} catch (e) {
  taskProgress.update("decompile", false);
  throw new Error(`Failed to decompile!\n${e}`);
}

const code = (await Bun.file(pathToJs).text()).split("\n");

await Promise.allSettled([
  wrapPromise(colors(taskProgress, code), taskProgress, "colors"),
  wrapPromise(
    icons(
      taskProgress,
      code,
      ...apksToDownload.map((apk) => join(tempFolder, apk))
    ),
    taskProgress,
    "icons"
  ),
]);
if (taskProgress.anyFailed())
  throw new Error(
    `Failed at the colors + icons task!\n${taskProgress.prettyErrors()}`
  );
