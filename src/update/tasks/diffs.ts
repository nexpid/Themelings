import {
	type CodeDiff,
	type Diff,
	DiffEnum,
	type Icons,
	type OutDiffs,
	type SemanticColors,
} from "../../types";
import { getGitChanged, gitChanged } from "../commit";
import { diffAnyway, prevFiles } from "../shared";
import { type Progress, formatBytes, join, log } from "../util";

type RawColors = Record<string, string>;
const diffRaw = async (progress: Progress) => {
	progress.start("diff_raw");
	if (!prevFiles.has("raw.json")) {
		progress.update("diff_raw", false);
		throw new Error("Missing prevFile: raw.json");
	}

	const oldRaw = JSON.parse(
		new TextDecoder().decode(prevFiles.get("raw.json")),
	) as RawColors;
	const newRaw = (await Bun.file(
		join("../data", "raw.json"),
	).json()) as RawColors;

	const renamed = new Set<string>();

	const changes = new Map<string, Diff>();
	for (const raw of Object.keys(newRaw))
		if (!oldRaw[raw]) {
			const renamedRaw = Object.entries(oldRaw).find(
				([rRaw, rVal]) => !newRaw[rRaw] && rVal === newRaw[raw],
			)?.[0];

			if (renamedRaw)
				renamed.add(renamedRaw),
					changes.set(raw, {
						change: DiffEnum.Renamed,
						old: renamedRaw,
						cur: raw,
					});
			else changes.set(raw, { change: DiffEnum.Added, cur: newRaw[raw] });
		} else if (oldRaw[raw].toLowerCase() !== newRaw[raw].toLowerCase())
			changes.set(raw, {
				change: DiffEnum.Changed,
				old: oldRaw[raw],
				cur: newRaw[raw],
			});
	for (const raw of Object.keys(oldRaw))
		if (!newRaw[raw] && !renamed.has(raw))
			changes.set(raw, { change: DiffEnum.Removed, old: oldRaw[raw] });

	progress.update("diff_raw", true);
	return changes;
};

type PreviousSemanticColors = Record<string, Record<string, string>>;

const diffSemantic = async (progress: Progress) => {
	progress.start("diff_semantic");
	if (!prevFiles.has("semantic.json")) {
		progress.update("diff_semantic", false);
		throw new Error("Missing prevFile: semantic.json");
	}

	let oldSemantic = JSON.parse(
		new TextDecoder().decode(prevFiles.get("semantic.json")),
	) as SemanticColors;

	// transform PreviousSemanticColors to SemanticColors
	if (typeof Object.values(Object.values(oldSemantic)[0])[0] === "string")
		oldSemantic = Object.fromEntries(
			Object.entries(oldSemantic as any as PreviousSemanticColors).map(
				([clr, themes]) => [
					clr,
					Object.fromEntries(
						Object.entries(themes).map(([theme, color]) => [
							theme,
							[color, { raw: "this is a placeholder", opacity: 0 }],
						]),
					),
				],
			),
		) as any;

	const newSemantic = (await Bun.file(
		join("../data", "semantic.json"),
	).json()) as SemanticColors;

	const renamed = new Set<string>();

	const transform = ([clr, _]: [string, { raw: string; opacity: number }]) =>
		clr;
	// 	val.raw === "this is a placeholder" ? clr : `${clr} (${val.raw})`;

	const allVars = (
		key: string,
		sem: SemanticColors[string],
		added: boolean,
	) => {
		for (const [k, v] of Object.entries(sem)) {
			changes.set(
				`${key}.${k}`,
				added
					? { change: DiffEnum.Added, cur: transform(v) }
					: { change: DiffEnum.Removed, old: transform(v) },
			);
		}
	};

	const changes = new Map<string, Diff>();
	for (const sem of Object.keys(newSemantic))
		if (!oldSemantic[sem]) {
			const semI = newSemantic[sem];
			const semL = Object.keys(semI).length;
			const renamedSem = Object.entries(oldSemantic).find(
				([sSem, sVal]) =>
					!newSemantic[sSem] &&
					Object.keys(sVal).length === semL &&
					Object.entries(sVal).every(
						([skTheme, skVal]) => skVal[0] === semI[skTheme][0],
					),
			)?.[0];

			if (renamedSem)
				renamed.add(renamedSem),
					changes.set(sem, {
						change: DiffEnum.Renamed,
						old: renamedSem,
						cur: transform(Object.values(semI)[0]),
					});
			else allVars(sem, newSemantic[sem], true);
		} else
			for (const clir of Object.keys(newSemantic[sem]))
				if (!oldSemantic[sem][clir])
					changes.set(`${sem}.${clir}`, {
						change: DiffEnum.Added,
						cur: transform(newSemantic[sem][clir]),
					});
				else if (
					oldSemantic[sem][clir][0].toLowerCase() !==
					newSemantic[sem][clir][0].toLowerCase()
				)
					changes.set(`${sem}.${clir}`, {
						change: DiffEnum.Changed,
						old: transform(oldSemantic[sem][clir]),
						cur: transform(newSemantic[sem][clir]),
					});

	for (const sem of Object.keys(oldSemantic))
		if (!newSemantic[sem] && !renamed.has(sem))
			allVars(sem, oldSemantic[sem], false);
		else
			for (const clir of Object.keys(oldSemantic[sem]))
				if (!newSemantic[sem][clir])
					changes.set(`${sem}.${clir}`, {
						change: DiffEnum.Removed,
						old: transform(oldSemantic[sem][clir]),
					});

	progress.update("diff_semantic", true);
	return changes;
};

