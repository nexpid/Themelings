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
				cur: "c6f6357fb999cba134e6b35b08500c30",
				curFile: "src/canvas/mock/FirstMockIcon.png",
			},
		],
		[
			"SvgMockIcon",
			{
				change: DiffEnum.Added,
				cur: "5d534560e865f1f5b8d7258f9c262bc3",
				curFile: "src/canvas/mock/SvgMockIcon.svg",
			},
		],
		[
			"LottieMockIcon",
			{
				change: DiffEnum.Added,
				cur: "340efc5291ffb230a20a2b8be8bc444f",
				curFile: "src/canvas/mock/LottieMockIcon.lottie",
			},
		],
		[
			"SecondMockIcon",
			{
				change: DiffEnum.Changed,
				old: "6e23574440797ff3e6abd5754795fd4c",
				oldFile: "src/canvas/mock/SecondMockIcon.png",
				cur: "76ffeecde2194d0448f1c1e942eb4595",
				curFile: "src/canvas/mock/SecondMockIconNew.png",
			},
		],
		[
			"ThirdMockIcon",
			{
				change: DiffEnum.Renamed,
				old: "thirdmkocicon",
				cur: "5bff32bf603e438af5f02350b6d0527e",
				curFile: "src/canvas/mock/ThirdMockIcon.png",
			},
		],
		[
			"FourthMockIcon",
			{
				change: DiffEnum.Removed,
				old: "cf4e13406bca0989d46c0f07ced94850",
				oldFile: "src/canvas/mock/FourthMockIcon.png",
			},
		],
	]),
	code: new Map([
		[
			"app/foomodule.tsx",
			{
				change: DiffEnum.Added,
				size: "5 KB",
			},
		],
		[
			"app/ui/barmodule.ts",
			{
				change: DiffEnum.Renamed,
				oldFile: "app/ui/barmodule.ts",
				size: "8 KB",
			},
		],
		[
			"app/intl/ReallyBigCoolComponent.tsx",
			{
				change: DiffEnum.Removed,
				size: "12 MB",
			},
		],
	]),
} satisfies OutDiffs;
