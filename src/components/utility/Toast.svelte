<script lang="ts">
    //  Library
    import { fly } from "svelte/transition";
    import createBooleanStore from "../../library/boolean";

    const isShown = createBooleanStore();

    export let shown = false;
    export let duration = 3000;

    let timeout: NodeJS.Timeout;
    $: if (shown) {
        isShown.set(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => isShown.set(false), duration);
        shown = false;
    }
</script>

{#if $isShown}
    <div class="toast" role="alert" transition:fly={{ y: 200, duration: 250 }}>
        <div class="close" on:click={() => isShown.set(false)}>X</div>
        <div>
            <slot name="message">
                <p>Svelte Toast</p>
            </slot>
        </div>
        <slot name="action" />
    </div>
{/if}

<style>
    .toast {
        position: fixed;
        bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        border: 1px solid var(--clr-text, whitesmoke);
        border-radius: 4px;
        z-index: 10;
        box-shadow: 5px 5px 15px 15px rgba(0, 0, 0, 0.25);
        background-color: var(--clr-primary, orangered);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        min-width: 20vw;
    }

    .close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 0.5rem;
        cursor: pointer;
    }
</style>
