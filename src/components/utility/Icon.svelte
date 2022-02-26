<script lang="ts">
    //  Icon
    import GoDeviceDesktop from "svelte-icons/go/GoDeviceDesktop.svelte";
    import GoChevronLeft from "svelte-icons/go/GoChevronLeft.svelte";
    import GoTrashcan from "svelte-icons/go/GoTrashcan.svelte";
    import GoInfo from "svelte-icons/go/GoInfo.svelte";
    import TiMediaRecord from "svelte-icons/ti/TiMediaRecord.svelte";
    import TiMediaPause from "svelte-icons/ti/TiMediaPause.svelte";
    import TiMediaStop from "svelte-icons/ti/TiMediaStop.svelte";
    import IoMdDownload from "svelte-icons/io/IoMdDownload.svelte";
    import IoIosSun from "svelte-icons/io/IoIosSunny.svelte";
    import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";
    import FaMicrophone from 'svelte-icons/fa/FaMicrophone.svelte';
    import FaCamera from 'svelte-icons/fa/FaCamera.svelte'

    //  Type-Definitions
    import type { icons } from "../../types";

    //  Props
    export let name: icons;
    export let size: string | number = "1.5rem";
    export let color: string = "var(--clr-text)";
</script>

<div class="icon" style="--size: {size}; --clr-text: {color};">
    <slot>
        {#if name === "desktop"}
            <GoDeviceDesktop />
        {/if}

        {#if name === "reset"}
            <GoChevronLeft />
        {/if}

        {#if name === "discard"}
            <GoTrashcan />
        {/if}

        {#if name === "info"}
            <GoInfo />
        {/if}

        {#if name === "record"}
            <TiMediaRecord />
        {/if}

        {#if name === "continue"}
            <TiMediaRecord />
        {/if}

        {#if name === "pause"}
            <TiMediaPause />
        {/if}

        {#if name === "stop"}
            <TiMediaStop />
        {/if}

        {#if name === "download"}
            <IoMdDownload />
        {/if}

        {#if name === "sun"}
            <IoIosSun />
        {/if}

        {#if name === "moon"}
            <IoIosMoon />
        {/if}

        {#if name === "camera"}
            <FaCamera />
        {/if}
        
        {#if name === "mic"}
            <FaMicrophone />
        {/if}
    </slot>
</div>

<style>
    .icon {
        color: var(--clr-text);
        width: var(--size);
        height: var(--size);
    }
</style>
