import { exists, mkdir, rm } from "node:fs/promises";
import { runTasks } from "./runtasks";
import { apksToDownload, isMock, version } from "./shared";
import { handleShellErr, join, makeProgress, wrapPromise } from "./util";

const api = `https://tracker.vendetta.rocks/tracker/download/${version}/`;
const mediaFiles = ["res/**/*.{png,jpg,lottie}"] as string[];

const apkStuffToDownload = {
	base: ["assets/index.android.bundle", ...mediaFiles],
	"config.xxhdpi": mediaFiles,
	"config.hdpi": mediaFiles,
} satisfies Record<(typeof apksToDownload)[number], string[]>;

const apkStuffToCheck = {
	base: ["assets/index.android.bundle", "res"],
	"config.xxhdpi": ["res"],
	"config.hdpi": ["res"],
} satisfies Record<(typeof apksToDownload)[number], string[]>;

const canReuseFolder =
	isMock ||
	(
		await Promise.allSettled([
			...Object.entries(apkStuffToCheck)
				.flatMap(([apk, stuff]) => stuff.map((file) => join("tmp", apk, file)))
				.map(
					(p) => exists(p), // Bun's Bun.file().exists doesn't support folders
				),
			Bun.file("tmp/ver")
				.text()
				.then((x) => x === version),
		])
	).every((x) => x.status === "fulfilled" && x.value);

// Temp folder yippee!

const tempFolder = "tmp";
if (!canReuseFolder) await rm(tempFolder, { force: true, recursive: true });
if (!(await exists(tempFolder))) await mkdir(tempFolder, { recursive: true });

if (!canReuseFolder) {
	// Download the APKs
	console.log("Downloading APKs...");

	const downloadProgress = makeProgress({
		...Object.fromEntries(
			apksToDownload.map((apk) => [apk, `Downloading ${apk}.apk`]),
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
				path,
			);
		}),
	)) as PromiseFulfilledResult<ArrayBuffer>[];
	if (downloadProgress.anyFailed())
		throw new Error(
			`Failed to download all APKs!\n${downloadProgress.prettyErrors()}`,
		);

	downloadProgress.start("writing");
	await Bun.write("tmp/ver", version);

	for (let i = 0; i < apksToDownload.length; i++)
		await Bun.write(
			join(tempFolder, `${apksToDownload[i]}.zip`),
			apks[i].value,
		);

	downloadProgress.update("writing", true);
	console.log("\nUnzipping APKs...");

	const unzipProgress = makeProgress(
		Object.fromEntries(
			apksToDownload.map((apk) => [apk, `Unzipping ${apk}.apk`]),
		),
	);
	await Promise.allSettled(
		apksToDownload.map((apk) =>
			wrapPromise(
				Bun.$`unzip -o ${join(tempFolder, `${apk}.zip`)} ${{
					raw: apkStuffToDownload[apk]
						.flatMap((files) =>
							Bun.$.braces(files).map((y) => JSON.stringify(y)),
						)
						.join(" "),
				}} -d ${join(tempFolder, apk)} 2>/dev/null`
					.quiet()
					.nothrow()
					.then(handleShellErr),
				unzipProgress,
				apk,
			),
		),
	);
	if (unzipProgress.anyFailed())
		throw new Error(
			`Failed to unzip all APKs!\n${unzipProgress.prettyErrors()}`,
		);
} else console.log("Reusing folder!");

// Run tasks

await runTasks(tempFolder);

console.log("✅ Done");
