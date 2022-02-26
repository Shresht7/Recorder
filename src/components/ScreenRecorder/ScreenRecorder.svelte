<script lang="ts">
    //  Components
    import Recorder from "../Recorder.svelte";
    import ControlPanel from "../ControlPanel/ControlPanel.svelte";
    import VideoPreview from "../VideoPreview/VideoPreview.svelte";
    import AudioPreview from "../AudioPreview.svelte";
    import NotSupported from "./NotSupported.svelte";

    /** Screen Capture API are supported by the user's device */
    const screenCaptureSupported =
        typeof navigator?.mediaDevices?.getDisplayMedia === "function";

    import stream from "../../library/stream";
    let isVideoTrack: boolean = true;
    $: isVideoTrack = $stream.getVideoTracks().length > 0;
</script>

{#if screenCaptureSupported}
    <Recorder>
        <ControlPanel />
        {#if isVideoTrack}
            <VideoPreview />
        {:else}
            <AudioPreview />
        {/if}
    </Recorder>
{:else}
    <NotSupported />
{/if}
