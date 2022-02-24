<script lang="ts">
    //  Library
    import { fly } from "svelte/transition";

    /** OnClose Handler */
    export let onClose: svelte.JSX.MouseEventHandler<HTMLDivElement> = () => {};
</script>

<div class="toast" role="alert" transition:fly={{ y: 200, duration: 250 }}>
    <div class="close" on:click={onClose}>X</div>

    <div>
        <slot>
            <p>Svelte Toast</p>
        </slot>
    </div>

    <slot name="action" />
</div>

<style>
    .toast {
        padding: 1rem;
        border: 1px solid var(--clr-background, whitesmoke);
        border-radius: 4px;
        z-index: 10;
        box-shadow: 3px 3px 7px 7px rgba(0, 0, 0, 0.25);
        background-color: var(--clr-primary, orangered);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        min-width: 20vw;
        gap: 0.5rem;
    }

    .close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 0.75rem;
        cursor: pointer;
    }
</style>
