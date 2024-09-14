import type { Canvas } from "skia-canvas";
import draw, { convertDiffs } from "../../canvas";
import { type Diff, DiffEnum, type OutDiffs } from "../../types";
import { maxChangesThreshold } from "../util";

const cap = (arr: string[], stuff: string) =>
	arr.length > maxChangesThreshold
		? [
				...arr.slice(0, maxChangesThreshold),
				`(+${arr.length - maxChangesThreshold} ${stuff}${
					arr.length - maxChangesThreshold > 1 ? "s" : ""
				})`,
			]
		: arr;

const formatDiff = (diffs: Map<string, Diff>) => {
	const entries = [...diffs.entries()].map(([k, v]) => ({
		name: k,
		...v,
	})) as any[];

	const sections = {
		Added: cap(
			entries
				.filter((x) => x.change === DiffEnum.Added)
				.map((x) => `+ ${x.name}: ${x.cur}`),
			"addition",
		),
		Changed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Changed)
				.map((x) => `- ${x.name}: ${x.old}\n+ ${x.name}: ${x.cur}`),
			"change",
		),
		Renamed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Renamed)
				.map((x) => `- ${x.old}\n+ ${x.name}`),
			"rename",
		),
		Removed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Removed)
				.map((x) => `- ${x.name}`),
			"removal",
		),
	};

	return Object.entries(sections)
		.filter(([_, body]) => body.length > 0)
		.map(
			([title, body]) => `**${title}**\n\`\`\`diff\n${body.join("\n")}\`\`\``,
		)
		.join("\n");
};

const formatVersion = (version: string) => {
	const major = version.slice(0, -3);
	const sub = version[3];
	const min = version.slice(-2);

	return `${
		["Stable", "Beta", "Alpha"][Number(sub)] ?? "Unknown"
	} ${major}.${Number(min)}`;
};

const triggerWebhook = async (
	webhook: string,
	{
		role,
		version,
		embeds,
	}: {
		role?: string;
		version: string;
		embeds: { title: string; body: string; image?: Canvas }[];
	},
) => {
	const images = embeds.filter((x) => x.image).map((x) => x.image);

	const formData = new FormData();

	for (let i = 0; i < images.length; i++) {
		const img = await images[i]?.toBuffer("png");
		formData.append(
			`files[${i}]`,
			new Blob([img as any], { type: "image/png" }),
			`${i}.png`,
		);
	}

	formData.append(
		"payload_json",
		JSON.stringify({
			content: role ? `<@&${role}>` : null,
			embeds: embeds.map(({ title, body, image }) => ({
				title,
				description: body,
				color: null,
				author: {
					name: `${version} (${formatVersion(version)})`,
				},
				image: image && {
					url: `attachment://${images.indexOf(image)}.png`,
				},
			})),
			allowed_mentions:
				process.env.NODE_ENV === "test" ? { parse: [] } : { roles: [role] },
		}),
	);

	const res = await fetch(webhook, {
		method: "POST",
		body: formData,
	});

	if (!res.ok)
		throw new Error(
			`Failed to send webhook message with embeds ${embeds
				.map((x) => x.title)
				.join(", ")}: ${await res.text()}`,
		);
};

export async function webhook(version: string, diffs: OutDiffs) {
	if (diffs.raw || diffs.semantic)
		await triggerWebhook(process.env.color_webhook!, {
			role: "1227327297795657850",
			version,
			embeds: [
				...(diffs.raw
					? [
							{
								title: "Raw colors",
								body: formatDiff(diffs.raw),
								image: await draw(convertDiffs(diffs.raw, true)),
							},
						]
					: []),
				...(diffs.semantic
					? [
							{
								title: "Semantic colors",
								body: formatDiff(diffs.semantic),
								image: await draw(convertDiffs(diffs.semantic, true)),
							},
						]
					: []),
			],
		});

	if (diffs.icons)
		await triggerWebhook(process.env.icons_webhook!, {
			role: "1227327765079003217",
			version,
			embeds: [
				{
					title: "Icons",
					body: formatDiff(diffs.icons),
					image: await draw(convertDiffs(diffs.icons)),
				},
			],
		});
}
