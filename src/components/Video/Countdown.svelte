<script lang="ts">
    //  Stores
    import { countdown } from "../../library/recording";
</script>

<!-- COUNTDOWN -->
{#if $countdown > 0}
    <div class="countdown-backdrop" />
    <div class="countdown">{$countdown}</div>
{/if}

<style>
    .countdown {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        color: var(--clr-text);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
    }

    .countdown-backdrop {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--clr-background);
        opacity: 0.5;
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        z-index: 1;
    }
</style>
