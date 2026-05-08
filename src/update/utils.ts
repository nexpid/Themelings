import { join as _join, dirname } from "node:path";
import type { $ } from "bun";

export function assert<T>(value: T | undefined | null, message?: string): T {
	if (value === undefined || value === null)
		throw new TypeError(message || `Failed to assert that ${value} is defined`);
	return value;
}

const numberSuffixRegex = /(.*?)(\d*)$/;
export function sortEntries<T extends [key: string, value: any][]>(entries: T) {
	return entries.sort(([a], [b]) => {
		const [, _aKey, aNum] = a.match(numberSuffixRegex) || [],
			[, _bKey, bNum] = b.match(numberSuffixRegex) || [];
		const aKey = _aKey ?? a,
			bKey = _bKey ?? b;

		if (aKey === bKey && aNum && bNum) return Number(aNum) - Number(bNum);
		return aKey.localeCompare(bKey);
	});
}

export function sortObj<T extends object>(obj: T) {
	return Object.fromEntries(sortEntries(Object.entries(obj))) as T;
}

// "you should make it uppercase"
const BYTE = 1024;
export function formatBytes(bytes: number, decimals = 1) {
	if (!bytes) return "0 B";

	const sizes = ["B", "KB", "MB"];
	const mag = Math.min(Math.floor(Math.log(bytes) / Math.log(BYTE)), sizes.length - 1);
	return `${parseFloat((bytes / BYTE ** mag).toFixed(decimals))} ${sizes[mag]}`;
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
	const lines = text
		.trim()
		.split("\n")
		.map((x) => x.trim())
		.filter((x) => !!x);
	return JSON.parse(`[${lines.join()}]`);
}

export function discordPath(path: string) {
	return join("app", path);
}

export const join = (...paths: string[]) => _join(...paths).replace(/\\/g, "/");
