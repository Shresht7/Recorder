<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";

    /** Start Display Capture */
    function startCapture() {
        stream.start();
    }
</script>

<Button on:click={startCapture}>Select Screen</Button>
