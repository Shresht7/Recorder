<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";
    import Download from "./Download.svelte";

    //  Stores
    import stream from "../library/stream";
    import timer from "../library/timer";

    /** MediaRecorder */
    let recorder: MediaRecorder;

    async function startRecording() {
        //  Instantiate a media recorder from the selected stream
        const mediaRecorderOptions: MediaRecorderOptions = {
            mimeType: "video/webm",
        };
        recorder = new MediaRecorder($stream, mediaRecorderOptions);

        //  Collect blobs of data
        let data: Blob[] = [];
        recorder.addEventListener("dataavailable", (e) => {
            if (e.data.size <= 0) {
                return;
            }
            data.push(e.data);
        });

        //  Start Recorder
        recorder.start();
        timer.start();

        //  Await fulfillment
        await Promise.all([
            new Promise((resolve, reject) => {
                recorder.addEventListener("stop", resolve);
                recorder.addEventListener("error", (e) =>
                    reject(e.error.message)
                );
            }),
            () => recorder.state === "recording" && recorder.stop(),
            () => timer.stop(),
        ]);

        return data;
    }

    /** Download props */
    let download = {
        href: "",
        download: "test.webm",
        visible: false,
    };

    /** Record stream and link to download button */
    async function record() {
        startRecording().then((chunks) => {
            const blob = new Blob(chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            download.href = url;
            download.download = "test.webm";
            download.visible = true;
        });
    }

    function pauseRecording() {
        recorder.pause();
        timer.pause();
    }

    function continueRecording() {
        recorder.resume();
        timer.resume();
    }

    function stopRecording() {
        recorder.stop();
        timer.stop();
    }
</script>

<div>
    {#if recorder?.state}
        <p>{recorder.state} {$timer}s</p>
    {/if}
    {#if !recorder?.state}
        <Button on:click={record}>Record</Button>
    {/if}
    {#if recorder?.state === "paused"}
        <Button on:click={continueRecording}>Continue</Button>
    {/if}
    {#if recorder?.state === "recording"}
        <Button on:click={pauseRecording}>Pause</Button>
        <Button on:click={stopRecording}>Stop</Button>
    {/if}
    <Download {...download} />
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
