<script lang="ts">
    export let primary: boolean = true;
</script>

<button class:primary class:secondary={!primary} on:click>
    <slot />
</button>

<style>
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font: inherit;
        font-size: var(--btn-font-size, 1rem);
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
        color: var(--clr-secondary, white);
        background-color: var(--clr-primary, black);
        border: 2px solid var(--clr-primary, black);
    }

    .secondary {
        color: var(--clr-primary, black);
        border: 2px solid var(--clr-primary, black);
    }
</style>
