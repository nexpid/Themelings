import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import type { Row, Section } from "./factory";
import { measureText, wrapText } from "./utils";

async function bulkRegister(family: string, path: string) {
	for (const item of await readdir(path)) GlobalFonts.registerFromPath(join(path, item), family);
}
await bulkRegister("GG Sans", join(import.meta.dir, "fonts/ggsans"));
await bulkRegister("GG Mono", join(import.meta.dir, "fonts/ggmono"));

function calcSectionWidth(entries: { textWidth: number; itemWidth: number }[][]) {
	const items = entries
		.map((rows) => Math.max(...rows.map(({ textWidth, itemWidth }) => Math.max(textWidth, itemWidth))))
		.reduce((a, b) => a + b, 0);
	return items + (entries.length - 1) * layout.card.gapX;
}
function calcSectionHeight(entries: Row[][]) {
	const texts = Math.max(
		0,
		...entries.map((rows) =>
			rows
				.map((row) => Number(!!row.title) + Number(!!row.subtitle) + Number(row.item.type === "blob"))
				.reduce((a, b) => a + b, 0),
		),
	);
	const items = Math.max(0, ...entries.map((rows) => rows.length));
	const gaps = texts + items - 1;
	return texts * textSizes.title + items * itemSize + gaps * layout.card.gapY;
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
		gapY: 6,
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
};

const itemSize = 128;
const blobSize = itemSize + layout.card.gapY + textSizes.title;

const watermarkText = "Themelings";

const mctx = createCanvas(1, 1).getContext("2d");
export function drawSections(sections: Section[]) {
	const headerFont = `600 ${textSizes.header}px GG Sans`;
	const titleFont = `400 ${textSizes.title}px GG Mono`;

	const sects = sections.map(({ header, entries }) => ({
		headerWidth: measureText(mctx, headerFont, header).width,
		header,
		entries: entries.map((rows) =>
			rows.map(({ title, subtitle, item }) => ({
				title,
				subtitle,
				textWidth: Math.max(
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
	const width = Math.max(
		...sects.map(({ headerWidth }) => headerWidth),
		...sects.map(({ entries }) => layout.card.padding * 2 + calcSectionWidth(entries)),
	);
	const height =
		sects
			.map(
				({ entries }) =>
					textSizes.header +
					layout.section.gap +
					layout.card.padding * 2 +
					calcSectionHeight(entries) +
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

		const hasBlob = sect.entries.flat().some((x) => x.item.type === "blob");
		const sectionWidth = hasBlob ? calcSectionWidth(sect.entries) + layout.card.padding * 2 : width,
			sectionHeight = calcSectionHeight(sect.entries);
		ctx.fillStyle = colors.section;
		ctx.beginPath();
		ctx.roundRect(x, y, sectionWidth, sectionHeight + layout.card.padding * 2, layout.card.radius);
		ctx.fill();
		y += layout.card.padding;
		x += layout.card.padding;

		let wx = x;
		for (const rows of sect.entries) {
			let wy = y;
			for (const row of rows) {
				ctx.font = titleFont;
				if (row.subtitle) {
					ctx.fillStyle = colors.textMuted;
					ctx.fillText(row.subtitle, wx, wy);
					wy += textSizes.title + layout.card.gapY;
				}
				if (row.title) {
					ctx.fillStyle = colors.textNormal;
					ctx.fillText(row.title, wx, wy);
					wy += textSizes.title + layout.card.gapY;
				}

				const midX = wx + Math.max(row.textWidth, row.itemWidth) / 2 - row.itemWidth / 2;
				if (row.item.type === "blob") {
					const dx = sectionWidth + layout.card.padding - blobSize;

					ctx.fillStyle = colors.blob;
					ctx.beginPath();
					ctx.roundRect(dx, y, blobSize, sectionHeight, layout.blob.radius);
					ctx.fill();

					ctx.font = `600 ${textSizes.blob}px GG Sans`;
					ctx.fillStyle = colors.textNormal;
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";

					const wrapped = wrapText(ctx, row.item.blob, blobSize);
					const height = textSizes.blob / 2;
					for (let i = 0; i < wrapped.length; i++)
						ctx.fillText(
							wrapped[i],
							dx + blobSize / 2,
							y + sectionHeight / 2 - height * (wrapped.length - 1) + textSizes.blob * i,
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
			wx += Math.max(...rows.flatMap(({ textWidth, itemWidth }) => [textWidth, itemWidth])) + layout.card.gapX;
		}
		y += sectionHeight;

		x -= layout.card.padding;
		y += layout.card.padding;
		y += layout.background.gap;
	}

	// watermark
	ctx.font = `400 ${layout.background.padding / 2}px GG Sans`;
	ctx.fillStyle = "#fff4";
	ctx.fillText(watermarkText, canvas.width - ctx.measureText(watermarkText).width - 3, 0);

	return canvas;
}
