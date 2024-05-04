import { handleShellErr, makeProgress, wrapPromise } from "./util";
import { exists, mkdir, rm } from "node:fs/promises";
import { join } from "path";
import decompile from "./tasks/decompile";
import colors from "./tasks/colors";
import icons from "./tasks/icons";
import diffs, { type OutDiffs } from "./tasks/diffs";
import { webhook } from "./tasks/webhook";

const version = await Bun.file("../data/version.txt").text();
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
  await Promise.allSettled([
    ...Object.entries(apkStuffToDownload)
      .map(([apk, x]) => x.map(([y]) => join("tmp", apk, y)))
      .flat()
      .map(
        (p) => exists(p) // Bun's Bun.file().exists doesn't support folders
      ),
    Bun.file("tmp/ver")
      .text()
      .then((x) => x === version),
  ])
).every((x) => x.status === "fulfilled" && x.value);

// Temp folder yippee!

const tempFolder = "tmp";
if (!canReuseFolder) await rm(tempFolder, { force: true, recursive: true });
await mkdir(tempFolder, { recursive: true });

if (!canReuseFolder) {
  // Download the APKs
  console.log("Downloading APKs...");

  const downloadProgress = makeProgress({
    ...Object.fromEntries(
      apksToDownload.map((apk) => [apk, `Downloading ${apk}.apk`])
    ),
    writing: "Writing APKs",
  });
  downloadProgress.pause("writing");

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

  downloadProgress.start("writing");
  await Bun.write("tmp/ver", version);

  for (let i = 0; i < apksToDownload.length; i++)
    await Bun.write(
      join(tempFolder, `${apksToDownload[i]}.zip`),
      apks[i].value
    );

  downloadProgress.update("writing", true);
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
    preinit: "Preinit",
    preinit_discard: "Discard changes",
    preinit_save: "Save original files",
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
    diff_raw: "Diffing raw colors",
    diff_semantic: "Diffing semantic colors",
    diff_icons: "Diffing icons",
    diff_code: "Diffing code",
    webhook: "Send webhook messages",
  },
  true
);

const oprevFiles = [
  "semantic.json",
  "raw.json",
  "icons.json",
  "code.gzipped.js",
] as const;
export const prevFiles = new Map<(typeof oprevFiles)[number], ArrayBuffer>();

// discard changes
try {
  taskProgress.start("preinit");

  taskProgress.start("preinit_discard");
  // no need to discard icons folder as it gets discarded in the icons task
  await Bun.$`git checkout -- ${{
    raw: oprevFiles.map((x) => Bun.$.escape(x)).join(" "),
  }}`
    .cwd("../data")
    .nothrow()
    .quiet()
    .then(handleShellErr);
  taskProgress.update("preinit_discard", true);

  taskProgress.start("preinit_save");
  for (const oprev of oprevFiles) {
    const file = Bun.file(join("../data", oprev));
    if (await file.exists()) prevFiles.set(oprev, await file.arrayBuffer());
  }
  taskProgress.update("preinit_save", true);
  taskProgress.update("preinit", true);
} catch (e) {
  taskProgress.update("preinit", false);
  throw new Error(`Failed to discard changes!\n${e}`);
}

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
if (taskProgress.someFailed("colors", "icons"))
  throw new Error(
    `Failed at the colors + icons task!\n${taskProgress.prettyErrors(
      "colors",
      "icons"
    )}`
  );

while (!taskProgress.isFinished("decompile_gzip")) {
  await Bun.sleep(1000);
}

if (taskProgress.someFailed("decompile_gzip"))
  throw new Error(
    `Failed at the decompile gzip task!\n${taskProgress.prettyErrors(
      "decompile_gzip"
    )}`
  );

let outDiffs: OutDiffs | null;
try {
  taskProgress.start("diff");
  outDiffs = await diffs(taskProgress);
} catch (e) {
  taskProgress.update("diff", false);
  throw new Error(`Failed to generate diffs!\n${e}`);
}

if (outDiffs) {
  try {
    taskProgress.start("webhook");
    await webhook(version, outDiffs);
    taskProgress.update("webhook", true);
  } catch (e) {
    taskProgress.update("webhook", false);
    throw new Error(`Failed to send webhook messages!\n${e}`);
  }
} else {
  taskProgress.update("webhook", null);
}
console.log("✅ Done");
