<script lang="ts">
    //  Library
    import Modal from "../utility/Modal.svelte";
    import Button from "../utility/Button.svelte";
    import Icon from "../utility/Icon.svelte";
</script>

<Modal>
    <!-- MODAL TRIGGER -->
    <div slot="trigger" let:open>
        <Button primary={false} on:click={open}>
            <Icon name="info" />
        </Button>
    </div>

    <!-- MODAL HEADER -->
    <div slot="header" class="header" let:close>
        <h1>Recorder</h1>
        <Button primary={false} on:click={close}>
            <span class="close">X</span>
        </Button>
    </div>

    <!-- MODAL CONTENTS -->
    <div>
        <p>A simple recorder powered by web-technologies!</p>

        <h2>Features</h2>

        <ul>
            <li>Powered by the web! Runs everywhere on a browser.</li>
            <li>No sign-up or downloads required.</li>
            <li>Installable as a Progressive-Web-App (PWA). Works offline!</li>
            <li>
                100% Client-sided. No ads, no trackers, no server interaction at
                all.
            </li>
            <li>Record your screen, camera or microphone.</li>
        </ul>

        <h2>Usage</h2>

        <ol>
            <li>
                1. Select one of the recording options. Your browser will prompt
                you to select what you want to share with this app.
            </li>
            <li>
                2. Once selected, a preview of the stream will be shown. Click <span
                    >Record</span
                > to start recording the screen.
            </li>
            <li>
                3. You can <span>Pause</span> and <span>Continue</span> the
                recording process whenever you wish. When you're done, click the
                <span>Stop</span> button. This will stop the recording process and
                present you a preview of the recorded video.
            </li>
            <li>
                4. Click on <span>Download</span> to save the recording to your device.
            </li>
            <li>
                Click on <span>Reset</span> or <span>Discard</span> to discard your
                recording at any stage.
            </li>
            <li>
                Click on the <span>Preview</span> to capture a
                <span>Screenshot</span>
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

    .close {
        color: whitesmoke;
    }
</style>
