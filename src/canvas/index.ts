import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import { file } from "bun";
import type { Row, Section } from "./factory";
import { measureText, transformSvg, wrapText } from "./utils";

async function bulkRegister(family: string, path: string) {
	for (const item of await readdir(path)) GlobalFonts.registerFromPath(join(path, item), family);
}
await bulkRegister("GG Sans", join(import.meta.dir, "fonts/ggsans"));
await bulkRegister("GG Mono", join(import.meta.dir, "fonts/ggmono"));

function calcColumnWidth(column: { textWidth: number; itemWidth: number }[]) {
	return Math.max(0, ...column.map(({ textWidth, itemWidth }) => Math.max(0, textWidth, itemWidth)));
}

function calcColumnHeight(column: Row[]) {
	const texts = column
		.map((row) => Number(!!row.title) + Number(!!row.subtitle) + Number(row.item.type === "blob"))
		.reduce((a, b) => a + b, 0);
	const items = texts + column.length - 1;
	return texts * textSizes.title + column.length * itemSize + items * layout.card.gapY;
}

function calcSectionHeight(columns: Row[][]) {
	return Math.max(0, ...columns.map((column) => calcColumnHeight(column)));
}

const layout = {
	background: {
		padding: 24,
		gap: 18,
	},
	section: {
		gap: 8,
	},
	card: {
		radius: 24,
		padding: 12,
		gapX: 16,
		gapY: 8,
	},
	blob: {
		radius: 24 - 12,
	},
	color: {
		radius: 24,
	},
};

const textSizes = {
	header: 24,
	title: 18,
	blob: 24,
};

const colors = {
	background: "#1c1d23", // BACKGROUND_BASE_LOWEST
	section: "#26272f", // CARD_BACKGROUND_DEFAULT
	blob: "#6c6f7c1f", // BACKGROUND_MOD_MUTED
	textNormal: "#c7c8ce", // TEXT_NORMAL
	textMuted: "#818491", // TEXT_MUTED
	watermark: "#2f3035", // TEXT_OVERLAY_DARK
};

const itemSize = 128;
const blobSize = itemSize + layout.card.gapY + textSizes.title;

const watermark = await transformSvg(await file(join(import.meta.dir, "placeholders/watermark.svg")).text(), {
	color: colors.watermark,
	height: layout.background.padding,
});

