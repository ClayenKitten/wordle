import type { GameResult, GridCell, HighlightKind } from "$lib";
import { writable, type Readable, type Writable, get } from "svelte/store";

export class GameState {
    public static readonly wordSize = 5;
    public static readonly attemptNumber = 6;

    private readonly wordList: Set<string>;
    public readonly answer: string;

    private words: string[];
    private _result: Writable<GameResult | undefined> = writable(undefined);

    private _highlights: Writable<Map<string, HighlightKind>>;
    private cells_store: Writable<GridCell[]>;

    /**
     * Creates a new game.
     * @param wordList An array of the words that are considered correct.
     * @param answer Answer to the game. If not provided, a random one will be selected from the wordList.
     */
    public constructor(wordList: string[], answer?: string) {
        this.answer = (
            answer ? answer : wordList[Math.floor(Math.random() * wordList.length)]
        ).toUpperCase();
        this.wordList = new Set(wordList);
        this.words = [""];

        this._highlights = writable(new Map<string, HighlightKind>());
        this.cells_store = writable([]);
    }

    /** Returns an array that represents grid cells with corresponding highlighting. */
    public get cells(): Readable<GridCell[]> {
        return this.cells_store;
    }

    public get highlights(): Readable<Map<string, HighlightKind>> {
        return this._highlights;
    }

    public get result(): Readable<GameResult | undefined> {
        return this._result;
    }

    /**
     * Inserts a char into the grid.
     * @returns true, if insertion was successful.
     */
    public insert(char: string): boolean {
        if (this.is_completed || this.is_row_full) return false;

        this.current_row += char;
        this.cells_store.update((cells) => {
            cells.push({ char, highlight: undefined });
            return cells;
        });

        return true;
    }

    /**
     * Confirms input of the word.
     * @returns true, if confirmation was successful.
     */
    public confirm(): "ok" | "not_enough_letters" | "not_in_list" | "completed" {
        if (this.is_completed) return "completed";
        if (!this.is_row_full) return "not_enough_letters";
        if (!this.wordList.has(this.current_row.toLowerCase())) return "not_in_list";

        for (let i = 0; i < GameState.wordSize; i++) {
            let answer = this.answer[i];
            let guess = this.current_row[i];
            this.cells_store.update((cells) => {
                let cell = cells[GameState.wordSize * (this.words.length - 1) + i];
                if (answer == guess) {
                    cell.highlight = "correct";
                } else if (this.answer.includes(guess)) {
                    cell.highlight = "missed";
                } else {
                    cell.highlight = "wrong";
                }
                return cells;
            });
            this._highlights.update((highlights) => {
                if (answer == guess) {
                    highlights.set(guess, "correct");
                } else if (this.answer.includes(guess)) {
                    if (highlights.get(guess) !== "correct") {
                        highlights.set(guess, "missed");
                    }
                } else {
                    highlights.set(guess, "wrong");
                }
                return highlights;
            });
        }
        if (this.current_row === this.answer) {
            this._result.set("won");
        } else if (this.words.length === GameState.attemptNumber) {
            this._result.set("lost");
        } else {
            this.words.push("");
        }
        return "ok";
    }

    /**
     * Removes last inserted key.
     * @returns true, if deletion was successful.
     */
    public backspace(): boolean {
        if (this.is_completed || this.is_row_empty) return false;
        this.current_row = this.current_row.slice(0, -1);
        this.cells_store.update((cells) => {
            cells.pop();
            return cells;
        });
        return true;
    }

    /** Returns `true` if the game is completed. */
    private get is_completed(): boolean {
        return get(this._result) !== undefined;
    }

    /** Returns `true` if the current row is full. */
    private get is_row_full(): boolean {
        return this.current_row.length === GameState.wordSize;
    }

    /** Returns `true` if the current row is empty. */
    private get is_row_empty(): boolean {
        return this.current_row.length === 0;
    }

    /** Value of the last row. */
    private get current_row(): string {
        return this.words[this.words.length - 1];
    }

    private set current_row(value: string) {
        this.words[this.words.length - 1] = value;
    }
}
