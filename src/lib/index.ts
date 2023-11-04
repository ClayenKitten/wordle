export type GameResult = "won" | "lost";

export type GridCell = { highlight?: HighlightKind; char: string };

export type KeyboardKey = { highlight?: HighlightKind; char: string };

export type HighlightKind = "wrong" | "missed" | "correct";
