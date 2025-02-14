import type { Canvas } from "skia-canvas";
import draw, { convertDiffs } from "../../canvas";
import { type CodeDiff, type Diff, DiffEnum, type OutDiffs } from "../../types";
import { cuteVersion, version } from "../shared";
import { maxChangesThreshold, maxCodeChangesThreshold } from "../util";

const cap = (arr: string[], stuff: string, threshold = maxChangesThreshold) =>
	arr.length > threshold
		? [
				...arr.slice(0, threshold),
				`(+${arr.length - threshold} ${stuff}${
					arr.length - threshold > 1 ? "s" : ""
				})`,
			]
		: arr;

const formatDiff = (diffs: Map<string, Diff | CodeDiff>, isCode?: boolean) => {
	const entries = [...diffs.entries()].map(([k, v]) => ({
		name: k,
		...v,
	})) as any[];

	const threshold = isCode ? maxCodeChangesThreshold : maxChangesThreshold;
	const sections = {
		Added: cap(
			entries
				.filter((x) => x.change === DiffEnum.Added)
				.map((x) =>
					isCode ? `+ ${x.name} (${x.size})` : `+ ${x.name}: ${x.cur}`,
				),
			"addition",
			threshold,
		),
		Changed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Changed)
				.map((x) =>
					isCode
						? `${x.sizeDiff[0] === "+" ? "-" : "+"} ${x.name} (${x.sizeDiff})`
						: `- ${x.name}: ${x.old}\n+ ${x.name}: ${x.cur}`,
				),
			"change",
			threshold,
		),
		Renamed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Renamed)
				.map((x) =>
					isCode ? `- ${x.oldFile}\n+ ${x.name}` : `- ${x.old}\n+ ${x.name}`,
				),
			"rename",
			threshold,
		),
		Removed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Removed)
				.map((x) => (isCode ? `- ${x.file} (${x.size})` : `- ${x.name}`)),
			"removal",
			threshold,
		),
	};

	return Object.entries(sections)
		.filter(([_, body]) => body.length > 0)
		.map(
			([title, body]) => `**${title}**\n\`\`\`diff\n${body.join("\n")}\`\`\``,
		)
		.join("\n");
};

const triggerWebhook = async (
	webhook: string,
	{
		role,
		embeds,
	}: {
		role?: string;
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
					name: `${version} (${cuteVersion})`,
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

export async function webhook(diffs: OutDiffs) {
	if (diffs.raw?.size || diffs.semantic?.size)
		await triggerWebhook(process.env.color_webhook!, {
			role: "1227327297795657850",
			embeds: [
				...(diffs.raw?.size
					? [
							{
								title: "Raw colors",
								body: formatDiff(diffs.raw),
								image: await draw(convertDiffs(diffs.raw, true)),
							},
						]
					: []),
				...(diffs.semantic?.size
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

	if (diffs.icons?.size)
		await triggerWebhook(process.env.icons_webhook!, {
			role: "1227327765079003217",
			embeds: [
				{
					title: "Icons",
					body: formatDiff(diffs.icons),
					image: await draw(convertDiffs(diffs.icons)),
				},
			],
		});
	if (diffs.code?.size)
		await triggerWebhook(process.env.code_webhook!, {
			role: "1233861867059941387",
			embeds: [
				{
					title: "Icons",
					body: formatDiff(diffs.code, true),
				},
			],
		});
}
