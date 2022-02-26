<script lang="ts">
    //  Components
    import Countdown from "./Countdown.svelte";
    import Canvas from "./Canvas.svelte";

    //  Stores
    import stream from "../../library/stream";
    import download from "../../library/download";

    /** Preview Video Element */
    let videoElement: HTMLVideoElement;

    //  Update the videoElement srcObject whenever the stream changes
    $: if (videoElement) {
        if ($download.href) {
            videoElement.srcObject = null;
            videoElement.src = $download.href;
        } else {
            videoElement.src = "";
            videoElement.srcObject = $stream;
        }
    }

    /** Screenshot-Capturer Canvas Props */
    let canvasProps = {
        width: 0,
        height: 0,
        src: undefined,
    };

    /** Sets the src attribute for Canvas-Props */
    function takePicture() {
        canvasProps = {
            ...canvasProps,
            src: videoElement,
        };
    }

    /** Sets the width and height of the Canvas-Props */
    function resizeCanvas() {
        canvasProps = {
            ...canvasProps,
            width: videoElement.videoWidth,
            height: videoElement.videoHeight,
        };
    }
</script>

{#if $stream}
    <div>
        <!-- VIDEO PREVIEW -->
        <video
            bind:this={videoElement}
            controls={$download.visible}
            on:loadeddata={resizeCanvas}
            on:click|preventDefault={takePicture}
            autoplay
            muted
            width="100%"
        />

        <!-- SCREENSHOT CANVAS -->
        <Canvas {...canvasProps} />

        <!-- COUNTDOWN -->
        <Countdown />
    </div>
{/if}

<style>
    div {
        flex-grow: 1;
        max-width: 100vmin;
        display: grid;
        place-content: center;
        position: relative;
        padding: 0 1rem;
    }

    video {
        border-radius: 5px;
        box-shadow: 5px 5px 15px 15px rgba(0, 0, 0, 0.25);
    }
</style>
