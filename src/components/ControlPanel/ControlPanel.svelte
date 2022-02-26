<script lang="ts">
    //  Components
    import Discard from "./Discard.svelte";
    import Status from "./Status.svelte";
    import Record from "./Record.svelte";

    //  Store
    import { state } from "../../library/recording";
</script>

<div>
    <!-- DISCARD AND RESET -->
    <div class="flex start">
        <Discard />
    </div>

    <!-- RECORDING STATUS -->
    <div class="flex center">
        {#if $state !== "" && $state !== "inactive"}
            <Status />
        {/if}
    </div>

    <!-- RECORDING CONTROLS -->
    <div class="flex end">
        <Record />
    </div>
</div>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .flex {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .start {
        justify-content: start;
    }

    .center {
        justify-content: center;
    }

    .end {
        justify-content: end;
    }
</style>
