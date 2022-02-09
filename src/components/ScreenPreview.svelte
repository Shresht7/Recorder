<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";

    let videoElement: HTMLVideoElement;

    $: if (videoElement) videoElement.srcObject = $stream;

    /** Select Screen */
    function selectScreen() {
        stream.selectScreen();
    }

    /** Start Display Capture */
    function startCapture() {}

    /** Stop Display Capture */
    function stopCapture() {
        const tracks = $stream.getTracks();
        tracks.forEach((track) => track.stop());
        stream.clear();
    }
</script>

<div>
    <video
        id="preview-video"
        bind:this={videoElement}
        autoplay
        muted
        height={600}
        width={800}
    />

    <div>
        {#if $stream}
            <p>{$stream.id}</p>
        {:else}
            <Button on:click={selectScreen}>Select Screen</Button>
        {/if}
        <Button on:click={startCapture}>Start</Button>
        <Button on:click={stopCapture}>Stop</Button>
    </div>
</div>

<style>
</style>
