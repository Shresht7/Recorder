<script lang="ts">
    //  Components
    import NotSupported from "./NotSupported.svelte";
    import ControlPanel from "../ControlPanel/ControlPanel.svelte";
    import VideoPreview from "../VideoPreview.svelte";

    /** Screen Capture API are supported by the user's device */
    const screenCaptureSupported =
        typeof navigator?.mediaDevices?.getDisplayMedia === "function";
</script>

{#if screenCaptureSupported}
    <ControlPanel />
    <VideoPreview />
{:else}
    <NotSupported />
{/if}
