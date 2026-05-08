import { sortObj } from "../utils";
import { parseAssets } from "./icons";

const codeFile = Bun.file("tmp/code.js");
if (!(await codeFile.exists())) throw "Missing decompiled code.js";

const code = (await codeFile.text()).replace(/\r/g, "").split("\n");

const { icons } = await parseAssets(code);
await Bun.write("temp/icons.json", JSON.stringify(sortObj(icons), undefined, 4));
