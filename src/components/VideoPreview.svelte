<script lang="ts">
    //  Stores
    import stream from "../library/stream";
    import { state, countdown } from "../library/recording";
    import download from "../library/download";

    /** Preview Video Element */
    let videoElement: HTMLVideoElement;
    let canvasElement: HTMLCanvasElement;
    let downloadElement: HTMLAnchorElement;

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

    function takePicture() {
        const context = canvasElement.getContext("2d");
        context.drawImage(
            videoElement,
            0,
            0,
            videoElement.videoWidth,
            videoElement.videoHeight
        );
        const data = canvasElement.toDataURL("image/png");
        downloadElement.setAttribute("href", data);
        downloadElement.click();
    }

    function resizeCanvas() {
        canvasElement.setAttribute("height", videoElement.videoHeight + "px");
        canvasElement.setAttribute("width", videoElement.videoWidth + "px");
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

        <canvas bind:this={canvasElement} />
        <a href="_" download="screenshot.png" bind:this={downloadElement}>
            Screenshot
        </a>

        <!-- COUNTDOWN -->
        {#if $countdown > 0}
            <div class="countdown-backdrop" />
            <div class="countdown">{$countdown}</div>
        {/if}
    </div>
{/if}

<style>
    div {
        flex-grow: 1;
        max-width: 70vw;
        max-height: 75vh;
        display: grid;
        place-content: center;
        position: relative;
        padding: 0 1rem;
    }

    video {
        border-radius: 5px;
        box-shadow: 5px 5px 15px 15px rgba(0, 0, 0, 0.25);
    }

    canvas {
        display: none;
    }

    a {
        display: none;
    }

    .countdown {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        color: var(--clr-text);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
    }

    .countdown-backdrop {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--clr-background);
        opacity: 0.5;
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        z-index: 1;
    }
</style>
