<script lang="ts">
  //  Components
  import Header from "./components/layout/Header.svelte";
  import VideoPreview from "./components/VideoPreview.svelte";
  import ControlPanel from "./components/ControlPanel/ControlPanel.svelte";
  import Footer from "./components/layout/Footer.svelte";
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

  :global(:root) {
    --clr-primary: orangered;
    --clr-secondary: whitesmoke;
    --clr-text: #333;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --clr-primary: orangered;
      --clr-secondary: #333;
      --clr-text: whitesmoke;
    }
  }

  :global(body) {
    height: 100vh;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--clr-secondary, whitesmoke);
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
    height: clamp(90vw, 80vh, 720px);
    width: clamp(90vw, 80vh, 720px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
</style>
