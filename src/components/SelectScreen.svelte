<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";

    /** Begin capturing the stream */
    function startCapture() {
        stream.start("SCREEN");
    }
</script>

<div>
    <Button
        icon="desktop"
        size="5rem"
        primary={false}
        square
        on:click={startCapture}
    >
        Select Screen
    </Button>
    <Button
        icon="desktop"
        size="5rem"
        primary={false}
        square
        on:click={() => stream.start("AUDIO", { audio: true })}
    >
        Record Audio
    </Button>
    <Button
        icon="desktop"
        size="5rem"
        primary={false}
        square
        on:click={() => stream.start("AUDIO", { audio: true })}
    >
        Converter
    </Button>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 70vw;
        gap: 5rem;
    }
</style>
