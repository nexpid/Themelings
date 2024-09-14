import { exists } from "node:fs/promises";
import { type Progress, handleShellErr, join } from "../util";

const gzipWorkerURL = new URL("decompile-gzip.ts", import.meta.url).href;

export default async function decompile(
	progress: Progress,
	pathToBundle: string,
	tmpDir: string,
) {
	const pathToDecompiler = join(tmpDir, "decompiler");

	progress.start("decompile_downloading");
	if (!(await exists(pathToDecompiler))) {
		await Bun.$`git clone https://github.com/P1sec/hermes-dec.git ${pathToDecompiler}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
		progress.update("decompile_downloading", true);
	} else progress.update("decompile_downloading", null);

	const { exitCode: hasPython } = await Bun.$`py --version`.nothrow().quiet();
	if (hasPython !== 0)
		throw new Error("Cannot use Python! Are you sure it's installed?");

	const pathToJs = join(tmpDir, "code.js");

	progress.start("decompile_decompiling");
	if (!(await Bun.file(pathToJs).exists())) {
		await Bun.$`py ${join(
			pathToDecompiler,
			"hbc_decompiler.py",
		)} ${pathToBundle} ${pathToJs}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
		progress.update("decompile_decompiling", true);
	} else progress.update("decompile_decompiling", null);

	// "optional" step

	const gzipper = new Worker(gzipWorkerURL);
	progress.start("decompile_gzip");
	gzipper.addEventListener("message", ({ data }) => {
		if (data === true) progress.update("decompile_gzip", true);
		gzipper.terminate();
	});
	gzipper.postMessage({ path: pathToJs, target: "../data/code.gzipped.js" });

	return pathToJs;
}
