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
        <p>Screen-Recorder powered by web technologies!</p>
    </div>

    <div slot="footer" />
</Modal>

<style>
    h1 {
        text-align: center;
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
</style>
