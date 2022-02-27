<script lang="ts">
    //  Components
    import Button from "./utility/BigButton.svelte";

    //  Stores
    import stream from "../library/stream";
</script>

<div>
    <!-- RECORD STREAM -->
    <Button
        icon="desktop"
        on:click={() => stream.start("SCREEN", { video: true, audio: true })}
    >
        Record Screen
    </Button>

    <!-- RECORD WEBCAM -->
    <Button
        icon="camera"
        on:click={() => stream.start("WEBCAM", { video: true, audio: true })}
    >
        Record Webcam
    </Button>

    <!-- RECORD AUDIO -->
    <Button icon="mic" on:click={() => stream.start("AUDIO", { audio: true })}>
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
