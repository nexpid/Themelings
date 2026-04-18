import Color from "color";
import { type CodeDiff, type Diff, DiffType } from "./types";

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

const semNum = 20;

// mock data for "bun run update:mock" and "bun run canvas:test"
export default {
	semantic: new Map<string, Diff>([
		...Array.from({ length: semNum }, (_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 1}`,
			{
				type: DiffType.Added,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
			} as Diff,
		]),
		...Array.from({ length: semNum }, (_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 1 + semNum}`,
			{
				type: DiffType.Changed,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
				oldSource: randomColors(),
				oldLabel: "☀️ #888888, 🌙 #999999",
			} as Diff,
		]),
		...Array.from({ length: semNum }, (_, i) => [
			`MOCK_SEMANTIC_SAMPLE_${i + 1 + semNum * 2}`,
			{
				type: DiffType.Renamed,
				oldName: `mocked_samentic_sample_${i + 1 + semNum * 2}`,
				source: randomColors(),
			} as Diff,
		]),
		...Array.from({ length: semNum }, (_, i) => [
			`MOCK__SEMANTIC__REMOVED__SAMPLE__${i + 1 + semNum * 3}`,
			{
				type: DiffType.Removed,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
			} as Diff,
		]),
	] as [string, Diff][]),
	semanticBig: new Map<string, Diff>(
		Array.from({ length: 35 }, (_, i) => [
			`SOME_EXAMPLE_SEMANTIC_${i}`,
			{
				type: DiffType.Changed,
				source: randomColors(),
				label: "☀️ #aaaaaa, 🌙 #bbbbbb",
				oldSource: randomColors(),
				oldLabel: "☀️ #888888, 🌙 #999999",
			} as Diff,
		]),
	),
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
				size: 24782,
			} as CodeDiff,
		],
		[
			"app/ui/barmodule.ts",
			{
				type: DiffType.Renamed,
				oldName: "app/legacy/ui/bar_module.ts",
				size: 5212,
			} as CodeDiff,
		],
		[
			"app/intl/ReallyBigCoolComponent.tsx",
			{
				type: DiffType.Removed,
				size: 46532,
			} as CodeDiff,
		],
	]),
};
