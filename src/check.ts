import { trackerUserAgent } from "./update/shared";

const tracker = await fetch("https://tracker.vendetta.rocks/tracker/index", {
	headers: {
		"User-Agent": trackerUserAgent,
	},
});
if (!tracker.ok || tracker.status !== 200) throw new Error("Failed to get version from tracker!");

const data = (await tracker.json()) as { latest: { alpha: number } };
const alpha = data.latest.alpha.toString();

const file = Bun.file("../data/version.txt");
const latest = (await file.exists()) && (await file.text());

if (latest !== alpha || process.argv.includes("--force")) {
	await file.write(alpha);
	process.stdout.write(alpha);
} else process.stdout.write("false");
