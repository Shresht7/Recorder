<script lang="ts">
    //  Library
    import { fly } from "svelte/transition";
    import createBooleanStore from "../../library/boolean";

    //  State Variable
    const isVisible = createBooleanStore();

    //  Props
    export let visible = false;
    export let duration = 3000;

    //  Set the toast message to be visible for the given duration
    let timeout: NodeJS.Timeout;
    $: if (visible) {
        isVisible.set(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => isVisible.set(false), duration);
        visible = false;
    }
</script>

{#if $isVisible}
    <div class="toast" role="alert" transition:fly={{ y: 200, duration: 250 }}>
        <div class="close" on:click={() => isVisible.set(false)}>X</div>

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
    }

    .close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 0.5rem;
        cursor: pointer;
    }
</style>
