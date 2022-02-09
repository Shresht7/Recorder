<script lang="ts">
  // Components
  import Button from "./components/utility/Button.svelte";
  import ScreenPreview from "./components/ScreenPreview.svelte";

  /** Display Media Stream */
  let stream: MediaStream;

  /** Prompts the user to select a screen to capture and sets the media stream */
  function selectScreen() {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: true, //  TODO: turn these into checkboxes
      })
      .then((mediaStream) => (stream = mediaStream))
      .catch((err) => console.error(err)); //  TODO: Show error message to user
  }
</script>

<main>
  {#if stream}
    <ScreenPreview {stream} />
  {:else}
    <Button on:click={selectScreen}>Select Screen</Button>
  {/if}
</main>

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(:root) {
    --clr-primary: orangered;
  }

  :global(body) {
    height: 100vh;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #e3e3e3;
  }

  :global(#app) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  main {
    height: clamp(90vw, 80vh, 720px);
    width: clamp(90vw, 80vh, 720px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
