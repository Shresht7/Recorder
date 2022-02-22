<script lang="ts">
    //  Library
    import { useRegisterSW } from "virtual:pwa-register/svelte";
    import Toast from "../components/utility/Toast.svelte";
    import Button from "../components/utility/Button.svelte";

    //  Register Service Worker
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
        onRegistered(swr) {
            console.log(`SW registered: ${swr}`);
        },
        onRegisterError(error) {
            console.error(`SW registeration error: ${error}`);
        },
    });

    /** Refresh service worker */
    function refresh() {
        updateServiceWorker(true);
        close();
    }

    /** Service worker on close handler */
    function close() {
        offlineReady.set(false);
        needRefresh.set(false);
    }

    let visible: boolean = true;
    $: visible = $offlineReady || $needRefresh;
</script>

<Toast {visible} duration={0}>
    <div class="message" slot="message">
        {#if $offlineReady}
            <span> App ready to work offline </span>
        {:else}
            <span> Update available </span>
        {/if}
    </div>

    <div slot="action">
        {#if $needRefresh}
            <Button primary={false} on:click={refresh}>Refresh</Button>
            <Button primary={false} on:click={close}>Close</Button>
        {/if}
    </div>
</Toast>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
</style>
