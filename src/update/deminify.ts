import { extname } from "node:path";

function getMatchTemplate(letter: string) {
	return new RegExp(`(\\W|^)${letter}(\\d{1,2})(\\W|$)`, "g");
}

// plus some random variable names spat out by chat gpt thank you chat gpt
const variableNames = [
	"entity",
	"michal",
	"zuuluu",
	"tangon",
	"report",
	"oscard",
	"golfie",
	"option",
	"verify",
	"offset",
	"yankee",
	"romeon",
	"foxtra",
	"backup",
	"kiloes",
	"sizing",
	"output",
	"result",
	"echoed",
	"update",
	"source",
	"ctrled",
	"vacuum",
	"sequen",
	"config",
	"record",
	"cntext",
	"papara",
	"target",
	"status",
	"sierra",
	"limora",
	"whisks",
	"equals",
	"quebec",
];
const variableMatch = getMatchTemplate("r");

const argumentNames = [
	"argFoo",
	"argBar",
	"argBaz",
	"argCor",
	"argGra",
	"argFre",
	"argPlu",
];
const argumentMatch = getMatchTemplate("a");

const funMatch = /(\W|^)(_fun\d+(?:_ip)?)(\W|$)/gm;

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

	// weird _fun52690 & _fun52690_ip vars which are seemingly randomized
	const funCache = new Map<string, number>();
	const getFun = (fun: string) => {
		const suffix = fun.split("_")[2] ? `_${fun.split("_")[2]}` : "";

		if (!funCache.has(fun)) funCache.set(fun, funCache.size + 1);
		return `_fun${funCache.get(fun)!.toString().padStart(5, "0")}${suffix}`;
	};

	let unusedRep = 0;
	let final = code
		.replace(
			argumentMatch,
			(_, before, num, after) =>
				`${before}${argumentUsage.has(num) && argumentUsage.get(num)! > 1 ? (argumentNames[Number(num)] ?? `argument${Number(num) + 1}`) : "_".repeat(++unusedRep)}${after}`,
		)
		.replace(variableMatch, variableReplacer)
		.replace(variableMatch, variableReplacer) // do 2 rounds because uhhhhhhhhh im really good at coding
		.replace(
			funMatch,
			(_, before, fun, after) => `${before}${getFun(fun)}${after}`,
		);

	final = final
		.split(" = ")
		.slice(1)
		.join(" = ")
		.slice(0, -1)
		.replace(/ \/\/ Environment: \w+$/gm, "")
		.replace(/( \/\/ Orig.+?), environment: \w+$/gm, "$1");

    return {
        final,
        res: `// ${path}\n${extname(path).startsWith(".ts") ? "export default" : "module.exports ="} (${final})();`
	};
}
