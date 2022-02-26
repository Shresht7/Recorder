<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";
    import Download from "./Download.svelte";

    //  Stores
    import { state } from "../../library/recording";
    import download from "../../library/download";

    //  Context
    import { getContext } from "svelte";

    const { startRecording, continueRecording, pauseRecording, stopRecording } =
        getContext("recorder");
</script>

<div>
    {#if $state === "" || ($state === "inactive" && !$download.visible)}
        <Button on:click={startRecording} icon="record">Record</Button>
    {/if}

    {#if $state === "paused"}
        <Button on:click={continueRecording} icon="continue">Continue</Button>
        <Button on:click={stopRecording} icon="stop">Stop</Button>
    {/if}

    {#if $state === "recording"}
        <Button on:click={pauseRecording} icon="pause">Pause</Button>
        <Button on:click={stopRecording} icon="stop">Stop</Button>
    {/if}

    <Download {...$download} />
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
