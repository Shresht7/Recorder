<script lang="ts">
    import Button from "../utility/Button.svelte";
</script>

<header>
    <div />
    <Button icon="reset" on:click={() => console.log("change color theme")} />
</header>

<style>
    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
