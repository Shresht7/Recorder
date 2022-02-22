<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";
    import Download from "./Download.svelte";
    import Toast from "../utility/Toast.svelte";

    //  Stores
    import stream from "../../library/stream";
    import { state, countdown } from "../../library/recording";
    import download from "../../library/download";
    import timer from "../../library/timer";
    import options from "../../library/options";

    //  Helpers
    import { getDownloadName, format } from "../../helpers";

    //  Type Definitions
    import type { mimeType } from "../../types";

    /** MediaRecorder */
    let recorder: MediaRecorder;
    $: recorder = new MediaRecorder($stream, $options);

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
        timer.clear();
        await countdown.start();
        state.set("recording");
        timer.start();
        record()
            .then((chunks) => {
                recorder.state === "recording" && recorder.stop();
                timer.stop();
                state.set("inactive");
                const name = getDownloadName($options.mimeType as mimeType);
                const blob = new Blob(chunks, { type: $options.mimeType });
                download.set(URL.createObjectURL(blob), name);
            })
            .catch((err) => console.error(err));
    }

    /** Pause the recording process */
    function pauseRecording() {
        recorder.pause();
        timer.pause();
        state.set("paused");
    }

    /** Resume the recording process */
    function continueRecording() {
        recorder.resume();
        timer.resume();
        state.set("recording");
    }

    /** Stop the recording process */
    function stopRecording() {
        recorder.stop();
        timer.stop();
        state.set("inactive");
    }

    //  Update site title to show recording state
    $: if ($state === "recording" || $state === "paused") {
        document.title = `${format($timer)} | ${$state}`;
    } else {
        document.title = "Screen-Recorder";
    }
</script>

<div>
    {#if $state === "" || ($state === "inactive" && !$download.visible)}
        <Button on:click={startRecording}>Record</Button>
    {/if}

    {#if $state === "paused"}
        <Button on:click={continueRecording}>Continue</Button>
        <Button on:click={stopRecording}>Stop</Button>
    {/if}

    {#if $state === "recording"}
        <Button on:click={pauseRecording}>Pause</Button>
        <Button on:click={stopRecording}>Stop</Button>
    {/if}

    <Download {...$download} />
</div>

<Toast visible={$state === "recording" || $state === "paused"}>
    <p slot="message">{$state}</p>
</Toast>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
