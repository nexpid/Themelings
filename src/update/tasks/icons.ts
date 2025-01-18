import { copyFile, mkdir, readdir, rename, writeFile } from "node:fs/promises";
import type { Icons } from "../../types";
import { type Progress, join, sortObj } from "../util";

export default async function icons(
	progress: Progress,
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
				["svg", "png", "lottie"].includes(obj.type) &&
				!obj.httpServerLocation.includes("node_modules/.pnpm")
			) {
				lookForFiles.push(obj);
			}
		}
	}

	// get files of every folder
	const listed = (
		(await Promise.allSettled(
			paths.map((path) =>
				readdir(path, { recursive: true }).then((f) =>
					f.map((e) => join(path, e)),
				),
			),
		)) as PromiseFulfilledResult<string[]>[]
	)
		.filter((f) => f.status === "fulfilled")
		.flatMap((f) => f.value);

	const icons = {} as Icons;
	const toMove = new Array<[string, string]>();
	for (const lookFor of lookForFiles) {
		const path = `${`${lookFor.httpServerLocation.split("/").slice(2).join("_")}_${
			lookFor.name
		}`
			.toLowerCase()
			.replace(/\W+/g, "")}.${lookFor.type}`;

		const filePath = listed.find((f) => f.endsWith(`/${path}`));

		if (filePath) {
			let root = lookFor.httpServerLocation.split("/").slice(2).join("/");
			if (root.startsWith("../")) root = `_/${root.slice(3)}`;

			const actualPath = join(root, `${lookFor.name}.${lookFor.type}`);
			icons[lookFor.name] = {
				file: actualPath,
				hash: lookFor.hash,
				scales: lookFor.scales,
				width: lookFor.width ?? null,
				height: lookFor.height ?? null,
			};

			toMove.push([filePath, actualPath]);
		}
	}

	progress.update("icons_getting", true);
	progress.start("icons_copying");

	// don't delete old icons just yet so we can display the old images
	await rename("../data/icons", "../data/oldicons");

	await writeFile(
		"../data/icons.json",
		JSON.stringify(sortObj(icons), undefined, 4),
	);
	await Promise.all(
		toMove.flatMap(([og, actual]) => [
			mkdir(join("../data/icons", actual.split("/").slice(0, -1).join("/")), {
				recursive: true,
			})
				.catch((e) => (e?.code === "EEXIST" ? void e : (e?.message ?? e)))
				.then(() => copyFile(og, join("../data/icons", actual))),
		]),
	);

	progress.update("icons_copying", true);
}
