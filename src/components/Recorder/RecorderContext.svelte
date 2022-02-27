<script lang="ts">
    //  Library
    import { setContext } from "svelte";

    //  Stores
    import stream from "../../library/stream";
    import { state, countdown } from "../../library/recording";
    import timer from "../../library/timer";
    import options from "../../library/options";
    import toast from "../utility/Toast/store";
    import download from "../../library/download";

    //  Helpers
    import { getDownloadName, format, capitalize } from "../../helpers";
    import ysFixWebmDuration from "fix-webm-duration";

    //  Type Definitions
    import type { mimeType, recorderCtx } from "../../types";

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
            .then(async (chunks) => {
                recorder.state === "recording" && recorder.stop();
                timer.stop();
                state.set("inactive");
                const name = getDownloadName($options.mimeType as mimeType);
                const brokenBlob = new Blob(chunks, {
                    type: $options.mimeType,
                });
                const blob = await ysFixWebmDuration(brokenBlob, $timer); //  Fix missing webm metadata issue
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

    //  Set Recorder Context API
    setContext<recorderCtx>("recorder", {
        startRecording,
        pauseRecording,
        continueRecording,
        stopRecording,
    });

    $: if ($state === "recording" || $state === "paused") {
        toast.create(capitalize($state));
    }

    //  Update site title to show recording state
    $: if ($state === "recording" || $state === "paused") {
        document.title = `${format($timer)} | ${capitalize($state)}`;
    } else {
        document.title = "Screen-Recorder";
    }
</script>

<slot />