const mctx = createCanvas(1, 1).getContext("2d");
export function drawSections(sections: Section[]) {
	const headerFont = `600 ${textSizes.header}px GG Sans`;
	const titleFont = `400 ${textSizes.title}px GG Mono`;

	const sects = sections.map(({ header, columns }) => ({
		headerWidth: measureText(mctx, headerFont, header).width,
		header,
		columns: columns.map((column) =>
			column.map(({ title, subtitle, item }) => ({
				title,
				subtitle,
				textWidth: Math.max(
					0,
					title ? measureText(mctx, titleFont, title).width : 0,
					subtitle ? measureText(mctx, titleFont, subtitle).width : 0,
				),
				item,
				itemWidth:
					item.type === "blob"
						? blobSize
						: item.type === "image"
							? (item.image.width / item.image.height) * itemSize
							: itemSize,
			})),
		),
	}));
	const columnWidths = Array.from({ length: Math.max(0, ...sects.map(({ columns }) => columns.length)) }, (_, i) =>
		Math.max(0, ...sects.map(({ columns }) => (columns[i] ? calcColumnWidth(columns[i]) : 0))),
	);
	const sectionWidth =
		columnWidths.reduce((a, b) => a + b, 0) + layout.card.gapX * (columnWidths.length - 1) + layout.card.padding * 2;

	const width = Math.max(0, ...sects.map(({ headerWidth }) => headerWidth), sectionWidth);
	const height =
		sects
			.map(
				({ columns }) =>
					textSizes.header +
					layout.section.gap +
					layout.card.padding * 2 +
					calcSectionHeight(columns) +
					layout.background.gap,
			)
			.reduce((a, b) => a + b, 0) - layout.background.gap;

	const canvas = createCanvas(layout.background.padding * 2 + width, layout.background.padding * 2 + height);
	const ctx = canvas.getContext("2d");
	ctx.textBaseline = "top";

	ctx.fillStyle = colors.background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	let x = layout.background.padding,
		y = layout.background.padding;
	for (const sect of sects) {
		ctx.fillStyle = colors.textNormal;
		ctx.font = headerFont;
		ctx.fillText(sect.header, x, y);
		y += textSizes.header + layout.section.gap;

		const sectionHeight = calcSectionHeight(sect.columns);
		ctx.fillStyle = colors.section;
		ctx.beginPath();
		ctx.roundRect(x, y, sectionWidth, sectionHeight + layout.card.padding * 2, layout.card.radius);
		ctx.fill();
		y += layout.card.padding;
		x += layout.card.padding;

		let wx = x;
		for (let i = 0; i < sect.columns.length; i++) {
			let wy = y;

			const column = sect.columns[i];
			const columnWidth = columnWidths[i];
			if (!columnWidth) throw new Error(`Failed to get columnWidth for ${i}, ${columnWidth}`);

			const centerX = wx + columnWidth / 2;
			for (const row of column) {
				ctx.font = titleFont;
				if (row.subtitle) {
					ctx.fillStyle = colors.textMuted;
					ctx.fillText(row.subtitle, centerX - row.textWidth / 2, wy);
					wy += textSizes.title + layout.card.gapY;
				}
				if (row.title) {
					ctx.fillStyle = colors.textNormal;
					ctx.fillText(row.title, centerX - row.textWidth / 2, wy);
					wy += textSizes.title + layout.card.gapY;
				}

				const midX = centerX - row.itemWidth / 2;
				if (row.item.type === "blob") {
					const blobHeight = sectionHeight - wy + y;

					ctx.fillStyle = colors.blob;
					ctx.beginPath();
					ctx.roundRect(wx, wy, columnWidth, blobHeight, layout.blob.radius);
					ctx.fill();

					ctx.font = `600 ${textSizes.blob}px GG Sans`;
					ctx.fillStyle = colors.textNormal;
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";

					const wrapped = wrapText(ctx, row.item.blob, columnWidth);
					const height = textSizes.blob / 2;
					for (let i = 0; i < wrapped.length; i++)
						ctx.fillText(
							wrapped[i],
							wx + columnWidth / 2,
							wy + blobHeight / 2 - height * (wrapped.length - 1) + textSizes.blob * i,
						);

					ctx.textAlign = "left";
					ctx.textBaseline = "top";
				} else if (row.item.type === "image") {
					ctx.drawImage(row.item.image, midX, wy, row.itemWidth, itemSize);
					wy += itemSize + layout.card.gapY;
				} else if (row.item.type === "color") {
					for (let i = 0; i < row.item.colors.length; i++) {
						const colors = row.item.colors[i];
						for (let j = 0; j < colors.length; j++) {
							const color = colors[j];
							ctx.save();
							ctx.beginPath();
							ctx.rect(
								Math.floor(midX + (itemSize / colors.length) * j),
								Math.floor(wy + (itemSize / row.item.colors.length) * i),
								Math.ceil(itemSize / colors.length),
								Math.ceil(itemSize / row.item.colors.length),
							);
							ctx.clip();

							ctx.beginPath();
							ctx.fillStyle = color;
							ctx.roundRect(midX, wy, itemSize, itemSize, layout.color.radius);
							ctx.fill();
							ctx.restore();
						}
					}
					wy += itemSize + layout.card.gapY;
				}
			}
			wx += columnWidth + layout.card.gapX;
		}
		y += sectionHeight;

		x -= layout.card.padding;
		y += layout.card.padding;
		y += layout.background.gap;
	}

	// watermark
	ctx.drawImage(watermark, canvas.width - watermark.width - 1, 1);

	return canvas;
}
