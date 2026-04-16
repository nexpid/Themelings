import Color from "color";
import { type CodeDiff, type Diff, type Differs, DiffType } from "./types";

const randomColor = () =>
	`#${Math.floor(Math.random() * 0xffffff)
		.toString(16)
		.padStart(6, "0")}`;
const randomColors = () => {
	const base = Color(randomColor());
	return [
		base.lighten(0.6).hex(),
		base.desaturate(0.3).darken(0.5).hex(),
		base.darken(0.6).hex(),
		base.darken(0.8).hex(),
	].join(",");
};

// mock data for "bun run update:mock" and "bun run canvas:test"
export default {
	semantic: new Map<string, Diff>([
		...Array.from({ length: 5 }).map((_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 1}`,
			{
				type: DiffType.Added,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
			} as Diff,
		]),
		...Array.from({ length: 5 }).map((_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 6}`,
			{
				type: DiffType.Changed,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
				oldSource: randomColors(),
				oldLabel: "☀️ #888888, 🌙 #999999",
			} as Diff,
		]),
		...Array.from({ length: 5 }).map((_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 11}`,
			{
				type: DiffType.Renamed,
				oldName: `mock_samentic_sample_${i + 11}`,
				source: randomColors(),
			} as Diff,
		]),
		...Array.from({ length: 5 }).map((_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 16}`,
			{
				type: DiffType.Removed,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
			} as Diff,
		]),
	] as [string, Diff][]),
	raw: new Map(),
	icons: new Map([
		[
			"FirstMockIcon",
			{
				type: DiffType.Added,
				source: "src/canvas/mock/FirstMockIcon.png",
				label: "c6f6357f",
			} as Diff,
		],
		[
			"SvgMockIcon",
			{
				type: DiffType.Added,
				source: "src/canvas/mock/SvgMockIcon.svg",
				label: "5d534560",
			} as Diff,
		],
		[
			"LottieMockIcon",
			{
				type: DiffType.Added,
				source: "src/canvas/mock/LottieMockIcon.lottie",
				label: "340efc52",
			} as Diff,
		],
		[
			"SecondMockIcon",
			{
				type: DiffType.Changed,
				source: "src/canvas/mock/SecondMockIconNew.png",
				label: "76ffeecd",
				oldSource: "src/canvas/mock/SecondMockIcon.png",
				oldLabel: "6e235744",
			} as Diff,
		],
		[
			"ThirdMockIcon",
			{
				type: DiffType.Renamed,
				oldName: "thirdmkocicon",
				source: "src/canvas/mock/ThirdMockIcon.png",
			} as Diff,
		],
		[
			"FourthMockIcon",
			{
				type: DiffType.Removed,
				source: "src/canvas/mock/FourthMockIcon.png",
				label: "cf4e1340",
			} as Diff,
		],
	]),
	code: new Map([
		[
			"app/foomodule.tsx",
			{
				type: DiffType.Added,
				lines: 5123,
			} as CodeDiff,
		],
		[
			"app/common/CardComponent.tsx",
			{
				type: DiffType.Changed,
				diff: -82,
			} as CodeDiff,
		],
		[
			"app/common/SectionComponent.tsx",
			{
				type: DiffType.Changed,
				diff: 83,
			} as CodeDiff,
		],
		[
			"app/ui/barmodule.ts",
			{
				type: DiffType.Renamed,
				oldName: "app/legacy/ui/bar_module.ts",
				lines: 8012,
			} as CodeDiff,
		],
		[
			"app/intl/ReallyBigCoolComponent.tsx",
			{
				type: DiffType.Removed,
				lines: 456,
			} as CodeDiff,
		],
	]),
} satisfies Differs;
