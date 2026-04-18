import {
	type CodeDiff,
	type Diff,
	type Differs,
	DiffType,
	type Icons,
	type RawColors,
	type Semantic,
	type SemanticColors,
} from "../../types";
import { fetchGitChanged, gitChanged } from "../git";
import { type Progress, wrapPromise } from "../progress";
import { diffAnyway, prevFiles } from "../shared";
import { join, parseJsonl } from "../utils";

async function diffRaw() {
	if (!prevFiles.has("raw.json")) {
		throw new Error("Missing prevFile: raw.json");
	}

	const oldRaw = JSON.parse(new TextDecoder().decode(prevFiles.get("raw.json"))) as RawColors;
	const newRaw: RawColors = await Bun.file(join("../data", "raw.json")).json();

	const renamed = new Set<string>();
	const changes = new Map<string, Diff>();
	for (const [name, source] of Object.entries(newRaw))
		if (!oldRaw[name]) {
			const oldName = Object.entries(oldRaw).find(([key, val]) => !newRaw[key] && val === source)?.[0];

			if (!oldName)
				changes.set(name, {
					type: DiffType.Added,
					source,
				});
			else {
				renamed.add(oldName);
				changes.set(name, {
					type: DiffType.Renamed,
					oldName,
					source,
				});
			}
		} else if (oldRaw[name].toLowerCase() !== source.toLowerCase())
			changes.set(name, {
				type: DiffType.Changed,
				source,
				oldSource: oldRaw[name],
			});
	for (const [name, source] of Object.entries(oldRaw))
		if (!(newRaw[name] || renamed.has(name)))
			changes.set(name, {
				type: DiffType.Removed,
				source,
			});

	return changes;
}

function getSemanticLabel(semantic: Semantic) {
	const light = semantic.light,
		dark = semantic.darker ?? semantic.dark;
	if (dark && light) return `☀️ ${light[0]}, 🌙 ${dark[0]}`;
	return Object.entries(semantic)
		.map(([name, [color]]) => `${name} ${color}`)
		.join(", ");
}

async function diffSemantic() {
	if (!prevFiles.has("semantic.json")) {
		throw new Error("Missing prevFile: semantic.json");
	}

	const oldSemantic = JSON.parse(new TextDecoder().decode(prevFiles.get("semantic.json"))) as SemanticColors;
	const newSemantic: SemanticColors = await Bun.file(join("../data", "semantic.json")).json();

	const renamed = new Set<string>();
	const changes = new Map<string, Diff>();
	for (const [name, semantic] of Object.entries(newSemantic)) {
		const source = Object.values(semantic)
			.map(([color]) => color)
			.join(",");
		if (!oldSemantic[name]) {
			const themes = Object.keys(semantic).length;
			const oldName = Object.entries(oldSemantic).find(
				([key, val]) =>
					!newSemantic[key] &&
					Object.keys(val).length === themes &&
					Object.entries(val).every(([skey, sval]) => sval[0] === semantic[skey][0]),
			)?.[0];

			if (!oldName)
				changes.set(name, {
					type: DiffType.Added,
					source,
					label: getSemanticLabel(semantic),
				});
			else {
				renamed.add(oldName);
				changes.set(name, {
					type: DiffType.Renamed,
					oldName,
					source,
				});
			}
		} else
			for (const [theme, [color]] of Object.entries(semantic))
				if (!oldSemantic[name][theme])
					changes.set(`${name}.${theme}`, {
						type: DiffType.Added,
						source: color,
					});
				else if (oldSemantic[name][theme][0].toLowerCase() !== color.toLowerCase())
					changes.set(`${name}.${theme}`, {
						type: DiffType.Changed,
						source: color,
						oldSource: oldSemantic[name][theme][0],
					});
	}
	for (const [name, semantic] of Object.entries(oldSemantic)) {
		if (renamed.has(name)) continue;

		const source = Object.values(semantic)
			.map(([color]) => color)
			.join(",");
		if (!newSemantic[name])
			changes.set(name, {
				type: DiffType.Removed,
				source,
				label: getSemanticLabel(semantic),
			});
		else
			for (const [theme, [source]] of Object.entries(semantic))
				if (!newSemantic[name][theme])
					changes.set(`${name}.${theme}`, {
						type: DiffType.Removed,
						source,
					});
	}

	return changes;
}

