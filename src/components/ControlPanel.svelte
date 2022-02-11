<script lang="ts">
    //  Components
    import SelectScreen from "./SelectScreen.svelte";
    import Discard from "./Discard.svelte";
    import Record from "./Record.svelte";

    //  Store
    import stream from "../library/stream";
</script>

<div>
    {#if !$stream}
        <SelectScreen />
    {:else}
        <Discard />
        <Record />
    {/if}
</div>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
    }
</style>
