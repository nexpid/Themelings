import { prevFiles } from "..";
import { handleShellErr, type Progress } from "../util";
import { join } from "path";
import Color from "color";
import { DiffEnum, type Diff, type Icons } from "../../types";

type RawColors = Record<string, string>;
const diffRaw = async (progress: Progress) => {
  progress.start("diff_raw");
  if (!prevFiles.has("raw.json")) {
    progress.update("diff_raw", false);
    throw new Error("Missing prevFile: raw.json");
  }

  const oldRaw = JSON.parse(
    new TextDecoder().decode(prevFiles.get("raw.json"))
  ) as RawColors;
  const newRaw = (await Bun.file(
    join("../data", "raw.json")
  ).json()) as RawColors;

  const changes = new Map<string, Diff>();
  for (const raw of Object.keys(newRaw))
    if (!oldRaw[raw])
      changes.set(raw, { change: DiffEnum.Added, cur: newRaw[raw] });
    else if (oldRaw[raw] !== newRaw[raw])
      changes.set(raw, {
        change: DiffEnum.Changed,
        old: oldRaw[raw],
        cur: newRaw[raw],
      });
  for (const raw of Object.keys(oldRaw))
    if (!newRaw[raw])
      changes.set(raw, { change: DiffEnum.Removed, old: oldRaw[raw] });

  progress.update("diff_raw", true);
  return changes;
};

type SemanticColors = Record<
  string,
  Record<string, { raw: string; opacity: number }>
>;
const diffSemantic = async (progress: Progress) => {
  progress.start("diff_semantic");
  if (!prevFiles.has("semantic.json")) {
    progress.update("diff_semantic", false);
    throw new Error("Missing prevFile: semantic.json");
  }

  const oldSemantic = JSON.parse(
    new TextDecoder().decode(prevFiles.get("semantic.json"))
  ) as SemanticColors;
  const newSemantic = (await Bun.file(
    join("../data", "semantic.json")
  ).json()) as SemanticColors;

  const raw = (await Bun.file(join("../data", "raw.json")).json()) as RawColors;

  const colorify = (clr: SemanticColors[string][string]) =>
    raw[clr.raw]
      ? `${new Color(raw[clr.raw]).alpha(clr.opacity).hex()} (${clr.raw})`
      : `unknown (${clr.raw})`;
  const allVars = (key: string, sem: SemanticColors[string], added: boolean) =>
    Object.entries(sem).forEach(([k, v]) =>
      changes.set(
        `${key}.${k}`,
        added
          ? { change: DiffEnum.Added, cur: colorify(v) }
          : { change: DiffEnum.Removed, old: colorify(v) }
      )
    );

  const changes = new Map<string, Diff>();
  for (const sem of Object.keys(newSemantic))
    if (!oldSemantic[sem]) allVars(sem, newSemantic[sem], true);
    else
      for (const clir of Object.keys(newSemantic[sem]))
        if (!oldSemantic[sem][clir])
          changes.set(`${sem}.${clir}`, {
            change: DiffEnum.Added,
            cur: colorify(newSemantic[sem][clir]),
          });
        else if (
          !Bun.deepEquals(oldSemantic[sem][clir], newSemantic[sem][clir])
        )
          changes.set(`${sem}.${clir}`, {
            change: DiffEnum.Changed,
            old: colorify(oldSemantic[sem][clir]),
            cur: colorify(oldSemantic[sem][clir]),
          });

  for (const sem of Object.keys(oldSemantic))
    if (!newSemantic[sem]) allVars(sem, oldSemantic[sem], false);
    else
      for (const clir of Object.keys(oldSemantic[sem]))
        if (!newSemantic[sem][clir])
          changes.set(`${sem}.${clir}`, {
            change: DiffEnum.Removed,
            old: colorify(oldSemantic[sem][clir]),
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
    new TextDecoder().decode(prevFiles.get("icons.json"))
  ) as Icons;
  const newIcons = (await Bun.file(
    join("../data", "icons.json")
  ).json()) as Icons;

  const iconDir = {
    old: join("../data", "oldicons"),
    new: join("../data", "icons"),
  };

  const changes = new Map<string, Diff>();
  for (const icon of Object.keys(newIcons))
    if (!oldIcons[icon])
      changes.set(icon, {
        change: DiffEnum.Added,
        cur: newIcons[icon].hash,
        curFile: join(iconDir.new, newIcons[icon].file),
      });
    else if (newIcons[icon].hash !== oldIcons[icon].hash)
      changes.set(icon, {
        change: DiffEnum.Changed,
        old: oldIcons[icon].hash,
        oldFile: join(iconDir.old, oldIcons[icon].file),
        cur: newIcons[icon].hash,
        curFile: join(iconDir.new, newIcons[icon].file),
      });
  for (const icon of Object.keys(oldIcons))
    if (!newIcons[icon])
      changes.set(icon, {
        change: DiffEnum.Removed,
        old: oldIcons[icon].hash,
        oldFile: join(iconDir.old, oldIcons[icon].file),
      });

  progress.update("diff_icons", true);
  return changes;
};
const diffCode = async (progress: Progress) => {
  progress.start("diff_code");

  progress.update("diff_code", true);
};

export default async function diffs(progress: Progress) {
  const txt = (
    await Bun.$`git status -z -- ':!oldicons' ':!icons'`
      .cwd("../data")
      .quiet()
      .then(handleShellErr)
  )
    .text()
    .split("\x00")
    .filter((x) => x !== "")
    .map((x) => x.slice(3));

  if (!txt.includes("version.txt")) {
    progress.update("diff", null);
    for (const x of ["raw", "semantic", "icons", "code"])
      progress.update(`diff_${x}`, null);
    return null;
  }

  const differs = {} as Record<
    "raw" | "semantic" | "icons" | "code",
    Map<string, Diff> | undefined
  >;
  await Promise.allSettled([
    txt.includes("raw.json")
      ? diffRaw(progress).then((x) => (differs.raw = x))
      : progress.update("diff_raw", null),
    txt.includes("semantic.json")
      ? diffSemantic(progress).then((x) => (differs.semantic = x))
      : progress.update("diff_semantic", null),
    txt.includes("icons.json")
      ? diffIcons(progress).then((x) => (differs.icons = x))
      : progress.update("diff_icons", null),
    txt.includes("code.gzipped.js")
      ? diffCode(progress)
      : progress.update("diff_code", null),
  ]);

  progress.update("diff", true);
  return differs;
}
