<script lang="ts">
    import type { HighlightKind, KeyboardKey } from "$lib";
    import { createEventDispatcher } from "svelte";

    export let key: KeyboardKey;
    export let highlight: HighlightKind | undefined;

    const dispatch = createEventDispatcher<{ insert: string }>();

    function on_click() {
        dispatch("insert", key.char);
    }
</script>

<button class={highlight ? highlight : ""} on:click={on_click}>{key.char}</button>

<style lang="scss">
    button {
        flex: 0 1 43px;
        @media (max-width: 500px) {
            flex: 1 1 43px;
        }

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
