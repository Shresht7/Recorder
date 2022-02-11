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
        font-size: var(--btn-font-size, 1rem);
        color: var(--clr-highlight, white);
        padding: 0.5em 1em;
        background-color: var(--clr-primary, black);
        border: 2px solid var(--clr-primary, black);
        border-radius: 12px;
        transition: all 200ms;
        cursor: pointer;
    }

    a:hover {
        transform: scale(1.05);
    }
</style>
