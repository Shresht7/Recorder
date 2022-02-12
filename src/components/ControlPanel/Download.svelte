<script lang="ts">
    //  Props
    export let href;
    export let download;
    export let visible = false;
</script>

{#if visible}
    <a {href} {download}>Download</a>
{/if}

<style>
    a {
        text-decoration: none;
        font-family: inherit;
        font-size: 1rem;
        padding: 0.5em 1em;
        color: var(--clr-text, whitesmoke);
        background-color: var(--clr-primary, black);
        border: 2px solid var(--clr-primary, black);
        border-radius: 12px;
        transition: all 200ms;
        cursor: pointer;
    }

    a:hover,
    a:focus {
        transform: scale(1.05);
        outline: 2px solid var(--clr-primary, black);
        outline-offset: 2px;
    }
</style>
