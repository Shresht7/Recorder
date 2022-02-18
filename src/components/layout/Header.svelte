<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";

    //  Theme
    import theme from "../../theme/store";

    let mode: "light" | "dark" = "light";
    $: mode = $theme ? theme.getCurrentTheme() : "light";
</script>

<header>
    <div />
    <div>
        <Button primary={false}><span>i</span></Button>
        <Button
            primary={false}
            icon={mode === "light" ? "moon" : "sun"}
            on:click={() => theme.toggle()}
        />
    </div>
</header>

<style>
    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }

    span {
        font-weight: 900;
    }
</style>
