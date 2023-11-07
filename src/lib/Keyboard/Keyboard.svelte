<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import KeyboardKey from "./KeyboardKey.svelte";
    import type { HighlightKind } from "$lib";

    export let highlights: Map<string, HighlightKind>;

    const dispatch = createEventDispatcher<{
        confirm: undefined;
        backspace: undefined;
        insert: string;
    }>();
    let self: HTMLElement;

    const confirm = () => dispatch("confirm");
    const backspace = () => dispatch("backspace");
    const insert = (event: CustomEvent<string>) => {
        dispatch("insert", event.detail);
    };

    const keydown = (event: KeyboardEvent) => {
        if (is_ascii_letter(event.key)) {
            dispatch("insert", event.key.toUpperCase());
        } else if (event.key == "Enter") {
            event.preventDefault();
            dispatch("confirm");
        } else if (event.key === "Backspace") {
            dispatch("backspace");
        }
    };

    function is_ascii_letter(s: string): boolean {
        return /^[a-zA-Z]$/.test(s);
    }
</script>

<svelte:window on:keydown={keydown} />

<div id="keyboard" bind:this={self}>
    <div class="row">
        {#each "QWERTYUIOP" as char}
            <KeyboardKey highlight={highlights.get(char)} key={{ char }} on:insert={insert} />
        {/each}
    </div>
    <div class="row">
        {#each "ASDFGHJKL" as char}
            <KeyboardKey highlight={highlights.get(char)} key={{ char }} on:insert={insert} />
        {/each}
    </div>
    <div class="row">
        <button id="enter-key" on:click={confirm}>Enter</button>
        {#each "ZXCVBNM" as char}
            <KeyboardKey highlight={highlights.get(char)} key={{ char }} on:insert={insert} />
        {/each}
        <button id="delete-key" on:click={backspace}>{"\u232B"}</button>
    </div>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
        margin: 0;

        > .row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 6px;
        }

        #enter-key {
            font-size: 16px;
        }
        #enter-key,
        #delete-key {
            flex: 0 1 65px;
        }

        :global(button) {
            background-color: var(--keyboard-color);
            color: var(--text-color);
            height: 58px;
            font-size: 18px;
            font-weight: bold;
            border: 0;
            padding: 0;
            border-radius: 5px;
        }
    }
</style>
