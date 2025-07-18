import { commitAnyway } from "./shared";
import { handleShellErr } from "./util";

export const gitChanged = new Set<string>();

export async function getGitChanged() {
	for (const changed of (
		await Bun.$`git status -z -- ':!oldicons' ':!icons' ':!source'`.cwd("../data").quiet().then(handleShellErr)
	)
		.text()
		.split("\x00")
		.filter((x) => x !== "")
		.map((x) => x.slice(3)))
		gitChanged.add(changed);
}

const gitQueue: Promise<void>[] = [];

export async function commit(files: string[], message: string) {
	while (gitQueue[0]) {
		await gitQueue[0];
	}

	let resolveProm: any;
	const prom = new Promise<void>((res) => (resolveProm = res));

	gitQueue.push(prom);

	if (process.env.NODE_ENV === "test" && !commitAnyway) {
		await getGitChanged();
	} else {
		// unstage all files
		await Bun.$`git restore --staged .`.cwd("../data").nothrow().quiet().then(handleShellErr);
		await getGitChanged();
		// stage files
		await Bun.$`git add ${{ raw: files.map((x) => Bun.$.escape(x)).join(" ") }}`
			.cwd("../data")
			.nothrow()
			.quiet()
			.then(handleShellErr);
		// commiiiiiit
		await Bun.$`git commit -m ${message}`
			.cwd("../data")
			.nothrow()
			.quiet()
			.then((e) => void e);
	}

	await resolveProm?.();
	gitQueue.splice(
		gitQueue.findIndex((x) => x === prom),
		1,
	);
}
