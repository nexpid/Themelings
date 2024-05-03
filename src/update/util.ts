import type { ShellOutput } from "bun";

export function makeProgress(
  data: Record<string, string>,
  startPaused: boolean = false
) {
  type Key = keyof typeof data;
  const keys = Object.keys(data);

  const failed = new Set<Key>();
  const success = new Set<Key>();
  const paused = new Set<Key>();
  const errors = new Map<Key, any>();
  if (startPaused) keys.forEach((key) => paused.add(key));

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
        failed.has(key)
          ? "❌"
          : success.has(key)
          ? "✅"
          : paused.has(key)
          ? "🎯"
          : "🕑"
      } ${data[key]}`;
    });

    if (!oldLogs.length) console.log(logs.join("\n"));
    else if (oldLogs.length === logs.length)
      for (let i = 0; i < logs.length; i++)
        if (logs[i] !== oldLogs[i]) {
          const j = logs.length - i;
          process.stdout.moveCursor(-500, -j);
          process.stdout.clearLine(1);
          process.stdout.write(logs[i]);
          process.stdout.moveCursor(-500, j);
        }
  };

  reprint();

  return {
    update(key: Key, result: boolean, error?: any) {
      if (!result) failed.add(key);
      else success.add(key);

      if (error) errors.set(key, error);
      reprint();
    },
    start(key: Key) {
      paused.delete(key);
      reprint();
    },

    anyFailed: () => failed.size > 0,
    anyAvailable: () => keys.length - failed.size - success.size > 0,

    keys,
    errors,
    prettyErrors() {
      return [...errors.entries()].map(([k, v]) => `${k} => ${v}`).join("\n");
    },
  };
}

export async function wrapPromise(
  promise: Promise<any>,
  progress: ReturnType<typeof makeProgress>,
  key: string
) {
  progress.start(key);
  try {
    const x = await promise;
    progress.update(key, true);
    return x;
  } catch (e) {
    progress.update(key, false, e);
    throw e;
  }
}

export function handleShellErr(out: ShellOutput) {
  if (out.exitCode !== 0 && out.exitCode !== 11)
    throw new Error(
      `${
        out.stdout.toString().trim() + "\n" + out.stderr.toString().trim()
      } (exit code ${out.exitCode})`
    );
  else return;
}
