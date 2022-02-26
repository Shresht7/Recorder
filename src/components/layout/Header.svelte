<script lang="ts">
    //  Components
    import Info from "./Info.svelte";
    import Button from "../utility/Button.svelte";

    //  Theme
    import theme from "../../theme/store";
    import type { themeMode } from "src/types";

    let mode: themeMode = "light";
    $: mode = $theme ? theme.getCurrentTheme() : "light";
</script>

<header>
    <div><h1>Screen-Recorder</h1></div>
    <div>
        <!-- INFO BUTTON -->
        <Info />

        <!-- TOGGLE THEME -->
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
</style>
