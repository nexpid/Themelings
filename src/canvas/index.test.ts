import { file } from "bun";
import { drawSections } from ".";
import { makeSections } from "./factory";

await Bun.write(
	"temp/files.png",
	// new Uint8Array(drawSections(await makeSections(mock.icons, true)).toBuffer("image/png")),
	new Uint8Array(
		drawSections(await makeSections(new Map(await file("temp/diff_icons.json").json()), true)).toBuffer("image/png"),
	),
);
await Bun.write(
	"temp/colors.png",
	// new Uint8Array(drawSections(await makeSections(mock.semantic)).toBuffer("image/png")),
	new Uint8Array(
		drawSections(await makeSections(new Map(await file("temp/diff_semantic.json").json()))).toBuffer("image/png"),
	),
);
