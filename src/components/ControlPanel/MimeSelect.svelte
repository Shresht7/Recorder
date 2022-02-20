<script lang="ts">
    import type { mimeType } from "src/types";

    let selection: mimeType = "video/webm";
</script>

<select bind:value={selection}>
    <option value="video/webm">webm</option>
    <option value="video/mp4">mp4</option>
</select>

<style>
</style>
