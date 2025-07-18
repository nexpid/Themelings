import mock from "../mock";
import draw, { convertDiffs } from ".";

await Bun.write(
	"temp/files.png",
	await draw(convertDiffs(mock.icons))
		.then((x) => x.toBuffer("png"))
		.then((x) => new Uint8Array(x)),
);
await Bun.write(
	"temp/colors.png",
	await draw(convertDiffs(mock.semantic, true))
		.then((x) => x.toBuffer("png"))
		.then((x) => new Uint8Array(x)),
);
