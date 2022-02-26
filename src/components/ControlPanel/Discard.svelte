<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";

    //  Stores
    import stream from "../../library/stream";
    import download from "../../library/download";

    /** Stop Display Capture */
    function stopCapture() {
        $stream.getTracks().forEach((track) => track.stop());
        stream.stop();
        URL.revokeObjectURL($download.href);
        download.clear();
    }
</script>

{#if $download.visible}
    <Button primary={false} icon="discard" on:click={stopCapture}>
        Discard
    </Button>
{:else}
    <Button primary={false} icon="reset" on:click={stopCapture}>Reset</Button>
{/if}
