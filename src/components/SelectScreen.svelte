<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";
    import Icon from "./utility/Icons.svelte";

    //  Stores
    import stream from "../library/stream";

    /** Start Display Capture */
    function startCapture() {
        stream.start();
    }
</script>

<Button on:click={startCapture}>
    <Icon name="desktop" />
    Select Screen
</Button>
