import type { Canvas } from "skia-canvas";
import draw, { convertDiffs } from "../../canvas";
import { DiffEnum, type Diff, type OutDiffs } from "../../types";

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
  }
) => {
  const images = embeds.filter((x) => x.image).map((x) => x.image);

  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    const img = await images[i]!.toBuffer("png");
    formData.append(
      `files[${i}]`,
      new Blob([img], { type: "image/png" }),
      `${i}.png`
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
    })
  );

  return fetch(webhook, {
    method: "POST",
    body: formData,
  });
};

export async function webhook(version: string, diffs: OutDiffs) {
  await triggerWebhook(process.env.color_webhook!, {
    role: (diffs.raw || diffs.semantic) && "1227327297795657850",
    version,
    embeds: [
      {
        title: "Raw colors",
        body: diffs.raw ? formatDiff(diffs.raw) : "No changes",
        image: diffs.raw
          ? await draw(convertDiffs(diffs.raw, true))
          : undefined,
      },
      {
        title: "Semantic colors",
        body: diffs.semantic ? formatDiff(diffs.semantic) : "No changes",
        image: diffs.semantic
          ? await draw(convertDiffs(diffs.semantic, true))
          : undefined,
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
        image: diffs.icons ? await draw(convertDiffs(diffs.icons)) : undefined,
      },
    ],
  });
}