const diffIcons = async (progress: Progress) => {
	progress.start("diff_icons");
	if (!prevFiles.has("icons.json")) {
		progress.update("diff_icons", false);
		throw new Error("Missing prevFile: icons.json");
	}

	const oldIcons = JSON.parse(
		new TextDecoder().decode(prevFiles.get("icons.json")),
	) as Icons;
	const newIcons = (await Bun.file(
		join("../data", "icons.json"),
	).json()) as Icons;

	const iconDir = {
		old: join("../data", "oldicons"),
		new: join("../data", "icons"),
	};

	const matchDir = (iconDir: string, file: string) =>
		file.endsWith(".svg")
			? join("src", "svgplaceholder.png")
			: file.endsWith(".lottie")
				? join("src", "lottieplaceholder.png")
				: join(iconDir, file);

	const renamed = new Set<string>();

	const changes = new Map<string, Diff>();
	for (const icon of Object.keys(newIcons))
		if (!oldIcons[icon]) {
			const renamedIcon = Object.entries(oldIcons).find(
				([iKey, iVal]) => !newIcons[iKey] && iVal.hash === newIcons[icon].hash,
			)?.[0];

			if (renamedIcon)
				renamed.add(renamedIcon),
					changes.set(icon, {
						change: DiffEnum.Renamed,
						old: renamedIcon,
						cur: newIcons[icon].hash,
						curFile: matchDir(iconDir.new, newIcons[icon].file),
					});
			else
				changes.set(icon, {
					change: DiffEnum.Added,
					cur: newIcons[icon].hash,
					curFile: matchDir(iconDir.new, newIcons[icon].file),
				});
		} else if (newIcons[icon].hash !== oldIcons[icon].hash)
			changes.set(icon, {
				change: DiffEnum.Changed,
				old: oldIcons[icon].hash,
				oldFile: matchDir(iconDir.old, oldIcons[icon].file),
				cur: newIcons[icon].hash,
				curFile: matchDir(iconDir.new, newIcons[icon].file),
			});
	for (const icon of Object.keys(oldIcons))
		if (!newIcons[icon] && !renamed.has(icon))
			changes.set(icon, {
				change: DiffEnum.Removed,
				old: oldIcons[icon].hash,
				oldFile: matchDir(iconDir.old, oldIcons[icon].file),
			});

	progress.update("diff_icons", true);
	return changes;
};
const diffCode = async (progress: Progress) => {
	progress.start("diff_code");
	if (!prevFiles.has("source.jsonl")) {
		progress.update("diff_code", false);
		throw new Error("Missing prevFile: source.jsonl");
	}

	const jsonlToJson = (jsonl: string) =>
		new Map(
			(
				JSON.parse(`[${jsonl.split("\n").join(",\n")}]`) as {
					file: string;
					size: number;
				}[]
			).map((x) => [
				x.file,
				{
					s: x.size,
					de: x.size - JSON.stringify(x.file).length,
				},
			]),
		);

	const oldCode = jsonlToJson(
		new TextDecoder().decode(prevFiles.get("source.jsonl")),
	);
	const newCode = jsonlToJson(
		await Bun.file(join("../data", "source.jsonl")).text(),
	);

	const renamed = new Set<string>();
	const changes = new Map<string, CodeDiff>();
	for (const code of newCode.keys())
		if (!oldCode.has(code)) {
			const renamedCode = oldCode
				.keys()
				.find(
					(vCode) =>
						!newCode.has(vCode) &&
						oldCode.get(vCode)!.de === newCode.get(code)!.de,
				);

			if (renamedCode)
				renamed.add(renamedCode),
					changes.set(code, {
						change: DiffEnum.Renamed,
						oldFile: renamedCode,
						size: formatBytes(newCode.get(code)!.s, 1),
					});
			else
				changes.set(code, {
					change: DiffEnum.Added,
					size: formatBytes(newCode.get(code)!.s, 1),
				});
		} else if (newCode.get(code)!.s !== oldCode.get(code)!.s)
			changes.set(code, {
				change: DiffEnum.Changed,
				sizeDiff: (() => {
					const numDiff = newCode.get(code)!.de - oldCode.get(code)!.de;
					const diff = formatBytes(Math.abs(numDiff), 1);
					return numDiff < 0 ? `-${diff}` : `+${diff}`;
				})(),
			});
	for (const code of oldCode.keys())
		if (!newCode.has(code) && !renamed.has(code))
			changes.set(code, {
				change: DiffEnum.Removed,
				size: formatBytes(oldCode.get(code)!.s, 1),
			});

	progress.update("diff_code", true);
	return changes;
};

export default async function diffs(progress: Progress) {
	await getGitChanged();
	log("hello i am changed", gitChanged);

	if (!gitChanged.has("version.txt") && !diffAnyway) {
		progress.update("diff", null);
		for (const x of ["raw", "semantic", "icons", "code"])
			progress.update(`diff_${x}`, null);
		return null;
	}

	const differs = {} as OutDiffs;

	await Promise.allSettled([
		gitChanged.has("raw.json")
			? diffRaw(progress).then((x) => (differs.raw = x))
			: progress.update("diff_raw", null),
		gitChanged.has("semantic.json")
			? diffSemantic(progress).then((x) => (differs.semantic = x))
			: progress.update("diff_semantic", null),
		gitChanged.has("icons.json")
			? diffIcons(progress).then((x) => (differs.icons = x))
			: progress.update("diff_icons", null),
		gitChanged.has("source.jsonl")
			? diffCode(progress).then((x) => (differs.code = x))
			: progress.update("diff_code", null),
	]);

	progress.update("diff", true);
	return differs;
}
