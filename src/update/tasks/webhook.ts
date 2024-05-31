import { DiffEnum, type Diff, type OutDiffs } from "./diffs";

const formatDiff = (diffs: Map<string, Diff>) => {
  const entries = [...diffs.entries()].map(([k, v]) => ({
    name: k,
    ...v,
  })) as any[];

  const sections = {
    Added: entries
      .filter((x) => x.change === DiffEnum.Added)
      .map((x) => `+ ${x.name}: ${x.cur}`),
    Changed: entries
      .filter((x) => x.change === DiffEnum.Changed)
      .map((x) => `- ${x.name}: ${x.old}\n+ ${x.name}: ${x.cur}`),
    Removed: entries
      .filter((x) => x.change === DiffEnum.Removed)
      .map((x) => `- ${x.name}`),
  };

  return Object.entries(sections)
    .filter(([_, body]) => body.length > 0)
    .map(
      ([title, body]) => `**${title}**\n\`\`\`diff\n${body.join("\n")}\`\`\``
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

const triggerWebhook = (
  webhook: string,
  {
    role,
    version,
    embeds,
  }: {
    role?: string;
    version: string;
    embeds: { title: string; body: string }[];
  }
) =>
  fetch(webhook, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      content: role ? `<@&${role}>` : null,
      embeds: embeds.map(({ title, body }) => ({
        title,
        description: body,
        color: null,
        author: {
          name: `${version} (${formatVersion(version)})`,
        },
      })),
      allowed_mentions: { roles: [role] },
    }),
  });

export async function webhook(version: string, diffs: OutDiffs) {
  await triggerWebhook(process.env.color_webhook!, {
    role: (diffs.raw || diffs.semantic) && "1227327297795657850",
    version,
    embeds: [
      {
        title: "Raw colors",
        body: diffs.raw ? formatDiff(diffs.raw) : "No changes",
      },
      {
        title: "Semantic colors",
        body: diffs.semantic ? formatDiff(diffs.semantic) : "No changes",
      },
    ],
  });

  await triggerWebhook(process.env.icons_webhook!, {
    role: diffs.icons && "1227327765079003217",
    version,
    embeds: [
      {
        title: "Icons",
        body: diffs.icons ? formatDiff(diffs.icons) : "No changes",
      },
    ],
  });
}
