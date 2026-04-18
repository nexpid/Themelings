import { basename } from "node:path";
import type { Canvas } from "@napi-rs/canvas";
import { RouteBases, Routes } from "discord-api-types/v10";
import { drawSections } from "../../canvas";
import { makeSections } from "../../canvas/factory";
import { type CodeDiff, type Diff, type Differs, DiffType } from "../../types";
import { cuteVersion, maxCodeChanges, maxGeneralChanges, version } from "../shared";
import { assert, formatBytes } from "../utils";

function fileBase(path: string, other?: string) {
	if (!other) return `... ${basename(path)}`;
	const paths = path.split("/"),
		others = other.split("/");

	let offset = 0;
	while (offset < Math.min(paths.length, others.length) - 1 && paths[offset] === others[offset]) {
		offset++;
	}

	return `... ${paths.slice(offset).join("/")}`;
}

function makeFooter(size: number, item: string) {
	return `${size.toLocaleString("en-US")} ${item} change${size !== 1 ? "s" : ""} total`;
}

function cap(lines: string[], item: string, threshold: number) {
	if (lines.length > threshold)
		return [...lines.slice(0, threshold), `(+${(lines.length - threshold).toLocaleString("en-US")} ${item})`];
	return lines;
}

function formatDiff(diffs: Map<string, Diff | CodeDiff>, threshold = maxGeneralChanges) {
	const entries = [...diffs.entries()];

	const sections = {
		Added: entries
			.sort(([a], [b]) => a.localeCompare(b))
			.map(
				([name, diff]) =>
					diff.type === DiffType.Added &&
					("size" in diff
						? `+ ${fileBase(name)} (${formatBytes(diff.size)})`
						: `+ ${name}: ${diff.label || diff.source}`),
			)
			.filter((x) => typeof x === "string"),
		Changed: entries
			.sort(([a], [b]) => a.localeCompare(b))
			.map(
				([name, diff]) =>
					diff.type === DiffType.Changed &&
					`- ${name}: ${diff.oldLabel || diff.oldSource}\n+ ${name}: ${diff.label || diff.source}`,
			)
			.filter((x) => typeof x === "string"),
		Renamed: entries
			.sort(([a], [b]) => a.localeCompare(b))
			.map(
				([name, diff]) =>
					diff.type === DiffType.Renamed &&
					("size" in diff
						? `- ${fileBase(diff.oldName, name)}\n+ ${fileBase(name, diff.oldName)}`
						: `- ${diff.oldName}\n+ ${name}`),
			)
			.filter((x) => typeof x === "string"),
		Removed: entries
			.sort(([a], [b]) => a.localeCompare(b))
			.map(
				([name, diff]) =>
					diff.type === DiffType.Removed &&
					("size" in diff
						? `- ${fileBase(name)} (${formatBytes(diff.size)})`
						: `- ${name}: ${diff.label || diff.source}`),
			)
			.filter((x) => typeof x === "string"),
	};

	const text = Object.entries(sections).filter(([, lines]) => lines.length);
	return {
		embed: text
			.map(
				([title, lines]) => `**${title}**\n\`\`\`diff\n${cap(lines, title.toLowerCase(), threshold).join("\n")}\`\`\``,
			)
			.join("\n"),
		file: text.map(([title, lines]) => `# ${title}\n\n${lines.join("\n")}`).join("\n\n"),
		capped: text.some(([, lines]) => lines.length > threshold),
	};
}

async function sendWebhook(
	webhook: string,
	role: string,
	embeds: {
		title: string;
		body: { embed: string; file: string; capped: boolean };
		image?: Canvas;
		footer?: string;
		key: string;
	}[],
) {
	const body = new FormData();
	const items = new Map<Canvas, number>();

	let fi = 0;
	for (const embed of embeds) {
		if (embed.image) {
			items.set(embed.image, fi);
			body.append(`files[${fi}]`, new Blob([embed.image.toBuffer("image/png")], { type: "image/png" }), `${fi++}.png`);
		}
		if (embed.body.capped) {
			body.append(`files[${fi++}]`, new Blob([embed.body.file], { type: "text/plain" }), `diff-${embed.key}.diff`);
		}
	}

	body.append(
		"payload_json",
		JSON.stringify({
			content: `<@&${role}>`,
			embeds: embeds.map(({ title, body, image, footer }) => ({
				title,
				description: body.embed,
				color: null,
				author: {
					name: `${version} (${cuteVersion})`,
				},
				image: image && {
					url: `attachment://${items.get(image)}.png`,
				},
				footer: footer && {
					text: footer,
				},
			})),
			allowed_mentions: process.env.NODE_ENV === "test" ? { parse: [] } : { roles: [role] },
		}),
	);

	const url = new URL(webhook);
	url.searchParams.set("wait", "true");
	url.searchParams.set("with_components", "true");

	const res = await fetch(url, {
		method: "POST",
		body,
	});

	const data = await res.text();
	if (!res.ok)
		throw new Error(`Failed to send webhook message with embeds ${embeds.map((x) => x.title).join(", ")}: ${data}`);

	const discordToken = process.env.bot_token;
	if (!discordToken) return;

	// this can fail quietly
	try {
		const message = JSON.parse(data);

		const route = `${RouteBases.api}/${Routes.channelMessageCrosspost(message.channel_id, message.id)}`;
		await fetch(route, {
			method: "POST",
			headers: {
				Authorization: discordToken,
			},
		});
	} catch {}
}

export async function webhook(diffs: Differs) {
	if (diffs.raw?.size || diffs.semantic?.size)
		await sendWebhook(
			assert(process.env.color_webhook, "Missing color webhook env"),
			"1227327297795657850",
			[
				diffs.raw?.size && {
					title: "Raw colors",
					body: formatDiff(diffs.raw),
					image: drawSections(await makeSections(diffs.raw)),
					footer: makeFooter(diffs.raw.size, "raw color"),
					key: "raw-colors",
				},
				diffs.semantic?.size && {
					title: "Semantic colors",
					body: formatDiff(diffs.semantic),
					image: drawSections(await makeSections(diffs.semantic)),
					footer: makeFooter(diffs.semantic.size, "semantic color"),
					key: "semantic-colors",
				},
			].filter((x) => !!x),
		);

	if (diffs.icons?.size)
		await sendWebhook(assert(process.env.icons_webhook, "Missing icons webhook env"), "1227327765079003217", [
			{
				title: "Icons",
				body: formatDiff(diffs.icons),
				image: drawSections(await makeSections(diffs.icons, true)),
				footer: makeFooter(diffs.icons.size, "icon"),
				key: "icons",
			},
		]);

	if (diffs.code?.size)
		await sendWebhook(assert(process.env.code_webhook, "Missing code webhook env"), "1233861867059941387", [
			{
				title: "Code",
				body: formatDiff(diffs.code, maxCodeChanges),
				footer: makeFooter(diffs.code.size, "code"),
				key: "code",
			},
		]);
}
