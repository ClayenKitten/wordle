<script lang="ts">
    import type { GridCell } from "$lib";
    import Cell from "./Cell.svelte";

    export let cells: GridCell[];
    export let size: { row: number; col: number };
    export let hide_letters: boolean = false;

    const cell = (cells: GridCell[], i: number, hide_letters: boolean): GridCell | undefined => {
        let cell = cells.at(i);
        if (cell && hide_letters) {
            return { char: "", highlight: cell.highlight };
        } else {
            return cell;
        }
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="grid" style:--row-number={size.row} style:--col-number={size.col} on:click>
    {#each { length: size.row * size.col } as _, i}
        <Cell cell={cell(cells, i, hide_letters)} />
    {/each}
</div>

<style lang="scss">
    #grid {
        display: grid;
        grid-template-columns: repeat(var(--col-number), 62px);
        grid-template-rows: repeat(var(--row-number), 62px);
        justify-content: center;
        gap: 5px;
    }
</style>
