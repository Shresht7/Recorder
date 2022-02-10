<script lang="ts">
    //  Components
    import Capture from "./Capture.svelte";
    import Record from "./Record.svelte";

    //  Store
    import stream from "../library/stream";
</script>

<div>
    <Capture />
    {#if $stream}
        <Record />
    {/if}
</div>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
