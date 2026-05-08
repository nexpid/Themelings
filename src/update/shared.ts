import { join } from "node:path";

export const trackerUserAgent = "Themelings <https://github.com/nexpid/Themelings/>";
export const maxDiffChanges = 20;

export const workFolder = "tmp";
export const apksFolder = join(workFolder, "apks");
export const codePath = join(workFolder, "code.js");
export const apkSplits = ["base", "config.hdpi", "config.xxhdpi"] as const;

export const oprevFiles = ["semantic.json", "raw.json", "icons.json", "source.jsonl"] as const;
export const prevFiles = new Map<(typeof oprevFiles)[number], ArrayBuffer>();

export const version = await Bun.file("../data/version.txt").text();
export const cuteVersion = `${["stable", "beta", "alpha"][Number(version[3])] ?? "version"} ${version.slice(0, 3)}.${Number(version.slice(-2))}`;

export const isMock = process.argv.includes("--mock");
export const diffAnyway = process.argv.includes("--diff-anyway");
export const commitAnyway = process.argv.includes("--commit-anyway");
export const isQuiet = process.argv.includes("--quiet");
