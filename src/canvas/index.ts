import { Canvas, FontLibrary, loadImage } from "skia-canvas";
import { type Diff, DiffEnum } from "../types";
import { maxChangesThreshold } from "../update/util";
import { getLines } from "./util";

interface Label {
	txt: string;
	tint?: "muted";
}

type DataEntry = {
	label: Label[];
	color?: string;
	file?: string;
	important?: boolean;
};

FontLibrary.use({
	"gg-sans": ["src/canvas/fonts/ggsans/*.ttf"],
	"gg-mono": ["src/canvas/fonts/ggmono/*.ttf"],
});

const colors = {
	bgMain: "#1C1D23", // BACKGROUND_PRIMARY
	bgSecondary: "#26272F", // BACKGROUND_SECONDARY
	textNormal: "#C7C8CE", // TEXT_NORMAL
	textMuted: "#818491", // TEXT_NORMAL
	importantBg: "#EEEEEE05", // custom, something like BG_MOD_**********
};

export function convertDiffs(diffs: Map<string, Diff>, color?: boolean): Record<string, DataEntry[][]> {
	const obj = {
		Added: [[]],
		Changed: [[], []],
		Renamed: [[]],
		Removed: [[]],
	} as Record<string, DataEntry[][]>;

	const changesCounter = {
		Added: 0,
		Changed: 0,
		Renamed: 0,
		Removed: 0,
	};

	const entries = [...diffs.entries()];
	for (const [label, change] of entries) {
		if (change.change === DiffEnum.Added && maxChangesThreshold >= changesCounter.Added) {
			if (!color && !change.curFile) continue;

			if (changesCounter.Added === maxChangesThreshold) {
				const count = entries.filter(([_, x]) => x.change === DiffEnum.Added).length - changesCounter.Added;

				obj.Added[0].push({
					label: [{ txt: `(+${count} addition${count > 1 ? "s" : ""})` }],
					important: true,
				});
			} else {
				obj.Added[0].push({
					label: [{ txt: label }],
					file: !color ? change.curFile : undefined,
					color: color ? change.cur : undefined,
				});
			}
			changesCounter.Added++;
		} else if (change.change === DiffEnum.Changed && maxChangesThreshold >= changesCounter.Changed) {
			if (!color && (!change.curFile || !change.oldFile)) continue;

			if (changesCounter.Changed === maxChangesThreshold) {
				const count = entries.filter(([_, x]) => x.change === DiffEnum.Changed).length - changesCounter.Changed;
				const obja = {
					label: [{ txt: `(+${count} change${count > 1 ? "s" : ""})` }],
					important: true,
				};

				obj.Changed[0].push(obja);
				obj.Changed[1].push(obja);
			} else {
				obj.Changed[0].push({
					label: [{ txt: label, tint: "muted" }],
					file: !color ? change.oldFile : undefined,
					color: color ? change.old : undefined,
				});
				obj.Changed[1].push({
					label: [{ txt: label }],
					file: !color ? change.curFile : undefined,
					color: color ? change.cur : undefined,
				});
			}
			changesCounter.Changed++;
		} else if (change.change === DiffEnum.Renamed && maxChangesThreshold >= changesCounter.Renamed) {
			if (!color && !change.curFile) continue;

			if (changesCounter.Renamed === maxChangesThreshold) {
				const count = entries.filter(([_, x]) => x.change === DiffEnum.Renamed).length - changesCounter.Renamed;

				obj.Renamed[0].push({
					label: [{ txt: `(+${count} rename${count > 1 ? "s" : ""})` }],
					important: true,
				});
			} else {
				obj.Renamed[0].push({
					label: [{ txt: change.old, tint: "muted" }, { txt: label }],
					file: !color ? change.curFile : undefined,
					color: color ? change.cur : undefined,
				});
			}
			changesCounter.Renamed++;
		} else if (change.change === DiffEnum.Removed && maxChangesThreshold >= changesCounter.Removed) {
			if (!color && !change.oldFile) continue;

			if (changesCounter.Removed === maxChangesThreshold) {
				const count = entries.filter(([_, x]) => x.change === DiffEnum.Removed).length - changesCounter.Removed;

				obj.Removed[0].push({
					label: [{ txt: `(+${count} removal${count > 1 ? "s" : ""})` }],
					important: true,
				});
			} else {
				obj.Removed[0].push({
					label: [{ txt: label }],
					file: !color ? change.oldFile : undefined,
					color: color ? change.old : undefined,
				});
			}
			changesCounter.Removed++;
		}
	}

	return Object.fromEntries(Object.entries(obj).filter(([_, entries]) => entries[0].length > 0));
}

