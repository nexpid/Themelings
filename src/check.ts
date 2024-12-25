const tracker = await fetch("https://tracker.vendetta.rocks/tracker/index");
if (!tracker.ok || tracker.status !== 200)
	throw new Error("Failed to get version from tracker!");

const alpha = (await tracker.json()).latest.alpha.toString();

const file = Bun.file("../data/version.txt");
const latest = (await file.exists()) && (await file.text());

if (latest !== alpha || process.argv.includes("--force")) {
	await Bun.write("../data/version.txt", alpha);
	process.stdout.write(alpha);
} else process.stdout.write("false");
