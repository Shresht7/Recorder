<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";

    /** Stop Display Capture */
    function stopCapture() {
        const tracks = $stream.getTracks();
        tracks.forEach((track) => track.stop());
        stream.stop();
    }
</script>

<Button on:click={stopCapture}>Discard</Button>
