import { type CanvasRenderingContext2D, loadImage } from "@napi-rs/canvas";

export function measureText(ctx: CanvasRenderingContext2D, font: string, text: string) {
	ctx.font = font;
	return ctx.measureText(text);
}

export function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
	// https://stackoverflow.com/a/16599668
	const words = text.split(" ");
	let lines: string[] = [],
		line = words[0];

	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const newText = `${line} ${word}`;

		const width = ctx.measureText(newText).width;
		if (width < maxWidth) line = newText;
		else {
			lines.push(line);
			line = word;
		}
	}

	lines.push(line);
	return lines;
}

export async function transformSvg(svg: string, config: { color?: string; height?: number; width?: number }) {
	const text = config.color ? svg.replace(/fill="#[a-z0-9]{3,6}"/gi, `fill="${config.color}"`) : svg;

	const image = await loadImage(Buffer.from(text));
	if (config.width && config.height) {
		image.width = config.width;
		image.height = config.height;
	} else if (config.width) {
		image.height = (image.height / image.width) * config.width;
		image.width = config.width;
	} else if (config.height) {
		image.width = (image.width / image.height) * config.height;
		image.height = config.height;
	}
	return image;
}
