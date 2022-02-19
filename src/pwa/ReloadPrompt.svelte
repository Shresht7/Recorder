<script lang="ts">
    //  Library
    import { useRegisterSW } from "virtual:pwa-register/svelte";
    import Toast from "../components/utility/Toast.svelte";
    import Button from "../components/utility/Button.svelte";

    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
        onRegistered(swr) {
            console.log(`SW registered: ${swr}`);
        },
        onRegisterError(error) {
            console.error(`SW registeration error: ${error}`);
        },
    });

    function close() {
        offlineReady.set(false);
        needRefresh.set(false);
    }

    let shown: boolean = false;
    $: shown = $offlineReady || $needRefresh;
</script>

<Toast {shown}>
    <div class="message" slot="message">
        {#if $offlineReady}
            <span> App ready to work offline </span>
        {:else}
            <span> Update available </span>
        {/if}
    </div>

    <div slot="action">
        {#if $needRefresh}
            <Button primary={false} on:click={() => updateServiceWorker(true)}>
                Refresh
            </Button>
            <Button primary={false} on:click={close}>Close</Button>
        {/if}
    </div>
</Toast>

<style>
</style>
