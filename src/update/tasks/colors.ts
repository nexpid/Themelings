// this code includes a lot of scary regexes, be warned

import Color from "color";
import type { SemanticColors } from "../../types";
import { sortObj } from "../util";

export function evalModule(
	code: string[],
	hookLine: number,
): (...args: any[]) => any {
	/*
	  1. r3 = '../discord_common/js/packages/tokens/colors/generated/generated-definitions.tsx';
	  2. r3 = r4.bind(r5)(r3);
	  3. r2['_private'] = r1;
	  4. return r0;
	  5. }; <<<< BINGO!!!! (hopefully)
	  */
	const endLine = hookLine + 5;

	let startLine: number | null = null;
	for (let indLine = hookLine; indLine > 0; indLine--)
		if (code[indLine].includes("// Environment:")) {
			startLine = indLine;
			break;
		}

	if (!startLine) throw new Error("Failed to find startLine!");

	return (0, eval)(code.slice(startLine, endLine).join("\n"));
}

export function getInternalRawColors(code: string[]) {
	const moduleLine = code.findIndex((l) =>
		l.includes("colors/generated/Colors.tsx'"),
	);
	if (moduleLine === -1) throw new Error("Cannot find semanticColorsHookLine!");

	const internalModule: {
		default: Record<string, string>;
	} = {} as any;

	evalModule(code, moduleLine)(
		null,
		() => ({
			fileFinishedImporting: () => void 0,
		}),
		null,
		null,
		null,
		internalModule,
		{},
	);

	const raw = internalModule.default;
	for (const key of Object.keys(raw))
		raw[key] = Color(raw[key]).hex().toLowerCase();

	return raw;
}

export function getInternalSemanticColors(
	code: string[],
	raw: Record<string, string>,
): SemanticColors {
	const moduleLine = code.findIndex((l) =>
		l.includes("colors/generated/generated-definitions.tsx'"),
	);
	if (moduleLine === -1) throw new Error("Cannot find semanticColorsHookLine!");

	const internalModule: {
		_private: {
			SemanticColors: Record<
				string,
				Record<string, { raw: string; opacity: number }>
			>;
		};
	} = {} as any;

	evalModule(code, moduleLine)(
		null,
		() => ({
			_private: {
				Themes: new Proxy(
					{},
					{
						get(_, prop) {
							return prop.toString().toLowerCase();
						},
					},
				),
			},
			fileFinishedImporting: () => void 0,
		}),
		null,
		null,
		null,
		internalModule,
		{},
	);

	for (const val of Object.values(internalModule._private.SemanticColors)) {
		delete val.category;
		delete val.gradient;
	}

	const sem = internalModule._private.SemanticColors as any;
	for (const key of Object.keys(sem))
		for (const theme of Object.keys(sem[key])) {
			const clr = raw[sem[key][theme].raw];
			if (clr)
				sem[key][theme] = [
					Color(clr).alpha(sem[key][theme].opacity).hex().toLowerCase(),
					sem[key][theme],
				];
			else delete sem[key][theme];
		}

	return sem;
}

export default async function colors(code: string[]) {
	const raw = getInternalRawColors(code);
	await Bun.write("../data/raw.json", JSON.stringify(sortObj(raw), null, 2));

	const semantic = getInternalSemanticColors(code, raw);
	await Bun.write(
		"../data/semantic.json",
		JSON.stringify(sortObj(semantic), null, 2),
	);

	const simpleSemantic = semantic as any;
	for (const key of Object.keys(simpleSemantic)) {
		simpleSemantic[key] = { ...simpleSemantic[key] };

		for (const theme of Object.keys(simpleSemantic[key]))
			simpleSemantic[key][theme] = semantic[key][theme][0];
	}
	await Bun.write(
		"../data/semantic_simple.json",
		JSON.stringify(sortObj(simpleSemantic), null, 2),
	);
}