export default async function draw(data: Record<string, DataEntry[][]>) {
	const entries = Object.entries(data).filter((x) => x[1].length > 0);

	// constants
	const labelFontSize = 24;
	const assetTitleFontSize = 18;
	const importantTextFontSize = 20;

	const padding = 16;
	const textHei = assetTitleFontSize + padding / 4;
	const itemHei = 128;
	const importantTextItemWid = itemHei + 3 + textHei;

	// measures the width of images & text

	const measureCtx = new Canvas(1, 1).getContext("2d");

	const assetTitleFont = `400 ${assetTitleFontSize}px gg-mono`;
	measureCtx.font = assetTitleFont;

	const imageMap = new Map<string, any>();
	const imageWidths = new Map<string, number>();
	const files = entries
		.map(([_, changes]) => changes.map((row) => row.map((x: any) => x.file)))
		.flat(2)
		.filter((x, i, a) => x && a.indexOf(x) === i);

	for (const file of files) {
		const img = await loadImage(file);
		imageMap.set(file, img);

		const mult = itemHei / img.height;
		imageWidths.set(file, img.width * mult);
	}

	const textMeasurements: number[] = [];
	const textWidthMap = new Map<Label[], number>();

	const widForAsset = (asset: DataEntry) =>
		asset.file ? imageWidths.get(asset.file!)! : asset.important ? importantTextItemWid : asset.color ? itemHei : 0;

	for (const [_, changes] of entries) {
		for (const row of changes) {
			let rowLen = 0;
			for (const text of row) {
				let wid = 0;
				if (text.important) wid = importantTextItemWid;
				else wid = Math.max(...text.label.map(({ txt }) => measureCtx.measureText(txt).width), widForAsset(text));

				rowLen += wid;
				textWidthMap.set(text.label, wid);
			}
			textMeasurements.push(rowLen + (padding * row.length - 1));
		}
	}

	const widestText = Math.max(...textMeasurements);
	const tallestText = entries.map(([_, changes]) =>
		changes.map((x) => {
			const sep = Math.max(...x.map((y) => (Array.isArray(y.label) ? y.label : [y.label]).length));

			return sep * textHei + (sep - 1) * 1;
		}),
	);

	const canvas = new Canvas(
		Math.max(widestText + padding * 2, 100),
		padding * 2 +
			entries.reduce(
				(val, [_, changes], changesI) =>
					val +
					24 + // title
					padding / 4 + // padding between title and first row
					changes.reduce(
						(val, _, rowI) => val + tallestText[changesI][rowI] + itemHei, // text + item
						0,
					) +
					(changes.length - 1) * (padding / 4), // padding between rows
				0,
			) +
			(entries.length - 1) * (padding * 1.5), // padding between entries
	);
	const ctx = canvas.getContext("2d");
	ctx.textBaseline = "top";

	// background
	ctx.fillStyle = colors.bgMain;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	const x = padding;
	let y = padding;
	for (const [title, changes] of entries) {
		const changesTextHei = changes.map((x) => {
			const sep = Math.max(...x.map((y) => (Array.isArray(y.label) ? y.label : [y.label]).length));

			return sep * textHei + (sep - 1) * 1;
		});

		ctx.fillStyle = colors.bgSecondary;
		ctx.beginPath();
		ctx.roundRect(
			x - padding / 2,
			y - padding / 2,
			canvas.width - padding,
			24 +
				padding / 4 +
				changes.reduce((v, _, i) => v + changesTextHei[i] + itemHei, 0) +
				(changes.length - 1) * (padding / 4) +
				padding,
			12,
		);
		ctx.fill();

		ctx.fillStyle = colors.textNormal;
		ctx.font = `600 ${labelFontSize}px gg-sans`;
		ctx.fillText(title, x, y);
		y += 24 + padding / 4;

		// check if every row is the same length, throw error if not
		if (!changes.every((row) => row.length === changes[0].length)) {
			throw new Error("Rows must be the same length");
		}

		const textWids: number[] = [];
		for (let i = 0; i < changes[0].length; i++) {
			const wids = [];
			for (const row of changes) wids.push(textWidthMap.get(row[i].label)!);

			textWids[i] = Math.max(...wids);
		}

		for (let r = 0; r < changes.length; r++) {
			const row = changes[r];
			const thisTextHei = changesTextHei[r];

			let spacing = 0;
			for (let i = 0; i < changes[0].length; i++) {
				const asset = row[i];
				const textWid = textWids[i];
				const itemWid = widForAsset(asset);

				const midX = x + textWid / 2 - itemWid / 2;

				if (!asset.important) {
					ctx.font = assetTitleFont;

					const lab = Array.isArray(asset.label) ? asset.label : [asset.label];
					for (let i = 0; i < lab.length; i++) {
						if (lab[i].tint === "muted") ctx.fillStyle = colors.textMuted;
						else ctx.fillStyle = colors.textNormal;

						ctx.fillText(lab[i].txt, x + spacing, y + i * textHei + i * 1);
					}
				}

				if (asset.color) {
					ctx.fillStyle = asset.color;
					ctx.beginPath();
					ctx.arc(midX + spacing + itemHei / 2, y + thisTextHei + itemHei / 2, itemHei / 2, 0, 2 * Math.PI);
					ctx.fill();
				} else if (asset.file) {
					ctx.drawImage(
						imageMap.get(asset.file)!,
						midX + spacing,
						y + thisTextHei,
						imageWidths.get(asset.file)!,
						itemHei,
					);
				} else if (asset.important) {
					ctx.fillStyle = colors.importantBg;
					ctx.beginPath();
					ctx.roundRect(x + spacing, y, importantTextItemWid, importantTextItemWid, 25);
					ctx.fill();

					ctx.fillStyle = colors.textNormal;
					ctx.font = `600 ${importantTextFontSize}px gg-sans`;

					const lines = getLines(ctx, asset.label[0].txt, importantTextItemWid);

					const startY = y + importantTextItemWid / 2 - (lines.length * (importantTextFontSize + 1)) / 2;
					for (let l = 0; l < lines.length; l++) {
						const textWid = ctx.measureText(lines[l]).width;
						const setX = x + spacing + importantTextItemWid / 2 - textWid / 2;

						ctx.fillText(lines[l], setX, startY + l * (importantTextFontSize + 1));
					}
				}

				spacing += textWid + padding;
			}

			y += thisTextHei + itemHei;
			if (r !== changes.length - 1) y += padding / 4;
		}

		y += padding * 1.5;
	}

	// watermark :3
	ctx.font = `400 ${padding / 2}px gg-sans`;
	const watermarkText = "Themelings";
	const watermarkTextWidth = ctx.measureText(watermarkText).width;

	ctx.fillStyle = "#fff4";
	ctx.fillText(watermarkText, canvas.width - watermarkTextWidth - padding / 2, 0);

	return canvas;
}
