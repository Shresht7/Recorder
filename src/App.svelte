<script lang="ts">
  //  Library
  import { onMount } from "svelte";

  //  Components
  import Header from "./components/layout/Header.svelte";
  import VideoPreview from "./components/VideoPreview.svelte";
  import ControlPanel from "./components/ControlPanel/ControlPanel.svelte";
  import Footer from "./components/layout/Footer.svelte";
  import NotSupported from "./components/NotSupported.svelte";
  import ReloadPrompt from "./pwa/ReloadPrompt.svelte";
  import ToastList from "./components/utility/Toast/ToastList.svelte";

  //  Themes
  import theme from "./theme/store";

  //  Initialize theme
  onMount(() => {
    theme.setRootColors($theme);
  });

  /** Screen Capture API are supported by the user's device */
  const screenCaptureSupported =
    typeof navigator?.mediaDevices?.getDisplayMedia === "function";
</script>

<main>
  {#if !screenCaptureSupported}
    <NotSupported />
  {:else}
    <Header />
    <ControlPanel />
    <VideoPreview />
    <Footer />
  {/if}
</main>

<ToastList />
<ReloadPrompt />

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(:root) {
    --animation-duration: 150ms;
  }

  @media (prefers-reduced-motion) {
    :global(:root) {
      --animation-duration: 1ms;
    }
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
  }

  main {
    height: clamp(95vh, 80vh, 720px);
    width: clamp(95vw, 80vw, 720px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
  }
</style>
