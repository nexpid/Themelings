import { rm } from "node:fs/promises";
import { dirname } from "node:path";
import { commit } from "../commit";
import { deminify } from "../deminify";
import { cuteVersion } from "../shared";
import { type Progress, join, mkdirSuppressed, sortByHierarchy } from "../util";

const moduleStartIndentation = " ".repeat(4);

export default async function code(progress: Progress, code: string[]) {
	progress.start("code_getting");
	const files = new Map<string, string>();

	let moduleStart: number | null = null;

	for (let i = 0; i < code.length; i++) {
		const line = code[i];

		// find the start of the file import based on the indentation
		if (
			new RegExp(`^${moduleStartIndentation}r\\d = function\\(`).test(line) &&
			line.includes(" { // Environment:")
		) {
			moduleStart = i;
		}

		// easiest way to check
		const path = code[i + 1]?.match(/ = '(.*?)';$/)?.[1];
		if (line.match(/ = r\d\.fileFinishedImporting;$/) && path) {
			const start = moduleStart;
			if (!start)
				throw `moduleStart was null for ${start}~${i}; null ~ ${code[i]}`;
			moduleStart = null;

			// find the end of the file import based on the indentation
			const moduleEndThing = `${moduleStartIndentation}};`;
			let moduleEnd: number | null = null;
			for (let j = i; j < code.length; j++) {
				if (code[j] === moduleEndThing) {
					moduleEnd = i = j;
					break;
				}
			}

			if (!moduleEnd)
				throw `moduleEnd was null for ${start}~${i}; ${code[start]} ~ ${code[i]}`;

			files.set(
				join("app", path),
				code
					.slice(start, moduleEnd + 1)
					.map((line) => line.slice(moduleStartIndentation.length))
					.join("\n"),
			);
		}
	}

	await Bun.write(
		"../data/source.jsonl",
		[...files.entries()]
			.map(
				([file, text]) =>
					`{ "file": ${JSON.stringify(file)}, "size": ${text.length} }`,
			)
			.join("\n"),
	);

	progress.update("code_getting", true);
	progress.start("code_remaking");

	const filePrefix = "../data/source";

	await rm(filePrefix, { recursive: true, force: true });

	const dirs = new Set(
		[...files.keys()].map((x) => dirname(x)).sort(sortByHierarchy),
	);
	await Promise.all(
		dirs
			.values()
			.map((dir) =>
				mkdirSuppressed(join(filePrefix, dir), { recursive: true }),
			),
	);

	for (const [file, text] of files.entries())
		await Bun.write(join(filePrefix, file), deminify(text, file));

	progress.update("code_remaking", true);
	progress.start("code_pushing");

	// hope the files get written in this time idk :P blehhh
	await Bun.sleep(1500);

	await commit(
		["source.jsonl", "source/*"],
		`chore: update source for ${cuteVersion}`,
	);
	progress.update("code_pushing", true);
}
