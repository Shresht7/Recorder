<script lang="ts">
    //  Stores
    import stream from "../library/stream";

    /** Preview Video Element */
    let videoElement: HTMLVideoElement;

    //  Update the videoElement srcObject whenever the stream changes
    $: if (videoElement) videoElement.srcObject = $stream;
</script>

{#if $stream}
    <div>
        <video bind:this={videoElement} autoplay muted width="100%" />
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