async function diffIcons() {
	if (!prevFiles.has("icons.json")) {
		throw new Error("Missing prevFile: icons.json");
	}

	const oldIcons = JSON.parse(new TextDecoder().decode(prevFiles.get("icons.json"))) as Icons;
	const newIcons: Icons = await Bun.file(join("../data", "icons.json")).json();

	const iconDir = {
		old: join("../data", "oldicons"),
		new: join("../data", "icons"),
	};

	const renamed = new Set<string>();
	const changes = new Map<string, Diff>();
	for (const [name, icon] of Object.entries(newIcons)) {
		const label = icon.hash.slice(0, 8);
		if (!oldIcons[name]) {
			const oldName = Object.entries(oldIcons).find(([key, val]) => !newIcons[key] && val.hash === icon.hash)?.[0];

			if (!oldName)
				changes.set(name, {
					type: DiffType.Added,
					source: join(iconDir.new, icon.file),
					label,
				});
			else {
				renamed.add(oldName);
				changes.set(name, {
					type: DiffType.Renamed,
					oldName,
					source: join(iconDir.new, icon.file),
				});
			}
		} else if (oldIcons[name].hash !== icon.hash)
			changes.set(name, {
				type: DiffType.Changed,
				source: join(iconDir.new, icon.file),
				label,
				oldSource: join(iconDir.old, oldIcons[name].file),
				oldLabel: oldIcons[name].hash.slice(0, 8),
			});
	}
	for (const [name, icon] of Object.entries(oldIcons))
		if (!(newIcons[name] || renamed.has(name)))
			changes.set(name, {
				type: DiffType.Removed,
				source: join(iconDir.old, icon.file),
				label: icon.hash.slice(0, 8),
			});

	return changes;
}

function parseSource(text: string) {
	const source = parseJsonl(text) as { file: string; size: number }[];
	return Object.fromEntries(
		source.map(({ file, size }) => [file, { size, compSize: size - JSON.stringify(file).length }]),
	) as Record<string, { size: number; compSize: number }>;
}

async function diffCode() {
	if (!prevFiles.has("source.jsonl")) {
		throw new Error("Missing prevFile: source.jsonl");
	}

	const oldCode = parseSource(new TextDecoder().decode(prevFiles.get("source.jsonl")));
	const newCode = parseSource(await Bun.file(join("../data", "source.jsonl")).text());

	const renamed = new Set<string>();
	const changes = new Map<string, CodeDiff>();
	for (const [name, { size, compSize }] of Object.entries(newCode)) {
		if (!oldCode[name]) {
			const oldName = Object.entries(oldCode).find(([key, val]) => !newCode[key] && val.compSize === compSize)?.[0];

			if (!oldName)
				changes.set(name, {
					type: DiffType.Added,
					size,
				});
			else {
				renamed.add(oldName);
				changes.set(name, {
					type: DiffType.Renamed,
					oldName,
					size,
				});
			}
		}
	}
	for (const [name, { size }] of Object.entries(oldCode))
		if (!(newCode[name] || renamed.has(name)))
			changes.set(name, {
				type: DiffType.Removed,
				size,
			});

	return changes;
}

export default async function diffs(progress: Progress) {
	await fetchGitChanged();

	if (!(gitChanged.has("version.txt") || diffAnyway)) {
		progress.update("diff", null);
		progress.update("diff_raw", null);
		progress.update("diff_semantic", null);
		progress.update("diff_icons", null);
		progress.update("diff_code", null);
		return;
	}

	const differs = {} as Differs;

	await Promise.all([
		gitChanged.has("raw.json")
			? wrapPromise(
					diffRaw().then((x) => (differs.raw = x)),
					progress,
					"diff_raw",
				)
			: progress.update("diff_raw", null),
		gitChanged.has("semantic.json")
			? wrapPromise(
					diffSemantic().then((x) => (differs.semantic = x)),
					progress,
					"diff_semantic",
				)
			: progress.update("diff_semantic", null),
		gitChanged.has("icons.json")
			? wrapPromise(
					diffIcons().then((x) => (differs.icons = x)),
					progress,
					"diff_icons",
				)
			: progress.update("diff_icons", null),
		gitChanged.has("source.jsonl")
			? wrapPromise(
					diffCode().then((x) => (differs.code = x)),
					progress,
					"diff_code",
				)
			: progress.update("diff_code", null),
	]);

	progress.update("diff", true);
	return differs;
}
