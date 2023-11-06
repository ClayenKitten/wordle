<script lang="ts">
    import type { Statistics } from "$lib/statistics";

    export let stats: Statistics;
</script>

<div class="stats">
    <div>
        <b>{stats.played}</b>
        <span>Played</span>
    </div>
    <div>
        <b>{stats.win_percent}</b>
        <span>Win %</span>
    </div>
    <div>
        <b>{stats.current_streak}</b>
        <span>Current Streak</span>
    </div>
    <div>
        <b>{stats.max_streak}</b>
        <span>Max Streak</span>
    </div>
</div>

<style lang="scss">
    .stats {
        display: flex;
        gap: 10px;
        > div {
            flex: 1 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            > b {
                display: block;
                font-family: sans-serif;
                font-size: 40px;
            }
            > span {
                display: block;
                font-family: sans-serif;
                font-size: 14px;
                text-align: center;
            }
        }
    }
</style>
