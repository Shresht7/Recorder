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
</style>
