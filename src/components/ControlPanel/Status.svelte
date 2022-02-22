<script lang="ts">
    //  Props
    export let state: RecordingState;
    export let timer: number = 0;

    //  Formats the time for display
    function format(time: number) {
        let seconds = Math.floor(time % 60);
        let minutes = Math.floor((time / 60) % 60);
        let hours = Math.floor((time / (60 * 60)) % 24);

        const hh = hours < 10 ? "0" + hours : hours;
        const mm = minutes < 10 ? "0" + minutes : minutes;
        const ss = seconds < 10 ? "0" + seconds : seconds;

        if (!hours) {
            return `${mm}:${ss}`;
        }

        return `${hh}:${mm}:${ss}`;
    }
</script>

<div>
    {#if state === "recording"}
        <div class="recording" />
    {/if}

    {#if state === "paused"}
        <div class="paused" />
    {/if}

    <p>{format(timer)}</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.75ch;
        z-index: 10;
    }

    .recording {
        width: 2ch;
        height: 2ch;
        border-radius: 50%;
        background-color: red;
    }

    .paused {
        position: relative;
        width: 2ch;
        height: 1.75ch;
    }

    .paused::before,
    .paused::after {
        position: absolute;
        content: "";
        width: 0.5ch;
        height: 1.75ch;
        background-color: var(--clr-text);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .paused::before {
        transform: translate(75%);
    }

    .paused::after {
        transform: translate(+225%);
    }
</style>
