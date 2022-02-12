<script lang="ts">
    //  Icons
    import GoDeviceDesktop from "svelte-icons/go/GoDeviceDesktop.svelte";

    type icons = "desktop";

    export let name: icons = "desktop";
</script>

<div class="icon">
    {#if name === "desktop"}
        <GoDeviceDesktop />
    {/if}
</div>

<style>
    .icon {
        color: var(--clr-highlight, white);
        width: 1.5rem;
        height: 1.5rem;
    }
</style>
