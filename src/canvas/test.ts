import draw, { convertDiffs } from ".";
import mock from "../mock";

await Bun.write(
  "src/files.png",
  await (await draw(convertDiffs(mock.icons))).toBuffer("png")
);
await Bun.write(
  "src/colors.png",
  await (await draw(convertDiffs(mock.semantic, true))).toBuffer("png")
);
