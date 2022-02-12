<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";
    import Icon from "../utility/Icons.svelte";

    //  Stores
    import stream from "../../library/stream";
    import download from "../../library/download";

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
        <Icon name="discard" primary={false} />
        Discard
    {:else}
        <Icon name="reset" primary={false} />
        Reset
    {/if}
</Button>
