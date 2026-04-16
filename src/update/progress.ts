import { formatError } from "./utils";

let somethingInLog = false;
export function log(...messages: any) {
	console.log(...messages);
	somethingInLog = true;
}

export function makeProgress(data: Record<string, string>, startPaused = false) {
	type Key = keyof typeof data;
	const keys = Object.keys(data);

	const result = new Map<Key, "failed" | "success" | "paused" | "idle" | "skipped">();
	const errors = new Map<Key, any>();
	if (startPaused) for (const key of keys) result.set(key, "paused");

	let logs: string[] = [];
	const reprint = () => {
		const oldLogs = logs;
		logs = keys.map((key) => {
			const rootKey = key.split("_")[1] && keys.includes(key.split("_")[0]) && key.split("_")[0];
			const otherKeys = keys.filter((x) => x.split("_")[0] === rootKey);
			const isLast = otherKeys.indexOf(key) === otherKeys.length - 1;

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

	somethingInLog = false;
	reprint();

	const bKeyer = (keys: Key[]) => {
		const bKeys: Key[] = [];
		for (const k of keys) bKeys.push(k, ...keys.filter((x) => x.startsWith(`${k}_`)));
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
		someFailed: (...keys: Key[]) => bKeyer(keys).some((k) => result.get(k) === "failed"),
		isFinished: (key: Key) => ["success", "failed", "skipped"].some((x) => result.get(key) === x),

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

export async function wrapPromise<T>(promise: Promise<T>, progress: Progress, key: string): Promise<T> {
	progress.start(key);
	try {
		const value = await promise;
		progress.update(key, true);
		return value;
	} catch (e: any) {
		progress.update(key, false, formatError(e));
		throw e;
	}
}
