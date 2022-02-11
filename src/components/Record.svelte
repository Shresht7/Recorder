<script lang="ts">
    //  Components
    import Button from "./utility/Button.svelte";
    import Download from "./Download.svelte";
    import Status from "./Recording/Status.svelte";

    //  Stores
    import stream from "../library/stream";
    import timer from "../library/timer";
    import download from "../library/download";

    /** Media Recorder Options */
    let options: MediaRecorderOptions = { mimeType: "video/webm" };

    /** MediaRecorder */
    let recorder: MediaRecorder;
    $: recorder = new MediaRecorder($stream, options);

    /** Recording state */
    let state: RecordingState | "" = "";

    /** Creates a closure and starts the recording process that returns a promise of the data-blob */
    async function record() {
        //  Collect blobs of data
        let data: Blob[] = [];
        recorder.addEventListener("dataavailable", (e) => {
            if (e.data.size <= 0) return;
            data.push(e.data);
        });

        //  Start Recorder
        recorder.start();

        //  Await fulfillment
        await new Promise((resolve, reject) => {
            recorder.addEventListener("stop", resolve);
            recorder.addEventListener("error", (e) => reject(e.error));
        });

        return data;
    }

    /** Start the recording process */
    async function startRecording() {
        timer.start();
        state = "recording";
        //  TODO: Add and show countdown
        record()
            .then((chunks) => {
                recorder.state === "recording" && recorder.stop();
                timer.stop();
                state = "inactive";
                const blob = new Blob(chunks, { type: "video/webm" });
                download.setDownload(URL.createObjectURL(blob), "test.webm");
            })
            .catch((err) => console.error(err));
    }

    /** Pause the recording process */
    function pauseRecording() {
        recorder.pause();
        timer.pause();
        state = "paused";
    }

    /** Resume the recording process */
    function continueRecording() {
        recorder.resume();
        timer.resume();
        state = "recording";
    }

    /** Stop the recording process */
    function stopRecording() {
        recorder.stop();
        timer.stop();
        state = "inactive";
    }
</script>

<div>
    {#if state !== "" && state !== "inactive"}
        <Status {state} timer={$timer} />
    {/if}

    {#if state === ""}
        <Button on:click={startRecording}>Record</Button>
    {/if}

    {#if state === "paused"}
        <Button on:click={continueRecording}>Continue</Button>
        <Button on:click={stopRecording}>Stop</Button>
    {/if}

    {#if state === "recording"}
        <Button on:click={pauseRecording}>Pause</Button>
        <Button on:click={stopRecording}>Stop</Button>
    {/if}

    <Download {...$download} />
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
