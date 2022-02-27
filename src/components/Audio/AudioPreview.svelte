<script lang="ts">
    //  Components
    import Icon from "../utility/Icon.svelte";

    //  Helpers
    import { getAllSupportedMimeTypes } from "../../helpers";

    //  Stores
    import download from "../../library/download";
    import { state } from "../../library/recording";
    import options from "../../library/options";

    //  Library
    import { onMount } from "svelte";

    onMount(() => {
        options.set({ mimeType: getAllSupportedMimeTypes("audio")[0] });
    });
</script>

<div class="container">
    {#if $download.href}
        <audio src={$download.href} controls />
    {:else}
        <Icon
            name="mic"
            size="5rem"
            color={$state === "recording" ? "red" : "default"}
        />
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    audio {
        width: 75vw;
    }
</style>
