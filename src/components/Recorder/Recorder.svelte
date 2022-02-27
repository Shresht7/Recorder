<script lang="ts">
    //  Components
    import RecorderContext from "./RecorderContext.svelte";
    import ControlPanel from "../ControlPanel/ControlPanel.svelte";
    import VideoPreview from "../VideoPreview/VideoPreview.svelte";
    import AudioPreview from "../../Audio/AudioPreview.svelte";
    import NotSupported from "./NotSupported.svelte";

    /** Screen Capture API are supported by the user's device */
    const screenCaptureSupported =
        typeof navigator?.mediaDevices?.getDisplayMedia === "function";

    import stream from "../../library/stream";
    let isVideoTrack: boolean = true;
    $: isVideoTrack = $stream.getVideoTracks().length > 0;
</script>

{#if screenCaptureSupported}
    <RecorderContext>
        <ControlPanel />
        {#if isVideoTrack}
            <VideoPreview />
        {:else}
            <AudioPreview />
        {/if}
    </RecorderContext>
{:else}
    <NotSupported />
{/if}
