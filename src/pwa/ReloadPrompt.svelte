<script lang="ts">
    //  Library
    import { useRegisterSW } from "virtual:pwa-register/svelte";
    import Button from "../components/utility/Button.svelte";

    //  Store
    import toast from "../components/utility/Toast/store";

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

    $: if ($offlineReady) {
        toast.create("App ready to work offline", 0);
    } else if ($needRefresh) {
        toast.create("Update available", 0);
    }
</script>

<style>
</style>
