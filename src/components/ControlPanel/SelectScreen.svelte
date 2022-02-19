<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";

    //  Stores
    import stream from "../../library/stream";

    /** Begin capturing the stream */
    function startCapture() {
        stream.start();
    }
</script>

<Button
    icon="desktop"
    size="5rem"
    primary={false}
    square
    on:click={startCapture}
>
    Select Screen
</Button>
