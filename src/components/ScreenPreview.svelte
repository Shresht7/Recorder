<script lang="ts">
    import Button from "./utility/Button.svelte";

    export let screen;
</script>

<div>
    <video src={screen} autoplay muted />

    <div>
        <Button>Start</Button>
        <Button>Stop</Button>
    </div>
</div>

<style>
</style>
