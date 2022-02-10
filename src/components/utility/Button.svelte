<script lang="ts">
</script>

<button on:click>
    <slot />
</button>

<style>
    button {
        font: inherit;
        font-size: var(--btn-font-size, 1rem);
        color: var(--clr-primary, black);
        padding: 0.5em 1em;
        border: 2px solid var(--clr-primary, black);
        border-radius: 12px;
        transition: all 200ms;
        cursor: pointer;
    }

    button:hover {
        transform: scale(1.05);
    }
</style>
