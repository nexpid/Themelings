export enum DiffType {
	Added,
	Changed,
	Renamed,
	Removed,
}

export type Diff =
	| {
			type: DiffType.Added | DiffType.Removed;
			source: string;
			label?: string;
	  }
	| {
			type: DiffType.Changed;
			source: string;
			label?: string;
			oldSource: string;
			oldLabel?: string;
	  }
	| {
			type: DiffType.Renamed;
			oldName: string;
			source: string;
	  };

export type CodeDiff =
	| {
			type: DiffType.Added | DiffType.Removed;
			size: number;
	  }
	| {
			type: DiffType.Renamed;
			oldName: string;
			size: number;
	  };

export type Differs = Record<"semantic" | "raw" | "icons", Map<string, Diff> | undefined> & {
	code: Map<string, CodeDiff> | undefined;
};

export type RawColors = Record<string, string>;

export type Icons = Record<
	string,
	{
		file: string;
		hash: string;
		scales: number[];
		width: number | null;
		height: number | null;
	}
>;

export type Semantic = Record<string, [string, { raw: string; opacity: number }]>;
export type SemanticColors = Record<string, Semantic>;
