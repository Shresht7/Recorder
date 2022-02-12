<script lang="ts">
    //  Icons
    import GoDeviceDesktop from "svelte-icons/go/GoDeviceDesktop.svelte";
    import GoChevronLeft from "svelte-icons/go/GoChevronLeft.svelte";
    import GoTrashcan from "svelte-icons/go/GoTrashcan.svelte";

    //  Type-Definitions
    import type { icons } from "../../types";

    //  Props
    export let name: icons;
</script>

<div class="icon">
    {#if name === "desktop"}
        <GoDeviceDesktop />
    {/if}

    {#if name === "reset"}
        <GoChevronLeft />
    {/if}

    {#if name === "discard"}
        <GoTrashcan />
    {/if}
</div>

<style>
    .icon {
        color: var(--clr-text, whitesmoke);
        width: 1.5rem;
        height: 1.5rem;
    }
</style>
