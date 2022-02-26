<script lang="ts">
    //  Components
    import Recorder from "../Recorder.svelte";
    import ControlPanel from "../ControlPanel/ControlPanel.svelte";
    import VideoPreview from "../VideoPreview/VideoPreview.svelte";
    import NotSupported from "./NotSupported.svelte";

    /** Screen Capture API are supported by the user's device */
    const screenCaptureSupported =
        typeof navigator?.mediaDevices?.getDisplayMedia === "function";
</script>

{#if screenCaptureSupported}
    <Recorder>
        <ControlPanel />
        <VideoPreview />
    </Recorder>
{:else}
    <NotSupported />
{/if}
