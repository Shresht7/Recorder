<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";
    import download from "../library/download";

    /** Stop Display Capture */
    function stopCapture() {
        const tracks = $stream.getTracks();
        tracks.forEach((track) => track.stop());
        stream.stop();
        download.clearDownload();
    }
</script>

<Button primary={false} on:click={stopCapture}>
    {#if $download.visible}
        Discard
    {:else}
        Reset
    {/if}
</Button>
