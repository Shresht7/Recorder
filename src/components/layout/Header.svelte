<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";

    //  Theme
    import theme from "../../theme/store";
</script>

<header>
    <div />
    <Button
        icon={$theme === "light" ? "moon" : "sun"}
        on:click={() => theme.toggle()}
    />
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
