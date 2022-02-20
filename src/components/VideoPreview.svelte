<script lang="ts">
    //  Stores
    import stream from "../library/stream";
    import { countdown } from "../library/recording";
    import download from "../library/download";

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
</script>

{#if $stream}
    <div>
        <video
            bind:this={videoElement}
            controls={$download.visible}
            autoplay
            muted
            width="100%"
        />
        <div class="countdown-backdrop" class:hide={$countdown < 1} />
        <div class="countdown" class:hide={$countdown < 1}>
            {$countdown}
        </div>
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

    .hide {
        display: none;
    }
</style>
