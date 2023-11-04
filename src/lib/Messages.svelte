<script lang="ts">
    import { fade } from "svelte/transition";

    let messages: string[] = [];

    export const add_message = (message: string) => {
        messages.push(message);
        messages = messages;
        setTimeout(() => {
            messages.splice(0, 1);
            messages = messages;
        }, 1000);
    };
</script>

<div class="message-wrapper">
    {#each messages as message}
        <div class="message" out:fade>{message}</div>
    {/each}
</div>

<style lang="scss">
    .message-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 20px;

        position: absolute;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        padding-top: 80px;

        pointer-events: none;

        > .message {
            background-color: var(--message-color);

            font-family: sans-serif;
            font-size: 14px;
            font-weight: bold;
            text-align: center;

            width: fit-content;
            height: fit-content;
            padding: 10px 15px;
            border-radius: 5px;
            user-select: none;
        }
    }
</style>
