import { exists, rm } from "node:fs/promises";
import mock from "../mock";
import type { Differs } from "../types";
import { commit } from "./git";
import { log, makeProgress, wrapPromise } from "./progress";
import { apksFolder, codePath, cuteVersion, isMock, isQuiet, oprevFiles, prevFiles, version } from "./shared";
import codeTask from "./tasks/code";
import colors from "./tasks/colors";
import decompile from "./tasks/decompile";
import diffs from "./tasks/diffs";
import icons from "./tasks/icons";
import { webhook } from "./tasks/webhook";
import { formatError, handleShellErr, join } from "./utils";

export async function runTasks() {
	log("\nRunning tasks...");
	const progress = makeProgress(
		{
			preinit: "Preinit",
			preinit_discard: "Discarding changes",
			preinit_save: "Caching original files",
			decompile: "Decompilation",
			decompile_downloading: "Downloading decompiler",
			decompile_decompiling: "Decompiling index.android.bundle",
			decompile_gzip: "Compressing code",
			code: "Code parser",
			code_getting: "Finding file imports",
			code_remaking: "Recreating code",
			code_pushing: "Committing source",
			colors: "Parsing colors",
			icons: "Icon parser",
			icons_getting: "Writing icons.json",
			icons_copying: "Copying images",
			diff: "Diffs",
			diff_raw: "Diffing raw colors",
			diff_semantic: "Diffing semantic colors",
			diff_icons: "Diffing icons",
			diff_code: "Diffing code",
			webhook: "Sending webhook messages",
		},
		true,
	);
	let differs: Differs | undefined;

	if (!isMock) {
		// discard changes
		try {
			progress.start("preinit");

			// reset to remote branch (without pulling latest commit)
			progress.start("preinit_discard");
			await Bun.$`git reset --hard`.cwd("../data").nothrow().quiet().then(handleShellErr);
			if (await exists(join("../data", "oldicons")))
				await rm(join("../data", "oldicons"), { force: true, recursive: true });
			await Bun.write("../data/version.txt", version); // lel

			// unstage all files
			await Bun.$`git restore --staged .`.cwd("../data").nothrow().quiet().then(handleShellErr);

			progress.update("preinit_discard", true);

			progress.start("preinit_save");
			for (const oprev of oprevFiles) {
				const file = Bun.file(join("../data", oprev));
				if (await file.exists()) prevFiles.set(oprev, await file.arrayBuffer());
			}
			progress.update("preinit_save", true);
			progress.update("preinit", true);
		} catch (e) {
			progress.update("preinit", false);
			throw new Error(`Failed to discard changes!\n${e}`);
		}

		try {
			await wrapPromise(
				decompile(progress, join(apksFolder, "base", "assets", "index.android.bundle")),
				progress,
				"decompile",
			);
		} catch (e) {
			throw new Error(`Failed to decompile!\n${e}`);
		}

		const code = (await Bun.file(codePath).text()).replace(/\r/g, "").split("\n");

		await Promise.allSettled([
			wrapPromise(codeTask(progress, code), progress, "code"),
			wrapPromise(colors(code), progress, "colors"),
			wrapPromise(icons(progress, code), progress, "icons"),
		]);
		if (progress.someFailed("code", "colors", "icons"))
			throw new Error(`Failed at parser tasks!\n${progress.prettyErrors("code", "colors", "icons")}`);

		while (!progress.isFinished("decompile_gzip")) {
			await Bun.sleep(1000);
		}

		if (progress.someFailed("decompile_gzip"))
			throw new Error(`Failed at the decompile gzip task!\n${progress.prettyErrors("decompile_gzip")}`);

		try {
			differs = await diffs(progress);
			progress.update("diff", true);
		} catch (e: any) {
			progress.update("diff", false, formatError(e));
			throw new Error(`Failed to generate diffs!\n${formatError(e)}`);
		}
	} else {
		differs = mock;
	}

	if (differs && !isQuiet) {
		try {
			await wrapPromise(webhook(differs), progress, "webhook");
		} catch (e: any) {
			throw new Error(`Failed to send webhook messages!\n${formatError(e)}`);
		}
	} else {
		progress.update("webhook", null);
	}

	await commit(["version.txt"], `chore: bump app version to ${cuteVersion}`);
	await rm("../data/oldicons", { force: true, recursive: true });
}
