import { DiffEnum, type OutDiffs } from "./types";

const randomColor = () =>
	`#${Math.floor(Math.random() * 0xffffff)
		.toString(16)
		.padStart(6, "0")}`;

// mock data for "bun run update:mock" and "bun run canvas:test"
export default {
	semantic: new Map([
		...new Array(5).fill(0).map(
			(_, i) =>
				[
					`MOCK_SEMANTIC_SAMPLE_${i + 1}`,
					{
						change: DiffEnum.Added,
						cur: randomColor(),
					},
				] as any,
		),
		...new Array(5).fill(0).map(
			(_, i) =>
				[
					`MOCK_SEMANTIC_SAMPLE_${i + 6}`,
					{
						change: DiffEnum.Changed,
						old: randomColor(),
						cur: randomColor(),
					},
				] as any,
		),
		...new Array(5).fill(0).map(
			(_, i) =>
				[
					`MOCK_SEMANTIC_SAMPLE_${i + 11}`,
					{
						change: DiffEnum.Renamed,
						old: `mock_samentic_sample_${i + 11}`,
						cur: randomColor(),
					},
				] as any,
		),
		...new Array(5).fill(0).map(
			(_, i) =>
				[
					`MOCK_SEMANTIC_SAMPLE_${i + 16}`,
					{
						change: DiffEnum.Removed,
						old: randomColor(),
					},
				] as any,
		),
	]),
	raw: undefined,
	icons: new Map([
		[
			"FirstMockIcon",
			{
				change: DiffEnum.Added,
				cur: "f5c8d004a4aceda10702085d42ca9bfb",
				curFile: "src/canvas/mock/FirstMockIcon.png",
			},
		],
		[
			"SecondMockIcon",
			{
				change: DiffEnum.Changed,
				old: "fd01bc455648ec9d7cc7b70c716cb853",
				oldFile: "src/canvas/mock/SecondMockIcon.png",
				cur: "0157c625a59e6f088574e7d151fccb0a",
				curFile: "src/canvas/mock/SecondMockIconNew.png",
			},
		],
		[
			"ThirdMockIcon",
			{
				change: DiffEnum.Renamed,
				old: "thirdmkocicon",
				cur: "5da7992ea9001c68e29f87246473f76d",
				curFile: "src/canvas/mock/ThirdMockIcon.png",
			},
		],
		[
			"FourthMockIcon",
			{
				change: DiffEnum.Removed,
				old: "9bb11d106f9c2568b482caa74c43baed",
				oldFile: "src/canvas/mock/FourthMockIcon.png",
			},
		],
	]),
	code: new Map([
		[
			"app/skibidimodule.tsx",
			{
				change: DiffEnum.Added,
				size: "5 KB",
			},
		],
		[
			"app/hawktuah.js",
			{
				change: DiffEnum.Changed,
				sizeDiff: "-2 KB",
			},
		],
		[
			"app/ui/TypoedFile.ts",
			{
				change: DiffEnum.Renamed,
				oldFile: "app/ui/TypodeFile.ts",
				size: "8 KB",
			},
		],
		[
			"app/ui/ReallyBigCoolComponent.tsx",
			{
				change: DiffEnum.Removed,
				size: "12 MB",
			},
		],
	]),
} satisfies OutDiffs;
