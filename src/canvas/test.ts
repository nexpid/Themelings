import mock from "../mock";
import draw, { convertDiffs } from ".";

await Bun.write(
	"temp/files.png",
	await draw(await convertDiffs(mock.icons))
		.then((x) => x.toBuffer("image/png"))
		.then((x) => new Uint8Array(x)),
	{ createPath: true },
);
await Bun.write(
	"temp/colors.png",
	await draw(await convertDiffs(mock.semantic, true))
		.then((x) => x.toBuffer("image/png"))
		.then((x) => new Uint8Array(x)),
	{ createPath: true },
);
