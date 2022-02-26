<script lang="ts">
    //  Props
    export let height: number = 0;
    export let width: number = 0;
    export let src: CanvasImageSource;

    // Whenever a new source is provided, capture screenshot
    $: if (src) takePicture(src);

    /** Draw CanvasImageSource and Download Screenshot */
    function takePicture(src: CanvasImageSource) {
        const context = canvas.getContext("2d");
        context.drawImage(src, 0, 0, width, height);
        const data = canvas.toDataURL("image/png");
        download.setAttribute("href", data);
        download.click();
    }

    //  DOM Elements
    let canvas: HTMLCanvasElement;
    let download: HTMLAnchorElement;
</script>

<canvas bind:this={canvas} {height} {width} />
<a href="_" download="screenshot.png" bind:this={download}> Screenshot </a>

<style>
    canvas {
        display: none;
    }

    a {
        display: none;
    }
</style>
