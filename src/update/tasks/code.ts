import { mkdir, rm } from 'node:fs/promises';
import { deminify } from '../deminify';
import { commit } from '../git';
import type { Progress } from '../progress';
import { commitAnyway, cuteVersion } from '../shared';
import { discordPath, join, listRequiredDirs, sortEntries } from '../utils';

// scary code matching below, be warned

const moduleStartIndentation = ' '.repeat(4);
const pathCheckRegex = / = '(.*?)';$/;
const lineImportRegex = / = r\d{1,2}\.fileFinishedImporting;$/;

function parseDepMap(depMapLine: string) {
    let deps = depMapLine.trim().split(' = ')[1].replace(';', '');
    try {
        return JSON.parse(deps);
    } catch {
        if (deps !== 'new Array(0)') return [];
        return [];
    }
}

export default async function code(progress: Progress, code: string[]) {
    progress.start('code_getting');
    const files = new Map<string, { final: string; res: string }>();

    const depMaps = new Map<string, number[]>();
    const modulesIds = new Map<number, string>();

    let moduleStart: number | null = null;

    for (let i = 0; i < code.length; i++) {
        const line = code[i];

        // find the start of the file import based on the indentation
        if (
            new RegExp(
                `^${moduleStartIndentation}r\\d{1,2} = function\\(`,
            ).test(line) &&
            line.includes(' { // Environment:')
        ) {
            moduleStart = i;
        }

        // easiest way to check
        const path = code[i + 1]?.match(pathCheckRegex)?.[1];
        if (line.match(lineImportRegex) && path) {
            const start = moduleStart;
            if (!start)
                throw `moduleStart was null for ${start}~${i}; null ~ ${code[i]}`;
            moduleStart = null;

            // find the end of the file import based on the indentation
            const moduleEndThing = `${moduleStartIndentation}};`;
            let moduleEnd: number | null = null;
            for (let j = i; j < code.length; j++) {
                if (code[j] === moduleEndThing) {
                    moduleEnd = i = j;
                    break;
                }
            }

            if (!moduleEnd)
                throw `moduleEnd was null for ${start}~${i}; ${code[start]} ~ ${code[i]}`;

            const realPath = discordPath(path);
            const moduleId = Number(code[moduleEnd + 1].match(/= (\d+);$/)?.[1] ?? -1);

            modulesIds.set(moduleId, realPath);
            depMaps.set(realPath, parseDepMap(code[moduleEnd + 2]));
            files.set(
                realPath,
                deminify(
                    code
                        .slice(start, moduleEnd + 1)
                        .map((line) =>
                            line.replace(
                                new RegExp(`^${moduleStartIndentation}`),
                                '',
                            ),
                        )
                        .join('\n'),
                    realPath,
                ),
            );
        }
    }

    // add comment to each varX = \d+; line so its clear what file is imported.
    for (const [filePath, { final, res }] of files) {
        const depMap = depMaps.get(filePath) ?? [];
        const depMapVars = new Set<string>();
        const varLines = new Map<string, number>();
        const varValues = new Map<string, number>();
        const depMapClosures = new Set<string>();
        const depMapDepth = new Map<string, number>();
        const annotated = new Set<string>();

        const finalLines = final.split('\n');
        for (let i = 0; i < finalLines.length; i++) {
            const line = finalLines[i];
            const indent = line.search(/\S/);

            const lhsMatch = line.match(/^\s*(?:var(\d+)|_closure\d+_slot\d+)\s*=\s*/);
            if (!lhsMatch) continue;

            const lhsVar = lhsMatch[1];
            const rhs = line.slice(lhsMatch[0].length);

            if (rhs === 'dependencyMap;') {
                if (lhsVar) {
                    depMapVars.add(lhsVar);
                    depMapDepth.set(lhsVar, indent);
                }
            } else if (lhsVar && /^\d+;$/.test(rhs)) {
                varLines.set(lhsVar, i);
                varValues.set(lhsVar, Number(rhs.slice(0, -1)));
            } else if (lhsVar) {
                const copyMatch = rhs.match(/^(?:var(\d+)|(_closure\d+_slot\d+));$/);
                if (copyMatch) {
                    const src = copyMatch[1] ?? copyMatch[2];
                    if (depMapVars.has(src) || depMapClosures.has(src)) {
                        depMapVars.add(lhsVar);
                        depMapDepth.set(lhsVar, indent);
                    }
                } else {
                    const depth = depMapDepth.get(lhsVar);
                    if (depth !== undefined && indent <= depth) {
                        depMapVars.delete(lhsVar);
                        depMapDepth.delete(lhsVar);
                    }
                    varValues.delete(lhsVar);
                    varLines.delete(lhsVar);
                }
            }

            if (!lhsVar) {
                const slotMatch = line.match(/^\s*(_closure\d+_slot\d+)\s*=\s*var(\d+);$/);
                if (slotMatch && depMapVars.has(slotMatch[2])) depMapClosures.add(slotMatch[1]);
            }

            const accessMatch = line.match(/(?:var(\d+)|(_closure\d+_slot\d+))\[var(\d+)\]/);
            if (accessMatch) {
                const accessVar = accessMatch[1] ?? accessMatch[2];
                const indexVar = accessMatch[3];
                if ((depMapVars.has(accessVar) || depMapClosures.has(accessVar)) && varValues.has(indexVar)) {
                    const moduleId = depMap[varValues.get(indexVar)!];
                    const importedPath = modulesIds.get(moduleId);
                    if (importedPath) {
                        const assignLine = varLines.get(indexVar);
                        if (assignLine !== undefined) {
                            const key = `${assignLine}:${importedPath}`;
                            if (!annotated.has(key)) {
                                annotated.add(key);
                                finalLines[assignLine] = finalLines[assignLine] + ` // file imported: ${importedPath}`;
                            }
                        }
                    }
                }
            }
        }

        files.set(filePath, { final: finalLines.join('\n'), res });
    }

    await Bun.write(
        '../data/source.jsonl',
        sortEntries([...files.entries()])
            .map(
                ([file, text]) =>
                    `{ "file": ${JSON.stringify(file)}, "size": ${text.final.length} }`,
            )
            .join('\n'),
    );

    progress.update('code_getting', true);

    if (process.env.NODE_ENV !== 'test' && !commitAnyway) {
        progress.start('code_remaking');

        const filePrefix = '../data/source';
        await rm(filePrefix, { recursive: true, force: true });

        const dirs = listRequiredDirs([...files.keys()]);

        await Promise.all(
            dirs.map((dir) =>
                mkdir(join(filePrefix, dir), { recursive: true }),
            ),
        );
        await Promise.all(
            files
                .entries()
                .map(([file, text]) =>
                    Bun.write(join(filePrefix, file), text.res),
                ),
        );

        progress.update('code_remaking', true);
        progress.start('code_pushing');

        // hope the files get written in this time idk :P blehhh
        await Bun.sleep(1500);

        await commit(
            ['source.jsonl', 'source/*'],
            `chore: update source for ${cuteVersion}`,
        );
        progress.update('code_pushing', true);
    } else {
        progress.update('code_remaking', null);
        progress.update('code_pushing', null);
    }
}
