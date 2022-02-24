<script lang="ts">
    //  Component
    import Icon from "../utility/Icon.svelte";

    //  Props
    export let href;
    export let download;
    export let visible = false;
</script>

{#if visible}
    <a {href} {download}><Icon name="download" />Download</a>
{/if}

<style>
    a {
        text-decoration: none;
        font-family: inherit;
        font-size: 1rem;
        padding: 0.5em 1em;
        color: whitesmoke;
        background-color: var(--clr-success, green);
        border: 2px solid var(--clr-success, green);
        border-radius: 12px;
        transition: all var(--animation-duration);
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
    }

    a:hover,
    a:focus {
        transform: scale(1.05);
        outline: 2px solid var(--clr-success, black);
        outline-offset: 2px;
    }
</style>
