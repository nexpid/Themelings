import { mkdir } from "node:fs/promises";
import { join as _join } from "node:path";
import { type ShellOutput, revision } from "bun";

export const maxChangesThreshold = 10; // thank you Discord for making 700 icon changes in one version

export function sortObj(obj: Record<string | number | symbol, any>) {
	return Object.fromEntries(
		Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)),
	);
}

let somethingInLog = false;
export function didSomethingInLog() {
	somethingInLog = true;
}

export function log(...messages: any) {
	console.log(...messages);
	somethingInLog = true;
}

export function makeProgress(
	data: Record<string, string>,
	startPaused = false,
) {
	type Key = keyof typeof data;
	const keys = Object.keys(data);

	const result = new Map<
		Key,
		"failed" | "success" | "paused" | "idle" | "skipped"
	>();
	const errors = new Map<Key, any>();
	if (startPaused) for (const key of keys) result.set(key, "paused");

	let logs = new Array<string>();
	const reprint = () => {
		const oldLogs = logs;
		logs = keys.map((key) => {
			const rootKey =
				key.split("_")[1] &&
				keys.includes(key.split("_")[0]) &&
				key.split("_")[0];
			const otherKeys = keys.filter((x) => x.split("_")[0] === rootKey);
			const isLast =
				otherKeys.findIndex((x) => x === key) === otherKeys.length - 1;

			return `${rootKey ? (isLast ? " ╚═ " : " ╠═ ") : ""}${
				{
					success: "✅",
					failed: "❌",
					skipped: "💫",
					paused: "🔔",
					idle: "⏰",
				}[result.get(key) || "idle"]
			} ${data[key]}`;
		});

		if (!oldLogs.length) console.log(logs.join("\n"));
		else if (
			oldLogs.length === logs.length &&
			process.stdout.moveCursor &&
			process.stdout.clearLine &&
			!somethingInLog
		) {
			for (let i = 0; i < logs.length; i++)
				if (logs[i] !== oldLogs[i]) {
					const j = logs.length - i;
					process.stdout.moveCursor(-500, -j);
					process.stdout.clearLine(1);
					process.stdout.write(logs[i]);
					process.stdout.moveCursor(-500, j);
				}
		} else {
			somethingInLog = false;
			console.log(`\n${logs.join("\n")}`);
		}
	};

	reprint();

	const bKeyer = (keys: Key[]) => {
		const bKeys = new Array<Key>();
		for (const k of keys)
			bKeys.push(k, ...keys.filter((x) => x.startsWith(`${k}_`)));
		return bKeys;
	};

	return {
		update(key: Key, value: boolean | null, error?: any) {
			if (value === true) result.set(key, "success");
			else if (value === false) result.set(key, "failed");
			else if (value === null) result.set(key, "skipped");

			if (error) errors.set(key, error);
			reprint();
		},
		start(key: Key) {
			result.set(key, "idle");
			reprint();
		},
		pause(key: Key) {
			result.set(key, "paused");
			reprint();
		},

		anyFailed: () => [...result.values()].some((x) => x === "failed"),
		someFailed: (...keys: Key[]) =>
			bKeyer(keys).some((k) => result.get(k) === "failed"),
		isFinished: (key: Key) =>
			["success", "failed", "skipped"].some((x) => result.get(key) === x),

		keys,
		errors,
		prettyErrors(...keys: Key[]) {
			const bKeys = bKeyer(keys);
			let err = [...errors.entries()];

			if (keys[0]) err = err.filter(([k]) => bKeys.includes(k));
			return err.map(([k, v]) => `${k} => ${v}`).join("\n");
		},
	};
}

export type Progress = ReturnType<typeof makeProgress>;

export async function wrapPromise(
	promise: Promise<any>,
	progress: Progress,
	key: string,
) {
	progress.start(key);
	try {
		const x = await promise;
		progress.update(key, true);
		return x;
	} catch (e: any) {
		progress.update(key, false, cuteError(e));
		throw e;
	}
}

export function handleShellErr(out: ShellOutput): ShellOutput {
	if (out.exitCode !== 0 && out.exitCode !== 11)
		throw new Error(
			`${`${out.stdout.toString().trim()}\n${out.stderr.toString().trim()}`} (exit code ${out.exitCode})`,
		);
	return out;
}

export const join = (...paths: string[]) => _join(...paths).replace(/\\/g, "/");

// at this bun version, warnings flood the console sometimes
export const mkdirSuppressed = (...args: Parameters<typeof mkdir>) =>
	mkdir(...args).catch((e) =>
		e?.code === "EEXIST"
			? (revision === "c1708ea6ab529a4c747a8282a24d125dc20b0a63" &&
					didSomethingInLog(),
				void e)
			: cuteError(e),
	);

export function cuteError(e: any) {
	return e?.stack ?? e?.message ?? String(e);
}

export function sortByHierarchy(a: string, b: string) {
	return a.split("/").length - b.split("/").length;
}

export function formatBytes(bytes: number, decimals = 2): string {
	if (bytes === 0) return "0 B";

	const k = 1024;
	const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${Number.parseFloat((bytes / k ** i).toFixed(Math.max(decimals, 0)))} ${sizes[i]}`;
}
