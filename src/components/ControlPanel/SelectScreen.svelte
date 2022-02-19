<script lang="ts">
    //  Components
    import Button from "../utility/Button.svelte";

    //  Stores
    import stream from "../../library/stream";
</script>

<Button
    icon="desktop"
    size="5rem"
    primary={false}
    square
    on:click={() => stream.start()}
>
    Select Screen
</Button>
