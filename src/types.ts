export enum DiffEnum {
	Added = 0,
	Changed = 1,
	Renamed = 2,
	Removed = 3,
}

export type Diff =
	| {
			change: DiffEnum.Added;
			cur: string;
			curFile?: string;
	  }
	| {
			change: DiffEnum.Changed;
			old: string;
			oldFile?: string;
			cur: string;
			curFile?: string;
	  }
	| {
			change: DiffEnum.Renamed;
			old: string;
			cur: string;
			curFile?: string;
	  }
	| {
			change: DiffEnum.Removed;
			old: string;
			oldFile?: string;
	  };

export type CodeDiff =
	| {
			change: DiffEnum.Added;
			size: string;
	  }
	| {
			change: DiffEnum.Changed;
			sizeDiff: string;
	  }
	| {
			change: DiffEnum.Renamed;
			oldFile: string;
			size: string;
	  }
	| {
			change: DiffEnum.Removed;
			size: string;
	  };

export type OutDiffs = Record<
	"semantic" | "raw" | "icons",
	Map<string, Diff> | undefined
> & {
	code: Map<string, CodeDiff> | undefined;
};

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

export type SemanticColors = Record<
	string,
	Record<string, [string, { raw: string; opacity: number }]>
>;
