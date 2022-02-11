<script lang="ts">
    //  Stores
    import stream from "../library/stream";
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
    </div>
{/if}

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
