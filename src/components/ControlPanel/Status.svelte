<script lang="ts">
    //  Library
    import { format } from "../../helpers";

    //  Components
    import Icon from "../utility/Icon.svelte";

    //  Stores
    import { state } from "../../library/recording";
    import timer from "../../library/timer";
</script>

<div>
    {#if $state === "recording"}
        <Icon name="record" color="red" />
    {/if}

    {#if $state === "paused"}
        <Icon name="pause" />
    {/if}

    <p>{format($timer)}</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.25ch;
        z-index: 10;
    }
</style>
