import { commitAnyway } from "./shared";
import { handleShellErr } from "./utils";

export const gitChanged = new Set<string>();

export async function fetchGitChanged() {
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

	const { promise, resolve } = Promise.withResolvers<void>();
	gitQueue.push(promise);

	if (process.env.NODE_ENV === "test" && !commitAnyway) {
		await fetchGitChanged();
	} else {
		// unstage all files
		await Bun.$`git restore --staged .`.cwd("../data").nothrow().quiet().then(handleShellErr);
		await fetchGitChanged();
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

	resolve();

	const promInd = gitQueue.indexOf(promise);
	if (promInd !== -1) gitQueue.splice(promInd, 1);
}
