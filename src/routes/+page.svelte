<script lang="ts">
    import { GameState } from "$lib/state";
    import Keyboard from "$lib/Keyboard/Keyboard.svelte";
    import WordGrid from "$lib/Grid/WordGrid.svelte";
    import type { PageData } from "./$types";
    import Messages from "$lib/Messages.svelte";
    import ResultScreen from "$lib/ResultScreen/ResultScreen.svelte";
    import H1 from "$lib/H1.svelte";
    import { Statistics } from "$lib/statistics";

    export let data: PageData;

    let state = new GameState(data.word_list, data.answer_list);
    let stats = new Statistics();

    $: cells = state.cells;
    $: highlights = state.highlights;
    $: result = state.result;

    $: if ($result !== undefined) {
        stats.add_result($result);
        stats = stats;
    }

    let add_message: ((message: string) => void) | undefined;

    const confirm = () => {
        let result = state.confirm();
        if (result == "ok" || result == "completed") return;
        if (add_message) {
            if (result == "not_in_list") {
                add_message("Not in word list");
            } else if (result == "not_enough_letters") {
                add_message("Not enough letters");
            }
        }
    };

    const try_again = () => {
        add_message = undefined;
        state = new GameState(data.word_list, data.answer_list);
    };

    const size = { row: GameState.attemptNumber, col: GameState.wordSize };
</script>

<div id="wrapper">
    {#if $result}
        <ResultScreen
            result={$result}
            cells={$cells}
            answer={state.answer}
            {stats}
            on:try_again={try_again}
        />
    {:else}
        <header>
            <H1>WordleSvelte</H1>
        </header>
        <main>
            <WordGrid cells={$cells} {size} />
            <Keyboard
                highlights={$highlights}
                on:insert={e => state.insert(e.detail)}
                on:confirm={confirm}
                on:backspace={() => state.backspace()}
            />
        </main>
        <Messages bind:add_message />
    {/if}
</div>

<style lang="scss">
    :root {
        --section-spacing: 50px;

        --text-color: white;
        --background-color: #121213;
        --border-color: #3a3a3c;
        --keyboard-color: #818384;
        --message-color: white;

        --correct-color: #538d4e;
        --miss-color: #b59f3b;
        --wrong-color: #3a3a3c;
    }
    #wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--section-spacing);
    }
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding: 20px 0;
    }
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: var(--section-spacing);
    }
    :global(body) {
        width: 100vw;
        height: 100vh;
        background-color: var(--background-color);
        margin: 0;
        padding: 0;
    }
</style>
