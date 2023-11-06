<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import WordGrid from "../Grid/WordGrid.svelte";
    import type { GameResult, GridCell } from "$lib";
    import { GameState } from "$lib/state";
    import TheAnswerWas from "./TheAnswerWas.svelte";
    import H1 from "../H1.svelte";
    import type { Statistics } from "$lib/statistics";
    import StatisticsTrend from "./StatisticsTrend.svelte";

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
        <StatisticsTrend {stats} />
        <WordGrid {cells} {size} {hide_letters} on:click={() => (hide_letters = !hide_letters)} />
        {#if result == "lost"}
            <TheAnswerWas {answer} />
        {/if}
        <div class="buttons">
            <button on:click={() => dispatch("try_again")}>NEW GAME</button>
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
            gap: 25px;
            > .buttons {
                display: flex;
                height: 60px;
                gap: 30px;
                margin: 0 30px;
                margin-top: 20px;
                > button {
                    flex: 1;
                    box-sizing: border-box;
                    color: var(--text-color);
                    background-color: var(--background-color);
                    border: 3px white solid;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
    }
</style>
