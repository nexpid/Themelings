export enum DiffEnum {
  Added,
  Changed,
  Removed,
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
      change: DiffEnum.Removed;
      old: string;
      oldFile?: string;
    };

export type OutDiffs = Record<
  "semantic" | "raw" | "icons" | "code",
  Map<string, Diff> | undefined
>;
