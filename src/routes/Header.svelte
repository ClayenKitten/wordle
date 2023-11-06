<script>
    import H1 from "$lib/H1.svelte";
    import Icon from "$lib/Icon.svelte";
</script>

<header>
    <div class="spacer" />
    <h1>WordleSvelte</h1>
    <menu>
        <button><Icon name="chart" /></button>
        <button><Icon name="gear" /></button>
    </menu>
</header>

<style lang="scss">
    $cutoff-point: 600px;
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding: 20px 0;
        @media (max-width: $cutoff-point) {
            padding: 10px 0;
            --icon-size: 28px;
        }
        > .spacer {
            flex: 1 0 100px;
            @media (max-width: $cutoff-point) {
                flex: 0 0 5px;
            }
        }
        > h1 {
            color: var(--text-color);
            margin: 0;
            text-align: center;
            font-size: 28px;
            font-family: sans-serif;
            @media (max-width: $cutoff-point) {
                font-size: 24px;
            }
        }
        > menu {
            box-sizing: border-box;
            display: flex;
            justify-content: end;
            flex: 1 0 100px;
            margin: 0;
            padding: 0 20px 0 0;
            gap: 20px;
            > button {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                border: 0;
            }
            @media (max-width: $cutoff-point) {
                gap: 10px;
                padding: 0 5px 0 0;
            }
        }
    }
</style>
