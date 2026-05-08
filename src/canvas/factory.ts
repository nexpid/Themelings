import { join } from "node:path";
import { type Image, loadImage } from "@napi-rs/canvas";
import { type Diff, DiffType } from "../types";

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
	columns: Row[][];
}

function placeholderFile(file: string) {
	return file.endsWith(".lottie") ? join(import.meta.dir, "placeholders/lottie.png") : file;
}

const numColumns = 5;
const maxRows = 3;

async function makeSection(diffs: Map<string, Diff>, isFile: boolean, type: DiffType, header: string) {
	const filtered = [...diffs.entries()].filter(([, diff]) => diff.type === type);
	const section: Section = {
		header,
		columns: Array.from({ length: numColumns }, () => []),
	};

	let i = 0;
	for (const [name, diff] of filtered) {
		const columnInd = i++ % numColumns;

		const column = section.columns[columnInd],
			nextColumn = section.columns[i % numColumns];
		if (!column) throw new Error(`Couldn't find column of index ${columnInd}`);

		if (!nextColumn || nextColumn.length >= maxRows) {
			column.push({
				item: {
					type: "blob",
					blob: `+${(filtered.length - i + 1).toLocaleString("en-US")} ${header.toLowerCase()}`,
				},
			});
			break;
		}

		const changed = diff.type === DiffType.Changed;
		const item: Item = isFile
			? { type: "image", image: await loadImage(placeholderFile(diff.source)) }
			: { type: "color", colors: [changed && diff.oldSource.split(","), diff.source.split(",")].filter((x) => !!x) };

		column.push(
			...[
				changed &&
					isFile && {
						subtitle: name,
						item: {
							type: "image",
							image: await loadImage(placeholderFile(diff.oldSource)),
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

	section.columns = section.columns.filter((x) => x.length);
	return section;
}

export async function makeSections(diffs: Map<string, Diff>, isFile = false) {
	return [
		await makeSection(diffs, isFile, DiffType.Added, "Added"),
		await makeSection(diffs, isFile, DiffType.Changed, "Changed"),
		await makeSection(diffs, isFile, DiffType.Renamed, "Renamed"),
		await makeSection(diffs, isFile, DiffType.Removed, "Removed"),
	].filter((x) => x.columns[0]);
}
