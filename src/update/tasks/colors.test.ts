import { sortObj } from "../util";
import { convertSimpleSemantic, getInternalRawColors, getInternalSemanticColors } from "./colors";

const codeFile = Bun.file("tmp/code.js");
if (!(await codeFile.exists())) throw "Missing decompiled code.js";

const code = (await codeFile.text()).replace(/\r/g, "").split("\n");

const raw = getInternalRawColors(code);
await Bun.write("temp/raw.json", JSON.stringify(sortObj(raw), undefined, 2), { createPath: true });

const semantic = getInternalSemanticColors(code, raw);
await Bun.write("temp/semantic.json", JSON.stringify(sortObj(semantic), undefined, 2), { createPath: true });
await Bun.write("temp/semantic_simple.json", JSON.stringify(sortObj(convertSimpleSemantic(semantic)), null, 2));
