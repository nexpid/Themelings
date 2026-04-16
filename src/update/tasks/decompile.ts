import { exists } from "node:fs/promises";
import { commit } from "../git";
import type { Progress } from "../progress";
import { codePath, commitAnyway, cuteVersion, workFolder } from "../shared";
import { handleShellErr, join } from "../utils";

const gzipWorkerURL = new URL("decompile-gzip.ts", import.meta.url).href;
const decompilerPy = "src/hermes_dec/decompilation/hbc_decompiler.py";

export default async function decompile(progress: Progress, pathToBundle: string) {
	const pathToDecompiler = join(workFolder, "decompiler");

	progress.start("decompile_downloading");
	if (!(await exists(pathToDecompiler))) {
		await Bun.$`git clone https://github.com/P1sec/hermes-dec.git --depth=1 ${pathToDecompiler}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
		progress.update("decompile_downloading", true);
	} else progress.update("decompile_downloading", null);

	const { exitCode: hasPython } = await Bun.$`python --version`.nothrow().quiet();
	if (hasPython !== 0) throw new Error("Cannot use Python! Are you sure it's installed?");

	progress.start("decompile_decompiling");
	if (!(await Bun.file(codePath).exists())) {
		await Bun.$`python ${join(pathToDecompiler, decompilerPy)} ${pathToBundle} ${codePath}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
		progress.update("decompile_decompiling", true);
	} else progress.update("decompile_decompiling", null);

	// background step
	if (process.env.NODE_ENV !== "test" && !commitAnyway) {
		const gzFile = "code.js.gz";

		const gzipper = new Worker(gzipWorkerURL);
		progress.start("decompile_gzip");
		gzipper.addEventListener("message", async ({ data }) => {
			if (data === true) {
				await commit([gzFile], `chore: update decompiled code for ${cuteVersion}`);
				progress.update("decompile_gzip", true);
			}
			gzipper.terminate();
		});
		gzipper.postMessage({ path: codePath, target: join("../data", gzFile) });
	} else {
		progress.update("decompile_gzip", null);
	}
}
