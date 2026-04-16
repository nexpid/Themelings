import mock from "../mock";
import { drawSections } from ".";
import { makeSections } from "./factory";

await Bun.write(
	"temp/files.png",
	new Uint8Array(drawSections(await makeSections(mock.icons, true)).toBuffer("image/png")),
);
await Bun.write(
	"temp/colors.png",
	new Uint8Array(drawSections(await makeSections(mock.semantic)).toBuffer("image/png")),
);
