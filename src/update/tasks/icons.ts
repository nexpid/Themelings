import { copyFile, mkdir, readdir, rename } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import type { Icons } from "../../types";
import { commit } from "../git";
import type { Progress } from "../progress";
import { apksFolder, cuteVersion } from "../shared";
import { discordPath, join, listRequiredDirs, sortObj } from "../utils";

// a bit less scary code matching below, be warned
export async function parseAssets(code: string[]) {
	const retrievedAssets: {
		httpServerLocation: string;
		width: number;
		height: number;
		scales: number[];
		hash: string;
		name: string;
		type: "png" | "svg" | "lottie";
	}[] = [];

	for (let i = 0; i < code.length; i++) {
		// next line has asset info, after that are scales
		const line = code[i],
			infoLine = code[i + 1],
			scalesLine = code[i + 2];

		if (line.includes(".registerAsset") && infoLine?.includes("'httpServerLocation'") && scalesLine?.includes("[")) {
			const infoText = infoLine.match(/({.+?})/)?.[1];
			if (!infoText) throw new Error(`Failed to find infoText for ${infoLine} (line ${i + 1})`);

			const scalesText = scalesLine.match(/(\[.+?\])/)?.[1];
			if (!scalesText) throw new Error(`Failed to find scalesText for ${scalesLine} (line ${i + 2})`);

			const info = runInNewContext(`(${infoText})`);
			const scales = runInNewContext(`(${scalesText})`);
			info.scales = scales;

			if (
				["httpServerLocation", "hash", "name", "type"].every((x) => x in info) &&
				["svg", "png", "lottie"].includes(info.type) &&
				!info.httpServerLocation.includes("node_modules/.pnpm")
			) {
				retrievedAssets.push(info);
			}
		}
	}

	// get files of all apks
	const listed = (await readdir(apksFolder, { recursive: true })).map((x) => join(apksFolder, x));

	const icons: Icons = {};
	const toCopy: { from: string; to: string }[] = [];
	for (const asset of retrievedAssets) {
		const baseName = [...asset.httpServerLocation.split("/").slice(2), asset.name]
			.join("_")
			.toLowerCase()
			.replace(/\W+/g, "");
		const path = `${baseName}.${asset.type}`;

		const apkPath = listed.find((f) => f.endsWith(`/${path}`));
		if (apkPath) {
			const realPath = join(
				discordPath(asset.httpServerLocation.split("/").slice(2).join("/")),
				`${asset.name}.${asset.type}`,
			);

			icons[asset.name] = {
				file: realPath,
				hash: asset.hash,
				scales: asset.scales,
				width: asset.width ?? null,
				height: asset.height ?? null,
			};
			toCopy.push({
				from: apkPath,
				to: join("../data/icons", realPath),
			});
		}
	}

	return { icons, toCopy };
}

export default async function icons(progress: Progress, code: string[]) {
	progress.start("icons_getting");

	const { icons, toCopy } = await parseAssets(code);
	await Bun.write("../data/icons.json", JSON.stringify(sortObj(icons), undefined, 4));
	progress.update("icons_getting", true);

	progress.start("icons_copying");

	// don't delete the old icons folder so we can display the old images
	await rename("../data/icons", "../data/oldicons");
	const dirs = listRequiredDirs(toCopy.map((x) => x.to));

	await Promise.all(dirs.map((dir) => mkdir(dir, { recursive: true })));
	await Promise.all(toCopy.map(({ from, to }) => copyFile(from, to)));

	await commit(["icons.json", "icons"], `chore: update icons for ${cuteVersion}`);
	progress.update("icons_copying", true);
}
