import { runInNewContext } from "node:vm";
import Color, { type ColorInstance } from "color";
import type { RawColors, SemanticColors } from "../../types";
import { commit } from "../git";
import { cuteVersion } from "../shared";
import { sortObj } from "../utils";

function hex(color: ColorInstance) {
	return (color.alpha() === 1 ? color.hex() : color.hexa()).toLowerCase();
}

// FIXME fixes an issue introduced in hermes-dec commit 1c112f85e3fb49442c57a0ed31b83bb3825db639,
// where code such as "rX[rY] = z" is instead parsed as "rX[Y] = z"
function fixHermesDecIndex(code: string) {
	return code.replace(/r(\d+)\[(\d+)\] =/g, "r$1[r$2] =");
}

// more scary code matching below, be warned

export function evalMetroModule<T>(code: string[], importName: string, imports: object = {}): T {
	const hookLine = code.findIndex((x) => x.includes(importName));
	if (hookLine === -1) throw new Error(`Cannot find hookLine for ${importName}!`);

	// usually fileFinishedImporting is called 5 lines before the function ends, so we pray
	const endLine = hookLine + 5;

	let startLine: number | null = null;
	for (let i = hookLine; i > 0; i--)
		if (code[i].includes("// Environment:")) {
			startLine = i;
			break;
		}

	if (startLine === null) throw new Error(`Failed to find startLine for ${importName}!`);

	const snippet = fixHermesDecIndex(code.slice(startLine, endLine).join("\n"));
	const fn = runInNewContext(snippet, {
		global: {
			Object: Object.assign(Object, {
				freeze(obj: any) {
					return obj;
				},
			}),
		},
	});

	const exports: any = {};
	fn(
		null, // global
		() => ({
			fileFinishedImporting() {},
			...imports,
		}), // require
		null, // metroImportDefault
		null, // metroImportAll
		null, // moduleObject
		exports, // exports
		[], // dependencyMap
	);

	return exports;
}

export function getInternalRawColors(code: string[]) {
	const module = evalMetroModule<{
		_private: {
			RawColors: RawColors;
		};
	}>(code, "/tokens/colors/generated/raw-color-definitions.tsx'", {});

	const raw: RawColors = {};
	for (const [key, color] of Object.entries(module._private.RawColors)) {
		raw[key] = hex(Color(color));
	}

	return raw;
}

export function getInternalSemanticColors(code: string[], raw: Record<string, string>) {
	const module = evalMetroModule<{
		_private: {
			SemanticColors: Record<string, Record<string, { raw: string; opacity: number }>>;
		};
	}>(code, "/tokens/colors/generated/native/generated-definitions.tsx'", {
		_private: {
			Themes: new Proxy(
				{},
				{
					get(_, key) {
						return key.toString().toLowerCase();
					},
				},
			),
		},
	});

	const semantic: SemanticColors = {};
	for (const [key, colors] of Object.entries(module._private.SemanticColors)) {
		const color: SemanticColors[string] = {};
		for (const [theme, val] of Object.entries(colors)) {
			if (typeof val !== "object" || !("raw" in val)) continue;

			color[theme] = [hex(Color(raw[val.raw]).alpha(val.opacity)), { raw: val.raw, opacity: val.opacity }];
		}

		semantic[key] = color;
	}

	return semantic;
}

export function convertSimpleSemantic(semantic: SemanticColors) {
	const simpleSemantic: Record<string, Record<string, string>> = {};
	for (const [key, colors] of Object.entries(semantic)) {
		const color: Record<string, string> = {};
		for (const [theme, [clr]] of Object.entries(colors)) color[theme] = clr;

		simpleSemantic[key] = color;
	}

	return simpleSemantic;
}

export default async function colors(code: string[]) {
	const raw = getInternalRawColors(code);
	await Bun.write("../data/raw.json", JSON.stringify(sortObj(raw), null, 4));

	const semantic = getInternalSemanticColors(code, raw);
	await Bun.write("../data/semantic.json", JSON.stringify(sortObj(semantic), null, 4));
	await Bun.write("../data/semantic_simple.json", JSON.stringify(sortObj(convertSimpleSemantic(semantic)), null, 4));

	await commit(["raw.json", "semantic.json", "semantic_simple.json"], `chore: update colors for ${cuteVersion}`);
}
