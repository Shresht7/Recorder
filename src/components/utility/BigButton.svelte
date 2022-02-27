<script lang="ts">
    //  Components
    import Button from "./Button.svelte";

    //  Type Definitions
    import type { icons } from "../../types";

    export let label: string = "";
    export let icon: icons;
</script>

<Button {icon} size="5rem" primary={false} square on:click>
    <slot>
        {label}
    </slot>
</Button>
