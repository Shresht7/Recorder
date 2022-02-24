<script lang="ts">
    //  Component
    import Toast from "./Toast.svelte";

    //  Store
    import toasts from "./store";
    import Button from "../Button.svelte";
</script>

<div class="toast-list">
    {#each $toasts as toast (toast.timeout)}
        <Toast onClose={() => toasts.remove(toast.timeout)}>
            {toast.message}
            {#if toast.actions?.length}
                <div class="actions-list">
                    {#each toast.actions as action (action.label)}
                        <Button
                            on:click={action.onClick}
                            style="padding: 0.25rem 0.5rem; font-size: 0.85rem;"
                        >
                            {action.label}
                        </Button>
                    {/each}
                </div>
            {/if}
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
        width: 100%;

        position: fixed;
        bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .actions-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.75rem;
        padding-top: 0.33rem;
        width: 100%;
        border-top: 2px solid rgba(0, 0, 0, 0.25);
    }
</style>
