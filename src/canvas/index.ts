import { Canvas, FontLibrary, loadImage } from "skia-canvas";
import { DiffEnum, type Diff } from "../types";

interface DataEntry {
  label: string;
  color?: string;
  file?: string;
}

FontLibrary.use("gg-sans", ["src/canvas/fonts/ggsans/*.ttf"]);

const colors = {
  bgMain: "#1c1d23", // BACKGROUND_PRIMARY
  bgSecondary: "#26272f", // BACKGROUND_SECONDARY
  textNormal: "#c7c8ce", // TEXT_NORMAL
};

export function convertDiffs(
  diffs: Map<string, Diff>,
  color?: boolean
): Record<string, DataEntry[][]> {
  const obj = {
    Added: [[]],
    Changed: [[], []],
    Removed: [[]],
  } as Record<string, DataEntry[][]>;

  for (const [label, change] of diffs.entries()) {
    if (change.change === DiffEnum.Added) {
      const cur = change.curFile ?? change.cur;

      obj.Added[0].push({
        label,
        file: color ? undefined : cur,
        color: color ? cur : undefined,
      });
    } else if (change.change === DiffEnum.Changed) {
      const old = change.oldFile ?? change.old;
      const cur = change.curFile ?? change.cur;

      obj.Changed[0].push({
        label: `${label} — old`,
        file: color ? undefined : old,
        color: color ? old : undefined,
      });
      obj.Changed[1].push({
        label: `${label} — new`,
        file: color ? undefined : cur,
        color: color ? cur : undefined,
      });
    } else if (change.change === DiffEnum.Removed) {
      const old = change.oldFile ?? change.old;

      obj.Removed[0].push({
        label,
        file: color ? undefined : old,
        color: color ? old : undefined,
      });
    }
  }

  return Object.fromEntries(
    Object.entries(obj).filter(([_, entries]) => entries.length > 0)
  );
}

export default async function draw(data: Record<string, DataEntry[][]>) {
  const entries = Object.entries(data).filter((x) => x[1].length > 0);

  // constants
  const labelFontSize = 24;
  const assetTitleFontSize = 18;

  const padding = 16;
  const textHei = assetTitleFontSize + padding / 4;
  const itemHei = 128;

  // measures the width of images & text

  const measureCtx = new Canvas(1, 1).getContext("2d");

  const assetTitleFont = `400 ${assetTitleFontSize}px gg-sans`;
  measureCtx.font = assetTitleFont;

  const imageMap = new Map<string, any>();
  const imageWidths = new Map<string, number>();
  const files = entries
    .map(([_, changes]) => changes.map((row) => row.map((x: any) => x.file)))
    .flat(2)
    .filter((x, i, a) => x && a.indexOf(x) === i);

  for (const file of files) {
    const img = await loadImage(file);
    imageMap.set(file, img);

    const mult = itemHei / img.height;
    imageWidths.set(file, img.width * mult);
  }

  const textMeasurements = new Array<number>();
  const textWidthMap = new Map<string, number>();

  for (const [_, changes] of entries) {
    for (const row of changes) {
      let rowLen = 0;
      for (const text of row) {
        const m = measureCtx.measureText(text.label).width;
        const wid = text.file ? Math.max(m, imageWidths.get(text.file)!) : m;

        rowLen += wid;
        textWidthMap.set(text.label, wid);
      }
      textMeasurements.push(rowLen + (padding * row.length - 1));
    }
  }

  const widestText = Math.max(...textMeasurements);

  const canvas = new Canvas(
    Math.max(widestText + padding * 2, 100),
    entries.reduce(
      (a, [_, rows]) =>
        a +
        24 + // title
        padding / 4 +
        rows.length * (textHei + 1 + itemHei) + // title of the asset + asset image
        ((rows.length - 1) * padding) / 4 + // padding between rows
        padding * 2,
      0
    )
  );
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";

  // background
  ctx.fillStyle = colors.bgMain;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = padding,
    y = padding;
  for (const [title, changes] of entries) {
    ctx.fillStyle = colors.bgSecondary;
    ctx.beginPath();
    ctx.roundRect(
      x - padding / 2,
      y - padding / 2,
      canvas.width - padding,
      24 + padding / 2 + changes.length * (textHei + itemHei) + padding,
      12
    );
    ctx.fill();

    ctx.fillStyle = colors.textNormal;
    ctx.font = `600 ${labelFontSize}px gg-sans`;
    ctx.fillText(title, x, y);
    y += 24 + padding / 4;

    // check if every row is the same length, throw error if not
    if (!changes.every((row) => row.length === changes[0].length)) {
      throw new Error("Rows must be the same length");
    }

    const textWids = new Array<number>();
    for (let i = 0; i < changes[0].length; i++) {
      let wids = [];
      for (const row of changes) wids.push(textWidthMap.get(row[i].label)!);

      textWids[i] = Math.max(...wids);
    }

    for (let r = 0; r < changes.length; r++) {
      const row = changes[r];

      let spacing = 0;
      for (let i = 0; i < changes[0].length; i++) {
        const asset = row[i];
        const textWid = textWids[i];

        ctx.fillStyle = colors.textNormal;
        ctx.font = assetTitleFont;
        ctx.fillText(asset.label, x + spacing, y);

        const midX = textWid > textWid ? x - textWid / 2 + textWid / 2 : x;

        if (asset.color) {
          ctx.fillStyle = asset.color;
          ctx.beginPath();
          ctx.arc(
            midX + spacing + itemHei / 2,
            y + 3 + textHei + itemHei / 2,
            itemHei / 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
        } else if (asset.file) {
          ctx.drawImage(
            imageMap.get(asset.file)!,
            midX + spacing,
            y + 3 + textHei,
            imageWidths.get(asset.file)!,
            itemHei
          );
        }

        spacing += textWid + padding;
      }

      y += textHei + 1 + itemHei;
      if (r !== changes.length - 1) y += padding / 4;
    }

    y += padding * 2;
  }

  // watermark :3
  ctx.font = `500 ${padding / 2}px gg-sans`;
  const watermarkText = "Themelings";
  const watermarkTextWidth = ctx.measureText(watermarkText).width;

  ctx.fillStyle = "#fff4";
  ctx.fillText(
    watermarkText,
    canvas.width - watermarkTextWidth - padding / 2,
    0
  );

  return canvas;
}
