import { DiffEnum, type OutDiffs } from "./types";

const randomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

// mock data for "bun run update:mock" and "bun run canvas:test"
export default {
  semantic: new Map([
    ...new Array(10).fill(0).map(
      (_, i) =>
        [
          `MOCK_SEMANTIC_SAMPLE_${i + 1}`,
          {
            change: DiffEnum.Added,
            cur: randomColor(),
          },
        ] as any
    ),
    ...new Array(10).fill(0).map(
      (_, i) =>
        [
          `MOCK_SEMANTIC_SAMPLE_${i + 11}`,
          {
            change: DiffEnum.Changed,
            old: randomColor(),
            cur: randomColor(),
          },
        ] as any
    ),
    ...new Array(10).fill(0).map(
      (_, i) =>
        [
          `MOCK_SEMANTIC_SAMPLE_${i + 21}`,
          {
            change: DiffEnum.Removed,
            old: randomColor(),
          },
        ] as any
    ),
  ]),
  raw: undefined,
  icons: new Map([
    [
      "FirstMockIcon",
      {
        change: DiffEnum.Added,
        cur: "a6fc9796178044928e3baf36a9c1fe36",
        curFile: "src/canvas/mock/FirstMockIcon.png",
      },
    ],
    [
      "SecondMockIcon",
      {
        change: DiffEnum.Changed,
        old: "7f4b50062477443eb64e3b91fd86f16d",
        oldFile: "src/canvas/mock/SecondMockIcon.png",
        cur: "2b11ebebd07b49ff826a2dc753b343fa",
        curFile: "src/canvas/mock/SecondMockIconNew.png",
      },
    ],
    [
      "ThirdMockIcon",
      {
        change: DiffEnum.Removed,
        old: "1fcaec06b9d64d88b62234cb3f33de39",
        oldFile: "src/canvas/mock/ThirdMockIcon.png",
      },
    ],
  ]),
  code: undefined,
} satisfies OutDiffs;
