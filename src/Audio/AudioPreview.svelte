<script lang="ts">
    import { getAllSupportedMimeTypes } from "../helpers";

    import download from "../library/download";

    import { onMount } from "svelte";
    import options from "../library/options";

    onMount(() => {
        options.set({ mimeType: getAllSupportedMimeTypes("audio")[0] });
    });
</script>

<audio src={$download.href} controls />

<style></style>
