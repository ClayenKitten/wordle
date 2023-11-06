<script lang="ts">
    export let name: "chart" | "gear";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src={`icons/${name}.svg`} />

<style lang="scss">
    img {
        filter: invert(1);
        height: var(--icon-size, 32px);
        width: var(--icon-size, 32px);
    }
</style>
