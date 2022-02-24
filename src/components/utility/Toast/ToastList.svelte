<script lang="ts">
    //  Component
    import Toast from "./Toast.svelte";

    //  Store
    import toasts from "./store";
</script>

<div class="toast-list">
    {#each $toasts as toast (toast.timeout)}
        <Toast onClose={() => toasts.remove(toast.timeout)}>
            {toast.message}
        </Toast>
    {/each}
</div>

<style>
    .toast-list {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        position: fixed;
        bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
