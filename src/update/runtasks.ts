import { exists, rm } from "node:fs/promises";
import mock from "../mock";
import type { OutDiffs } from "../types";
import { commit } from "./commit";
import { apksToDownload, cuteVersion, isMock, oprevFiles, prevFiles, version } from "./shared";
import codeTask from "./tasks/code";
import colors from "./tasks/colors";
import decompile from "./tasks/decompile";
import diffs from "./tasks/diffs";
import icons from "./tasks/icons";
import { webhook } from "./tasks/webhook";
import { cuteError, handleShellErr, join, makeProgress, wrapPromise } from "./util";

export async function runTasks(tempFolder: string) {
	console.log("\nRunning tasks...");
	const taskProgress = makeProgress(
		{
			preinit: "Preinit",
			preinit_discard: "Discard changes",
			preinit_save: "Save original files",
			decompile: "Decompiling index.android.bundle",
			decompile_downloading: "Downloading decompiler",
			decompile_decompiling: "Decompiling",
			decompile_gzip: "Gzip code",
			code: "Parsing code",
			code_getting: "Finding file imports",
			code_remaking: "Recreating code",
			code_pushing: "Committing source",
			colors: "Getting colors",
			icons: "Getting icons",
			icons_getting: "Writing icons.json",
			icons_copying: "Copying images",
			diff: "Generate diffs",
			diff_raw: "Diffing raw colors",
			diff_semantic: "Diffing semantic colors",
			diff_icons: "Diffing icons",
			diff_code: "Diffing code",
			webhook: "Send webhook messages",
		},
		true,
	);
	let outDiffs: OutDiffs | null;

	if (!isMock) {
		// discard changes
		try {
			taskProgress.start("preinit");

			// reset to remote branch (without pulling latest commit)
			taskProgress.start("preinit_discard");
			await Bun.$`git reset --hard`.cwd("../data").nothrow().quiet().then(handleShellErr);
			if (await exists(join("../data", "oldicons")))
				await rm(join("../data", "oldicons"), { force: true, recursive: true });
			await Bun.write("../data/version.txt", version); // lel

			// unstage all files
			await Bun.$`git restore --staged .`.cwd("../data").nothrow().quiet().then(handleShellErr);

			taskProgress.update("preinit_discard", true);

			taskProgress.start("preinit_save");
			for (const oprev of oprevFiles) {
				const file = Bun.file(join("../data", oprev));
				if (await file.exists()) prevFiles.set(oprev, await file.arrayBuffer());
			}
			taskProgress.update("preinit_save", true);
			taskProgress.update("preinit", true);
		} catch (e) {
			taskProgress.update("preinit", false);
			throw new Error(`Failed to discard changes!\n${e}`);
		}

		let pathToJs: string;
		try {
			taskProgress.start("decompile");
			pathToJs = await decompile(taskProgress, join(tempFolder, "base", "assets", "index.android.bundle"), tempFolder);
			taskProgress.update("decompile", true);
		} catch (e) {
			taskProgress.update("decompile", false);
			throw new Error(`Failed to decompile!\n${e}`);
		}

		const code = (await Bun.file(pathToJs).text()).replace(/\r/g, "").split("\n");

		try {
			taskProgress.start("code");
			await codeTask(taskProgress, code);
			taskProgress.update("code", true);
		} catch (e: any) {
			taskProgress.update("code", false);
			throw new Error(`Failed at the code task!\n${cuteError(e)}`);
		}

		await Promise.allSettled([
			wrapPromise(colors(code), taskProgress, "colors"),
			wrapPromise(
				icons(taskProgress, code, ...apksToDownload.map((apk) => join(tempFolder, apk))),
				taskProgress,
				"icons",
			),
		]);
		if (taskProgress.someFailed("colors", "icons"))
			throw new Error(`Failed at the colors + icons task!\n${taskProgress.prettyErrors("colors", "icons")}`);

		while (!taskProgress.isFinished("decompile_gzip")) {
			await Bun.sleep(1000);
		}

		if (taskProgress.someFailed("decompile_gzip"))
			throw new Error(`Failed at the decompile gzip task!\n${taskProgress.prettyErrors("decompile_gzip")}`);

		try {
			taskProgress.start("diff");
			outDiffs = await diffs(taskProgress);
		} catch (e: any) {
			taskProgress.update("diff", false);
			throw new Error(`Failed to generate diffs!\n${cuteError(e)}`);
		}
	} else {
		outDiffs = mock;
	}

	if (outDiffs) {
		try {
			taskProgress.start("webhook");
			await webhook(outDiffs);
			taskProgress.update("webhook", true);
		} catch (e: any) {
			taskProgress.update("webhook", false);
			throw new Error(`Failed to send webhook messages!\n${cuteError(e)}`);
		}
	} else {
		taskProgress.update("webhook", null);
	}

	await commit(["version.txt"], `chore: bump app version to ${cuteVersion}`);
	await rm("../data/oldicons", { force: true, recursive: true });
}
