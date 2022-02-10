<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";

    //  Stores
    import stream from "../library/stream";

    let download: HTMLAnchorElement;

    async function startRecording() {
        const mediaRecorderOptions: MediaRecorderOptions = {
            mimeType: "video/webm",
        };
        const recorder = new MediaRecorder($stream, mediaRecorderOptions);

        let data: Blob[] = [];
        recorder.addEventListener("dataavailable", (e) => {
            if (e.data.size <= 0) {
                return;
            }
            data.push(e.data);
        });

        recorder.start();

        await Promise.all([
            new Promise((resolve, reject) => {
                recorder.addEventListener("stop", resolve);
                recorder.addEventListener("error", (e) =>
                    reject(e.error.message)
                );
            }),
            () => recorder.state === "recording" && recorder.stop(),
        ]);

        return data;
    }

    async function record() {
        startRecording().then((chunks) => {
            const blob = new Blob(chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            download.href = url;
            download.download = "test.webm";
        });
    }
</script>

<div>
    <Button on:click={record}>Record</Button>
    <a bind:this={download} href="_" download="test.webm">Download</a>
</div>

<style>
</style>
