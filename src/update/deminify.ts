import { writeFileSync } from "node:fs";
import { extname } from "node:path";

const variableMatch = /\br(\d{1,2})\b/g;
const argumentMatch = /\ba(\d{1,2})\b/g;

const funMatch = /\b(_fun)(\d+)(_ip)?\b/g;

const functNameMatch = /(function\*?) ?(\(.*?\) {) \/\/ Original name: +\??(.+), environment: \w+$/g;
const functOpenMatch = /function\*? ?\((.*?)\) {/;
const functCloseMatch = /^\s+};/;

const stringMatch = /(["'`])(?:\\.|[^\\])*?\1/g;
// biome-ignore lint/suspicious/noControlCharactersInRegex: this is needed
const nullstringMatch = /(["'`])\x00(\d+)\x00\1/g;

const nativeModuleNames = [
	"global",
	"require",
	"metroImportDefault",
	"metroImportAll",
	"moduleObject",
	"exports",
	"dependencyMap",
];

export function deminify(code: string, path: string) {
	const cleaned = code
		.split(" = ")
		.slice(1)
		.join(" = ")
		.slice(0, -1)
		.replace(/ \/\/ Environment: \w+$/gm, "")
		.split("\n");

	const lines: string[] = [];

	let depth = 0;
	const localArgs = new Map<number, number>();
	const funMap = new Map<string, string>();

	const varReplacer = (_: string, id: string) => `var${Number(id) + 1}`;
	const argReplacer = (_: string, id: string) => {
		const n = Number(id),
			depth = localArgs.get(n);
		if (!depth) console.warn(`WARNING! arg${n} does not have any depth (${path})`);

		if (depth === 1) return nativeModuleNames[n] ?? `native${n + 1}`;
		else return `arg${n + 1}`;
	};
	const funReplacer = (_: string, prefix: string, id: string, suffix: string) => {
		const num = funMap.get(id) ?? String(funMap.size + 1).padStart(4, "0");
		funMap.set(id, num);

		return `${prefix}${num}${suffix ?? ""}`;
	};
	const functNameReplacer = (_: string, prefix: string, stuff: string, name: string) => `${prefix} ${name}${stuff}`;

	let j = 1;
	for (const raw of cleaned) {
		const nullStrings = new Map<string, string>();
		const line = raw.replace(stringMatch, (match, quot: string) => {
			const index = nullStrings.size + 1;
			nullStrings.set(String(index), match);
			return `${quot}\x00${index}\x00${quot}`;
		});

		// check for start of function
		if (functOpenMatch.test(line)) {
			const openedArgs = line.match(functOpenMatch)?.[1]?.split(", ")?.length || 0;

			depth++;
			for (let i = 0; i < openedArgs; i++) {
				localArgs.set(i, depth);
			}
		}

		// check for end of function
		if (functCloseMatch.test(line)) {
			for (const arg of localArgs.keys()) {
				const n = localArgs.get(arg);
				if (n === depth) localArgs.set(arg, n - 1);
			}
			depth--;
		}

		// sanity check
		const y = j++;
		if (depth < 0) {
			writeFileSync("temp/depthcrashed.js", cleaned.join("\n"));
			throw new Error(`parsing failed, depth went below 0 (LINE: ${y}, FILE: ${path})`);
		}

		const parsed = line
			.replace(variableMatch, varReplacer)
			.replace(argumentMatch, argReplacer)
			.replace(funMatch, funReplacer)
			.replace(functNameMatch, functNameReplacer)
			.replace(nullstringMatch, (_, __, id: string) => {
				if (nullStrings.has(id)) return nullStrings.get(id)!;
				else {
					writeFileSync("temp/nullcrashed.js", cleaned.join("\n"));
					throw new Error(`parsing failed, nullstring ${id} doesn't exist (LINE: ${y}, FILE: ${path})`);
				}
			});
		lines.push(parsed);
	}

	const final = lines.join("\n");
	return {
		final,
		res: `// ${path}\n${extname(path).startsWith(".ts") ? "export default" : "module.exports ="} (${final})();`,
	};
}
