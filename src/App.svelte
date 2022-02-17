<script lang="ts">
  //  Library
  import { onMount } from "svelte";
  //  Components
  import Header from "./components/layout/Header.svelte";
  import VideoPreview from "./components/VideoPreview.svelte";
  import ControlPanel from "./components/ControlPanel/ControlPanel.svelte";
  import Footer from "./components/layout/Footer.svelte";

  //  Themes
  import theme from "./theme/store";

  //  Initialize theme
  onMount(() => {
    theme.setRootColors($theme);
  });
</script>

<main>
  <Header />
  <ControlPanel />
  <VideoPreview />
  <Footer />
</main>

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    height: 100vh;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--clr-background, whitesmoke);
    color: var(--clr-text, black);
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
    height: clamp(90vh, 80vh, 720px);
    width: clamp(90vw, 80vw, 720px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
  }
</style>
