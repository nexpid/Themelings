import { basename as _basename } from "node:path";
import type { Canvas } from "skia-canvas";
import draw, { convertDiffs } from "../../canvas";
import { type CodeDiff, type Diff, DiffEnum, type OutDiffs } from "../../types";
import { cuteVersion, version } from "../shared";
import { maxChangesThreshold } from "../util";

function basename(path: string) {
	return `... ${_basename(path)}`;
}

function findInHierarchy(a: string, b: string) {
	const aArc = a.split("/");
	const bArc = b.split("/");

	let divergence = 0;
	while (
		divergence < aArc.length &&
		divergence < bArc.length &&
		aArc[divergence] === bArc[divergence]
	) {
		divergence++;
	}

	const aParts = aArc.slice(divergence).join("/");
	const bParts = bArc.slice(divergence).join("/");

	return [`... ${aParts}`, `... ${bParts}`];
}

function cap(arr: string[], stuff: string, threshold = maxChangesThreshold) {
	if (arr.length > threshold)
		return [
			...arr.slice(0, threshold),
			`(+${arr.length - threshold} ${stuff}${
				arr.length - threshold > 1 ? "s" : ""
			})`,
		];
	return arr;
}

function makeFooter(diffs: Map<any, any>, name: string) {
	return `${diffs.size} ${name} change${diffs.size !== 1 ? "s" : ""} total`;
}

function formatDiff(diffs: Map<string, Diff | CodeDiff>, isCode?: boolean) {
	const entries = [...diffs.entries()].map(([k, v]) => ({
		name: k,
		...v,
	})) as any[];

	const sections = {
		Added: cap(
			entries
				.filter((x) => x.change === DiffEnum.Added)
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((x) =>
					isCode
						? `+ ${basename(x.name)} (${x.size})`
						: `+ ${x.name}: ${x.cur}`,
				),
			"addition",
		),
		Changed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Changed)
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((x) =>
					isCode
						? `${x.sizeDiff[0] === "+" ? "-" : "+"} ${basename(x.name)} (${x.sizeDiff})`
						: `- ${x.name}: ${x.old}\n+ ${x.name}: ${x.cur}`,
				),
			"change",
		),
		Renamed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Renamed)
				.map((x) => {
					if (isCode) {
						const parts = findInHierarchy(x.oldFile, x.name);
						return `- ${parts[0]}\n+ ${parts[1]}`;
					}
					return `- ${x.old}\n+ ${x.name}`;
				}),
			"rename",
		),
		Removed: cap(
			entries
				.filter((x) => x.change === DiffEnum.Removed)
				.map((x) =>
					isCode ? `- ${basename(x.name)} (${x.size})` : `- ${x.name}`,
				),
			"removal",
		),
	};

	return Object.entries(sections)
		.filter(([_, body]) => body.length > 0)
		.map(
			([title, body]) => `**${title}**\n\`\`\`diff\n${body.join("\n")}\`\`\``,
		)
		.join("\n");
}

async function triggerWebhook(
	webhook: string,
	{
		role,
		embeds,
	}: {
		role?: string;
		embeds: { title: string; body: string; image?: Canvas; footer?: string }[];
	},
) {
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
			embeds: embeds.map(({ title, body, image, footer }) => ({
				title,
				description: body,
				color: null,
				author: {
					name: `${version} (${cuteVersion})`,
				},
				image: image && {
					url: `attachment://${images.indexOf(image)}.png`,
				},
				footer: footer && {
					text: footer,
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
}

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
								footer: makeFooter(diffs.raw, "raw color"),
							},
						]
					: []),
				...(diffs.semantic?.size
					? [
							{
								title: "Semantic colors",
								body: formatDiff(diffs.semantic),
								image: await draw(convertDiffs(diffs.semantic, true)),
								footer: makeFooter(diffs.semantic, "semantic color"),
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
					footer: makeFooter(diffs.icons, "icon"),
				},
			],
		});
	if (diffs.code?.size)
		await triggerWebhook(process.env.code_webhook!, {
			role: "1233861867059941387",
			embeds: [
				{
					title: "Code",
					body: formatDiff(diffs.code, true),
					footer: makeFooter(diffs.code, "code"),
				},
			],
		});
}
