<script lang="ts">
    import type { GridCell } from "$lib";
    import { GameState } from "$lib/state";
    import WordGrid from "$lib/Grid/WordGrid.svelte";
    import H1 from "../H1.svelte";

    export let answer: string;
    let cells: GridCell[];
    $: cells = [
        { char: answer.at(0)!, highlight: "correct" },
        { char: answer.at(1)!, highlight: "correct" },
        { char: answer.at(2)!, highlight: "correct" },
        { char: answer.at(3)!, highlight: "correct" },
        { char: answer.at(4)!, highlight: "correct" }
    ];
</script>

<section>
    <H1>The answer was:</H1>
    <WordGrid {cells} size={{ row: 1, col: GameState.wordSize }} />
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>
