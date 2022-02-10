<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";

    /** Start Display Capture */
    function startCapture() {
        stream.start();
    }

    /** Stop Display Capture */
    function stopCapture() {
        const tracks = $stream.getTracks();
        tracks.forEach((track) => track.stop());
        stream.stop();
    }
</script>

<div>
    <Button on:click={startCapture}>Select Screen</Button>
    <Button on:click={stopCapture}>Reset</Button>
</div>

<style>
</style>
