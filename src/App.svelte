<script lang="ts">
  //  Components
  import Button from "./utility/Button.svelte";

  //  Stores
  import stream from "./library/stream";

  /** Preview Video Element */
  let videoElement: HTMLVideoElement;

  //  Update the videoElement srcObject whenever the stream changes
  $: if (videoElement) videoElement.srcObject = $stream;

  /** Start Display Capture */
  function startCapture() {
    stream.start();
  }

  /** Stop Display Capture */
  function stopCapture() {
    const tracks = $stream.getTracks();
    tracks.forEach((track) => track.stop());
    stream.stop();
  }
</script>

<main>
  <div class="video-container">
    {#if $stream}
      <video bind:this={videoElement} autoplay muted height={450} width={800} />
    {/if}
  </div>

  <div>
    <Button on:click={startCapture}>Start</Button>
    <Button on:click={stopCapture}>Stop</Button>
  </div>
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

  .video-container {
    height: 450px;
    width: 800px;
    background-color: gray;
  }
</style>
