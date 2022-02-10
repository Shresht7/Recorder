<script lang="ts">
    //  Stores
    import stream from "../library/stream";

    /** Preview Video Element */
    let videoElement: HTMLVideoElement;

    //  Update the videoElement srcObject whenever the stream changes
    $: if (videoElement) videoElement.srcObject = $stream;
</script>

<div class="video-container">
    {#if $stream}
        <video
            bind:this={videoElement}
            autoplay
            muted
            height={450}
            width={800}
        />
    {/if}
</div>

<style>
    .video-container {
        height: 450px;
        width: 800px;
        background-color: gray;
    }
</style>
