import { extname } from "node:path";

function getMatchTemplate(letter: string) {
	return new RegExp(`(\\W|^)${letter}(\\d{1,2})(\\W|$)`, "g");
}

// plus some random variable names spat out by chat gpt thank you chat gpt
const variableNames = [
	"entity",
	"mike",
	"zulu",
	"tango",
	"report",
	"oscar",
	"golf",
	"options",
	"verify",
	"offset",
	"yankee",
	"romeo",
	"foxtrot",
	"backup",
	"kilo",
	"sizing",
	"output",
	"result",
	"echo",
	"update",
	"source",
	"control",
	"vacuum",
	"sequence",
	"config",
	"record",
	"context",
	"papa",
	"target",
	"status",
	"sierra",
	"lima",
	"whiskey",
	"equality",
	"quebec",
];
const variableMatch = getMatchTemplate("r");

const argumentNames = [
	"argFoo",
	"argBar",
	"argBaz",
	"argCorge",
	"argGrault",
	"argFred",
	"argPlugh",
];
const argumentMatch = getMatchTemplate("a");

export function deminify(code: string, path: string) {
	const argumentUsage = new Map<string, number>();
	for (const [_, __, num] of code.match(argumentMatch) ?? []) {
		if (argumentUsage.has(num))
			argumentUsage.set(num, argumentUsage.get(num)! + 1);
		else argumentUsage.set(num, 1);
	}

	const variableReplacer = (
		_: string,
		before: string,
		num: string,
		after: string,
	) =>
		`${before}${variableNames[Number(num)] ?? `variable${Number(num) + 1}`}${after}`;

	let unusedRep = 0;
	let final = code
		.replace(
			argumentMatch,
			(_, before, num, after) =>
				`${before}${argumentUsage.has(num) && argumentUsage.get(num)! > 1 ? (argumentNames[Number(num)] ?? `argument${Number(num) + 1}`) : "_".repeat(++unusedRep)}${after}`,
		)
		.replace(variableMatch, variableReplacer)
		.replace(variableMatch, variableReplacer); // do 2 rounds because uhhhhhhhhh im really good at coding

	final = final
		.split(" = ")
		.slice(1)
		.join(" = ")
		.slice(0, -1)
		.replace(/ \/\/ Environment: \w+$/gm, "")
		.replace(/( \/\/ Orig.+?), environment: \w+$/gm, "$1");

	return `// ${path}\n${extname(path).startsWith(".ts") ? "export default" : "module.exports ="} (${final})();`;
}
