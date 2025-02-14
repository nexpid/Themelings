export const oprevFiles = [
	"semantic.json",
	"raw.json",
	"icons.json",
	"source.jsonl",
] as const;
export const prevFiles = new Map<(typeof oprevFiles)[number], ArrayBuffer>();
export const apksToDownload = ["base", "config.xxhdpi", "config.hdpi"] as const;
export const version = await Bun.file("../data/version.txt").text();

export const cuteVersion = `${["stable", "beta", "alpha"][Number(version[3])] ?? "version"} ${version.slice(0, 3)}.${Number(version.slice(-2))}`;

export const isMock = process.argv.includes("--mock");
export const diffAnyway = process.argv.includes("--diff-anyway");
export const commitAnyway = process.argv.includes("--commit-anyway");
