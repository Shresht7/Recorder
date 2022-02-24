<script lang="ts">
    //  Library
    import { useRegisterSW } from "virtual:pwa-register/svelte";

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

    let existingToast: NodeJS.Timeout;
    $: if ($offlineReady || $needRefresh) {
        const message = $offlineReady
            ? "App ready to work offline"
            : "Update available";
        existingToast = toast.create(message, 0, [
            { label: "Refresh", onClick: refresh },
            { label: "Close", onClick: close },
        ]).timeout;
    } else {
        toast.remove(existingToast);
    }
</script>

<div />
