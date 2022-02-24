<script lang="ts">
    //  Library
    import { fade } from "svelte/transition";

    let isOpen: boolean = false;

    function open() {
        isOpen = true;
    }

    function close() {
        isOpen = false;
    }

    function toggle() {
        isOpen = !isOpen;
    }

    function keydownHandler(e: KeyboardEvent) {
        e.stopPropagation();
        if (e.key === "Escape") {
            close();
        }
    }
</script>

<slot name="trigger" {open}>
    <!--    Fallback trigger -->
    <button on:click={open}>Open Modal</button>
</slot>

{#if isOpen}
    <div
        class="modal"
        on:keydown={keydownHandler}
        tabindex={0}
        transition:fade={{ duration: 67 }}
    >
        <div class="backdrop" on:click={close} />
        <div class="content-wrapper">
            <div>
                <slot name="header" {close}>
                    <!--    Fallback header     -->
                    <div>
                        <span />
                        <button on:click={close}>X</button>
                    </div>
                </slot>
            </div>

            <div class="content">
                <slot />
            </div>

            <div>
                <slot name="footer" {close}>
                    <!--    Fallback footer     -->
                    <div>
                        <button on:click={close}>Cancel</button>
                        <button on:click={close}>Done</button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .backdrop {
        z-index: 9;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.88);
        backdrop-filter: blur(5px);
    }

    .content-wrapper {
        z-index: 10;
        width: 80vw;
        height: 80vh;
        padding: 1rem;
        overflow: hidden;
        color: hsla(60, 100%, 89%, 1);
    }

    .content {
        width: 100%;
        max-height: 70vh;
        overflow: auto;
    }
</style>
