// this code includes a lot of scary regexes, be warned

import Color from "color";
import { sortObj, type Progress } from "../util";

const iterate = (
  code: string[],
  whatDefines: string,
  index: number
): { line: number; full: string; matched: string } | undefined => {
  const reg = /(\w+) = (.*);$/i;

  const startOff = index - 10;
  const line = code
    .slice(startOff, index)
    .findLastIndex((x) => x.match(reg)?.[1] === whatDefines);
  if (line === -1) return;

  const [full, __, didDefine] = code[line + startOff].match(reg) ?? [];
  if (/^(\w+)$/i.exec(didDefine))
    return iterate(code, didDefine, line + startOff);
  else if (full) return { line: line + startOff, full, matched: didDefine };
};

const colorsRaw = async (progress: Progress, code: string[]) => {
  progress.start("colors_raw");
  const rawColorsHookLine = code.findIndex((l) =>
    l.includes("/config/colors/generated/Colors.tsx")
  );
  if (rawColorsHookLine === -1)
    throw new Error("Cannot find rawColorsHookLine!");

  // get the line that has the definitions obj, "r0 = { ... }"
  let rawColorsLine;
  for (let i = rawColorsHookLine; i >= rawColorsHookLine - 20; i--) {
    const line = code[i];
    if (/{'\w+': '#\w+'/i.exec(line)) {
      rawColorsLine = line;
      break;
    }
  }

  if (!rawColorsLine) throw new Error("Cannot find rawColorsLine!");

  // parse the line into one object
  const rawColorsObj = rawColorsLine
    .split("{")
    .slice(1)
    .join("{")
    .split("}")
    .slice(0, -1)
    .join("}");

  const rawColors = (0, eval)(`({${rawColorsObj}})`);
  await Bun.write(
    "../data/raw.json",
    JSON.stringify(sortObj(rawColors), null, 2)
  );

  // semantic colors
  progress.update("colors_raw", true);
  return rawColors;
};
const colorsSemantic = async (
  progress: Progress,
  code: string[],
  raw: Record<string, string>
) => {
  progress.start("colors_semantic");

  const semanticColorsHookLine = code.findIndex((l) =>
    l.includes("/tokens/colors/generated/generated-definitions.tsx")
  );
  if (semanticColorsHookLine === -1)
    throw new Error("Cannot find semanticColorsHookLine!");

  // get the variable that has the semantic definitions, "r7['SemanticColors'] = r9"
  let semanticDefinitionsLine: { line: number; variable: string } | undefined;
  for (let i = semanticColorsHookLine; i >= semanticColorsHookLine - 20; i--) {
    const line = code[i];
    const [_, defVar] = line.match(/\['SemanticColors'\] = (\w+);$/i) ?? [];
    if (defVar) {
      semanticDefinitionsLine = {
        line: i,
        variable: defVar,
      };
      break;
    }
  }

  if (!semanticDefinitionsLine)
    throw new Error("Cannot find semanticDefinitionsLine!");

  const lookFors = new Array<{
    color: string;
    variable: string;
    line: number;
    inactive: boolean;
  }>();
  let lastLookForLine: number | undefined;

  // look for each definition, there can be two variants:
  /*
  1. r9['YOU_BAR_BG'] = r7;
  2. r0 = r268;
     r9['BUTTON_OUTLINE_BRAND_BORDER_ACTIVE'] = r0;
  */
  for (
    let i = semanticDefinitionsLine.line;
    i >= semanticDefinitionsLine.line - 400;
    i--
  ) {
    const line = code[i];

    // prevent including other stuff using the same variable
    if (line.includes(`${semanticDefinitionsLine.variable} = {}`)) break;

    const [_, defVar, color, colorVar] =
      line.match(/(\w+)\['(\w+)'\] = (\w+);$/i) ?? [];
    if (defVar !== semanticDefinitionsLine.variable) continue;

    let lookFor:
      | {
          variable: string;
          line: number;
        }
      | undefined;

    // this is janky, but it worked for hundreds of versions so far...
    if (colorVar === "r0") {
      const accMatcher = /r0 = (\w+);$/i;

      const startOff = i - 10;
      const colorVarActualI = code
        .slice(startOff, i)
        .findLastIndex((l) => l.match(accMatcher)?.[1]);
      const colorVarActual =
        code[colorVarActualI + startOff]?.match(accMatcher)?.[1];
      if (colorVarActual)
        lookFor = {
          variable: colorVarActual,
          line: colorVarActualI + startOff,
        };
    } else lookFor = { variable: colorVar, line: i };

    if (lookFor && (!lastLookForLine || lookFor.line < lastLookForLine))
      lastLookForLine = lookFor.line;
    if (lookFor)
      lookFors.push({
        ...lookFor,
        color,
        inactive: false,
      });
  }

  // actually getting the definitions now yippee!!
  // sometimes hermes does a little fucksie wupsie and does some weird ass r0 shit again so we have to check for that too

  if (!lastLookForLine)
    throw new Error("Failed to find any color definitions (lookFors)!");

  const semanticColors = {} as Record<string, Record<string, string>>;

  const lookForLineLimit = lastLookForLine - 5300;
  for (let i = lastLookForLine; i >= lookForLineLimit; i--) {
    const line = code[i];

    const [_, setObj, setAs] = line.match(/(\w+) = (\w+|{});$/i) ?? [];

    const lookFor = lookFors.find((l) => l.variable === setObj && !l.inactive);
    if (!lookFor) continue;
    lookFor.inactive = true;

    if (["{}", "r0"].includes(setAs)) {
      // very hacky, will break one day
      let actualVar = setAs === "r0" ? "r0" : setObj;

      // get all the themes
      const rulies = code
        .slice(i, i + 50) // rough estimate
        .map((x, j) => {
          const [_, balls, theme, object] =
            x.match(/(\w+)\[(\w+)\] = (\w+);$/) ?? [];
          if (balls === actualVar) return { theme, object, index: j + i };
        })
        .filter((x) => !!x)
        // TODO don't cap this at 4?
        .slice(0, 4);

      // shitass
      const shitass = {} as Record<string, { raw: string; opacity: number }>;
      for (const rule of rulies) {
        if (!rule) continue;

        // find what theme and def it is
        const theme = iterate(code, rule.theme, rule.index);
        const object = iterate(code, rule.object, rule.index);
        if (!theme || !object) continue;

        shitass[theme.matched.split(".").slice(1).join(".").toLowerCase()] = (0,
        eval)(`(${object.matched})`);
      }

      semanticColors[lookFor.color] = {};
      for (const key of Object.keys(shitass))
        semanticColors[lookFor.color][key] = Color(raw[shitass[key].raw])
          .alpha(shitass[key].opacity)
          .hex();
    }
  }

  await Bun.write(
    "../data/semantic.json",
    JSON.stringify(sortObj(semanticColors), null, 2)
  );
  progress.update("colors_semantic", true);
};

export default async function colors(progress: Progress, code: string[]) {
  await colorsSemantic(progress, code, await colorsRaw(progress, code));
}

// sidenote: im really proud of this code even thought most of it is unreadable spaghetti garbage
