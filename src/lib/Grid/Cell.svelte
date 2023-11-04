<script lang="ts">
    import type { GridCell } from "$lib";

    export let cell: GridCell | undefined;

    $: className = cell ? (cell.highlight ? `cell ${cell.highlight}` : "cell") : "cell";
</script>

<div class={className}>
    {#if cell}
        {cell.char}
    {/if}
</div>

<style lang="scss">
    .cell {
        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        border: 2px solid var(--border-color);
        color: var(--text-color);
        font-family: sans-serif;
        font-size: 25px;
        font-weight: bold;

        &.correct {
            border-color: var(--correct-color);
            background-color: var(--correct-color);
        }
        &.missed {
            border-color: var(--miss-color);
            background-color: var(--miss-color);
        }
        &.wrong {
            border-color: var(--wrong-color);
            background-color: var(--wrong-color);
        }
    }
</style>
