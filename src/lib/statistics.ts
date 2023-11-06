import type { GameResult } from "$lib";

/** Uses local storage for persistence. */
export class Statistics {
    private games: boolean[] = [];

    /**
     * Creates new statistics entry.
     * @param createNew If set to `true`, local storage is overwriten with empty stats.
     */
    public constructor(createNew: boolean = false) {
        let item = localStorage.getItem("statistics");
        if (createNew || item == null) {
            let json = JSON.stringify([]);
            localStorage.setItem("statistics", json);
            item = json;
        }
        this.games = JSON.parse(item);
    }

    public add_result(result: GameResult) {
        this.games.push(result === "won");
        localStorage.setItem("statistics", JSON.stringify(this.games));
    }

    public get played(): number {
        return this.games.length;
    }

    public get win_percent(): number {
        return Math.round((100 * this.wins) / this.played);
    }

    private get wins(): number {
        let wins = 0;
        for (let i = 0; i < this.games.length; i++) {
            const won = this.games[i];
            if (won) wins += 1;
        }
        return wins;
    }

    public get current_streak(): number {
        let streak = 0;
        for (let i = this.games.length - 1; i >= 0; i--) {
            const won = this.games[i];
            if (won) {
                streak += 1;
            } else break;
        }
        return streak;
    }

    public get max_streak(): number {
        let max_streak = 0;
        let streak = 0;
        for (let i = 0; i < this.games.length; i++) {
            const won = this.games[i];
            if (won) {
                streak += 1;
                max_streak = Math.max(streak, max_streak);
            } else {
                streak = 0;
            }
        }
        return max_streak;
    }
}
