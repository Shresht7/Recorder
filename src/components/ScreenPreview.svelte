<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    import stream from "../library/stream";

    /** Sets the video-element srcObject property to the given media-stream */
    function srcObject(node: HTMLVideoElement, stream: MediaStream) {
        node.srcObject = stream;
        return {
            update(newStream: MediaStream) {
                if (node.srcObject !== newStream) {
                    node.srcObject = newStream;
                }
            },
            destroy() {
                stream = null;
            },
        };
    }
</script>

<div>
    <p>{$stream.id}</p>
    <video use:srcObject={$stream} autoplay muted height={600} width={800} />

    <div>
        <Button>Start</Button>
        <Button>Stop</Button>
    </div>
</div>

<style>
</style>
