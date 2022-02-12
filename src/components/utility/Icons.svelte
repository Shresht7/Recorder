<script lang="ts">
    //  Icons
    import GoDeviceDesktop from "svelte-icons/go/GoDeviceDesktop.svelte";
    import GoChevronLeft from "svelte-icons/go/GoChevronLeft.svelte";
    import GoTrashcan from "svelte-icons/go/GoTrashcan.svelte";

    type icons = "desktop" | "reset" | "discard";

    export let name: icons = "desktop";
    export let primary: boolean = true;
</script>

<div class="icon" class:primary class:secondary={!primary}>
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
        color: var(--clr-highlight, white);
        width: 1.5rem;
        height: 1.5rem;
    }

    .primary {
        color: var(--clr-highlight, white);
    }

    .secondary {
        color: var(--clr-primary, black);
    }
</style>
