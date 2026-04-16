import type { CanvasRenderingContext2D } from "@napi-rs/canvas";

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
