<script lang="ts">
  //  Components
  import VideoPreview from "./components/VideoPreview.svelte";
  import ControlPanel from "./components/ControlPanel.svelte";
</script>

<!-- TODO: Show a notice for mobile users saying Screen Capture API is desktop only -->

<main>
  <ControlPanel />
  <VideoPreview />
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
    gap: 1rem;
  }
</style>
