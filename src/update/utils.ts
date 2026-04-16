import { join as _join, dirname } from "node:path";
import type { $ } from "bun";

export function assert<T>(value: T | undefined | null, message?: string): T {
	if (value === undefined || value === null)
		throw new TypeError(message || `Failed to assert that ${value} is defined`);
	return value;
}

export function sortObj(obj: object) {
	return Object.fromEntries(
		Object.entries(obj).sort(([a], [b]) => {
			const [, aK, aN] = a.match(/(.+?)(\d*)$/) || [];
			const [, bK, bN] = b.match(/(.+?)(\d*)$/) || [];

			if (aK === bK && aN && bN) return Number(aN) - Number(bN);
			else return aK.localeCompare(bK);
		}),
	);
}

export function handleShellErr(out: $.ShellOutput): $.ShellOutput {
	if (out.exitCode !== 0 && out.exitCode !== 11)
		throw new Error(
			`${`${out.stdout.toString().trim()}\n${out.stderr.toString().trim()}`} (exit code ${out.exitCode})`,
		);
	return out;
}

export function formatError(e: any) {
	return e?.stack ?? e?.message ?? String(e);
}

export function listRequiredDirs(files: string[]) {
	const dirs = [...new Set(files.map(dirname))].sort();

	const required: string[] = [];
	for (let i = 0; i < dirs.length; i++) {
		if (i === dirs.length - 1 || !dirs[i + 1].startsWith(`${dirs[i]}/`)) {
			required.push(dirs[i]);
		}
	}
	return required;
}

export function parseJsonl(text: string) {
	return JSON.parse(`[${text.split("\n").join()}]`);
}

export function discordPath(path: string) {
	return join("app", path);
}

export const join = (...paths: string[]) => _join(...paths).replace(/\\/g, "/");
