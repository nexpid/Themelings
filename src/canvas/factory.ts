import { join } from "node:path";
import { type Image, loadImage } from "@napi-rs/canvas";
import { type Diff, DiffType } from "../types";
import { maxChangesThreshold } from "../update/shared";

export type Item =
	| {
			type: "color";
			colors: string[][];
	  }
	| {
			type: "image";
			image: Image;
	  }
	| {
			type: "blob";
			blob: string;
	  };

export interface Row {
	title?: string;
	subtitle?: string;
	item: Item;
}

export interface Section {
	header: string;
	entries: Row[][];
}

function placeholderFile(file: string) {
	return file.endsWith(".lottie") ? join(import.meta.dir, "placeholders/lottie.png") : file;
}

async function makeSection(diffs: Map<string, Diff>, isFile: boolean, type: DiffType, header: string) {
	const section: Section = {
		header,
		entries: [],
	};

	const filtered = diffs
		.entries()
		.toArray()
		.filter(([, diff]) => diff.type === type);
	for (const [name, diff] of filtered) {
		if (section.entries.length >= maxChangesThreshold) {
			section.entries.push([
				{
					item: {
						type: "blob",
						blob: `+${(filtered.length - section.entries.length).toLocaleString("en-US")} ${header.toLowerCase()}`,
					},
				},
			]);
			break;
		}

		const changed = diff.type === DiffType.Changed;
		const item: Item = isFile
			? { type: "image", image: await loadImage(placeholderFile(diff.source)) }
			: { type: "color", colors: [changed && diff.oldSource.split(","), diff.source.split(",")].filter((x) => !!x) };

		section.entries.push(
			[
				changed &&
					isFile && {
						subtitle: name,
						item: {
							type: "image",
							image: await loadImage(diff.oldSource),
						} as Item,
					},
				{
					title: name,
					subtitle: diff.type === DiffType.Renamed ? diff.oldName : undefined,
					item,
				},
			].filter((x) => !!x),
		);
	}

	return section;
}

export async function makeSections(diffs: Map<string, Diff>, isFile = false) {
	return [
		await makeSection(diffs, isFile, DiffType.Added, "Added"),
		await makeSection(diffs, isFile, DiffType.Changed, "Changed"),
		await makeSection(diffs, isFile, DiffType.Renamed, "Renamed"),
		await makeSection(diffs, isFile, DiffType.Removed, "Removed"),
	].filter((x) => x.entries[0]);
}
