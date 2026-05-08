import { exists, mkdir, rm } from "node:fs/promises";
import { log, makeProgress, wrapPromise } from "./progress";
import { runTasks } from "./runner";
import { type apkSplits, apksFolder, isMock, trackerUserAgent, version, workFolder } from "./shared";
import { handleShellErr, join } from "./utils";

const cdnUrl = `https://tracker.vendetta.rocks/tracker/download/${version}/`;

const mediaFiles = Bun.$.braces("res/**/*.{png,jpg,lottie}");
const apkAssets = {
	base: ["assets/index.android.bundle", ...mediaFiles],
	"config.hdpi": mediaFiles,
	"config.xxhdpi": mediaFiles,
} satisfies Record<(typeof apkSplits)[number], string[]>;

let reuseFolder = isMock;
if (!reuseFolder) {
	const matches = await Bun.file("tmp/ver")
		.text()
		.then((x) => x === version)
		.catch(() => false);
	if (matches) {
		const exist = await Promise.allSettled(
			Object.keys(apkAssets).map((folder) => exists(join(apksFolder, folder, "res"))),
		);
		if (exist.every((x) => x.status === "fulfilled" && x.value)) reuseFolder = true;
	}
}

// Temp folder yippee!

if (!reuseFolder) await rm(workFolder, { force: true, recursive: true });
if (!(await exists(apksFolder))) await mkdir(apksFolder, { recursive: true });

if (!reuseFolder) {
	// Download the APKs
	log("Downloading APKs...");

	const downloadProgress = makeProgress(
		Object.fromEntries(Object.keys(apkAssets).map((apk) => [apk, `Downloading ${apk}.apk`])),
	);
	await Promise.allSettled(
		Object.keys(apkAssets).map((apk) => {
			return wrapPromise(
				fetch(cdnUrl + apk, {
					headers: {
						"User-Agent": trackerUserAgent,
						"Cache-Control": "public, max-age=3600",
					},
				})
					.then((res) => res.arrayBuffer())
					.then((data) => Bun.write(join(workFolder, `${apk}.zip`), data)),
				downloadProgress,
				apk,
			);
		}),
	);
	if (downloadProgress.anyFailed()) throw new Error(`Failed to download all APKs!\n${downloadProgress.prettyErrors()}`);

	log("\nUnzipping APKs...");

	const unzipProgress = makeProgress(
		Object.fromEntries(Object.keys(apkAssets).map((apk) => [apk, `Unzipping ${apk}.apk`])),
	);

	await Promise.allSettled(
		Object.entries(apkAssets).map(([apk, assets]) =>
			wrapPromise(
				Bun.$`unzip -o ${join(workFolder, `${apk}.zip`)} ${{
					raw: assets.map((file) => Bun.$.escape(file)).join(" "),
				}} -d ${join(apksFolder, apk)} 2>/dev/null`
					.quiet()
					.nothrow()
					.then(handleShellErr),
				unzipProgress,
				apk,
			),
		),
	);
	if (unzipProgress.anyFailed()) throw new Error(`Failed to unzip all APKs!\n${unzipProgress.prettyErrors()}`);

	await Bun.write(join(workFolder, "ver"), version);
} else log("Reusing folder!");

// Run tasks

await runTasks();

log("✅ Done");
