<script lang="ts">
    //  Components
    import Icon from "./Icon.svelte";

    //  Type-Definitions
    import type { icons as iconTypes } from "../../types";

    //  Props
    export let primary: boolean = true;
    export let square: boolean = false;
    export let icon: iconTypes = undefined;
    export let size: string | number = "1.5rem";
</script>

<button class:primary class:secondary={!primary} class:square on:click>
    {#if icon}
        <slot name="icon">
            <Icon name={icon} {size} />
        </slot>
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
        transition: all var(--animation-duration);
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
        background-color: inherit;
        border: 2px solid var(--clr-primary, black);
    }

    .square {
        flex-direction: column;
        min-width: 15vw;
        min-height: 15vw;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        box-shadow: 3px 3px 7px 7px rgba(0, 0, 0, 0.25);
        outline: 4px solid var(--clr-primary, black);
        outline-offset: 4px;
    }
</style>
