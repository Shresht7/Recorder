<script lang="ts">
    //  Components
    import Icon from "./Icons.svelte";

    //  Type-Definitions
    import type { icons as iconTypes } from "../../types";

    //  Props
    export let primary: boolean = true;
    export let icon: iconTypes = undefined;
</script>

<button class:primary class:secondary={!primary} on:click>
    {#if icon}
        <Icon name={icon} />
    {/if}
    <slot />
</button>

<style>
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        font: inherit;
        font-size: 1rem;
        color: var(--clr-text, black);
        padding: 0.5em 1em;
        border-radius: 12px;
        transition: all 200ms;
        cursor: pointer;
    }

    button:hover,
    button:focus {
        transform: scale(1.05);
        outline: 2px solid var(--clr-primary, black);
        outline-offset: 2px;
    }

    .primary {
        --clr-text: var(--clr-secondary);
        color: var(--clr-text, whitesmoke);
        background-color: var(--clr-primary, black);
        border: 2px solid var(--clr-primary, black);
    }

    .secondary {
        color: var(--clr-text, black);
        background-color: var(--clr-background, black);
        border: 2px solid var(--clr-primary, black);
    }
</style>
