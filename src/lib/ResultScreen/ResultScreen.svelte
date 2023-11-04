<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import WordGrid from "../Grid/WordGrid.svelte";
    import type { GameResult, GridCell } from "$lib";
    import { GameState } from "$lib/state";
    import TheAnswerWas from "./TheAnswerWas.svelte";
    import H1 from "../H1.svelte";
    import type { Statistics } from "$lib/statistics";

    export let cells: GridCell[];
    export let answer: string;
    export let result: GameResult;
    export let stats: Statistics;

    let dispatch = createEventDispatcher<{ try_again: undefined }>();

    const size = { row: GameState.attemptNumber, col: GameState.wordSize };
    let hide_letters = true;

    const keydown = (e: KeyboardEvent) => {
        if (e.repeat) return;
        if (e.key == " ") hide_letters = !hide_letters;
    };
</script>

<svelte:window on:keypress={keydown} />

<dialog class="modal">
    <div>
        <H1>
            {#if result == "lost"}
                Maybe another time!
            {:else}
                Success!
            {/if}
        </H1>
        <div class="stats">
            <div>
                <b>{stats.played}</b>
                <span>Played</span>
            </div>
            <div>
                <b>{stats.win_percent}</b>
                <span>Win %</span>
            </div>
            <div>
                <b>{stats.current_streak}</b>
                <span>Current Streak</span>
            </div>
            <div>
                <b>{stats.max_streak}</b>
                <span>Max Streak</span>
            </div>
        </div>
        <WordGrid {cells} {size} {hide_letters} on:click={() => (hide_letters = !hide_letters)} />
        {#if result == "lost"}
            <TheAnswerWas {answer} />
        {/if}
        <div class="buttons">
            <button on:click={() => dispatch("try_again")}>New Game</button>
        </div>
    </div>
</dialog>

<style lang="scss">
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;

        background-color: var(--background-color);

        > div {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            width: min(100vw, 400px);
            color: var(--text-color);
            gap: 40px;
            > .stats {
                display: flex;
                gap: 20px;
                > div {
                    flex: 1 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                    > b {
                        display: block;
                        font-family: sans-serif;
                        font-size: 40px;
                    }
                    > span {
                        display: block;
                        font-family: sans-serif;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
            > .buttons {
                display: flex;
                height: 40px;
                gap: 30px;
                padding: 0 20px;
                > button {
                    flex: 1;
                    color: var(--text-color);
                    background-color: var(--correct-color);
                    border: 0;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
</style>
