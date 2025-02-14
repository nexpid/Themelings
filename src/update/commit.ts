import { commitAnyway } from "./shared";
import { handleShellErr } from "./util";

export const gitChanged = new Set<string>();

export async function getGitChanged() {
	for (const changed of (
		await Bun.$`git status -z -- ':!oldicons' ':!icons' ':!source'`
			.cwd("../data")
			.quiet()
			.then(handleShellErr)
	)
		.text()
		.split("\x00")
		.filter((x) => x !== "")
		.map((x) => x.slice(3)))
		gitChanged.add(changed);
}

const gitQueue: Promise<void>[] = [];

export async function commit(files: string[], message: string) {
	if (process.env.NODE_ENV === "test" && !commitAnyway) return;
	while (gitQueue[0]) {
		await gitQueue[0];
	}

	let resolveProm: any;
	const prom = new Promise<void>((res) => (resolveProm = res));

	gitQueue.push(prom);

	// make sure no files are staged
	await Bun.$`git restore --staged .`
		.cwd("../data")
		.nothrow()
		.quiet()
		.then(handleShellErr);
	await getGitChanged();
	await Bun.$`git add ${{ raw: files.map((x) => Bun.$.escape(x)).join(" ") }}`
		.cwd("../data")
		.nothrow()
		.quiet()
		.then(handleShellErr);
	await Bun.$`git commit -m ${message}`
		.cwd("../data")
		.nothrow()
		.quiet()
		.then((e) => void e);

	await resolveProm?.();
	gitQueue.splice(
		gitQueue.findIndex((x) => x === prom),
		1,
	);
}
