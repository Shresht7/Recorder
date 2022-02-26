<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";
</script>

<div>
    <Button
        icon="desktop"
        size="5rem"
        primary={false}
        square
        on:click={() => stream.start("SCREEN", { video: true, audio: true })}
    >
        Record Screen
    </Button>
    <Button
        icon="camera"
        size="5rem"
        primary={false}
        square
        on:click={() => stream.start("WEBCAM", { video: true, audio: true })}
    >
        Record Webcam
    </Button>
    <Button
        icon="mic"
        size="5rem"
        primary={false}
        square
        on:click={() => stream.start("AUDIO", { audio: true })}
    >
        Record Audio
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
