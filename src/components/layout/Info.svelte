<script lang="ts">
    //  Library
    import Modal from "../utility/Modal.svelte";
    import Button from "../utility/Button.svelte";
</script>

<Modal>
    <div slot="trigger" let:open>
        <Button primary={false} on:click={open}><span>i</span></Button>
    </div>

    <div slot="header" class="header" let:close>
        <h1>Screen-Recorder</h1>
        <Button primary={false} on:click={close}>X</Button>
    </div>

    <div>
        <p>A simple screen-recorder powered by the web!</p>

        <h2>Features</h2>

        <ul>
            <li>Powered by the web! Runs everywhere on a browser.</li>
            <li>No sign-up or downloads required.</li>
            <li>Installable as a Progressive-Web-App (PWA). Works offline!</li>
            <li>
                100% Client-sided. No ads, no trackers, no server interaction at
                all.
            </li>
        </ul>

        <h2>Usage</h2>

        <ol>
            <li>
                1. Click on the <span>Select Screen</span> button. Your browser will
                prompt you to select the screen that you want to share with this
                app.
            </li>
            <li>
                2. Once a screen has been selected, a preview of the video
                stream will be shown. Click <span>Record</span> to start recording
                the screen.
            </li>
            <li>
                3. You can <span>Pause</span> and <span>Continue</span> the
                recording process whenever you wish. When you're done, click the
                <span>Stop</span> button. This will stop the recording process and
                show you the recorded video.
            </li>
            <li>
                4. Click on <span>Download</span> to save the recording to your device.
            </li>
            <li>
                Click on <span>Reset</span> or <span>Discard</span> to discard your
                recording at any stage.
            </li>
        </ol>
    </div>

    <div slot="footer" />
</Modal>

<style>
    h1 {
        text-align: center;
    }

    h2 {
        margin: 1rem 0;
    }

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid rgba(255, 255, 255, 0.33);
    }

    li span {
        color: var(--clr-primary, orangered);
    }
</style>
