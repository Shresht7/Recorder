<script lang="ts">
    //  Library
    import createBooleanStore from "../../library/boolean";
    let isOpen = createBooleanStore();

    function open() {
        isOpen.set(true);
    }

    function close() {
        isOpen.set(false);
    }

    function toggle() {
        isOpen.toggle();
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

{#if $isOpen}
    <div class="modal" on:keydown={keydownHandler} tabindex={0}>
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
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
    }

    .content-wrapper {
        z-index: 10;
        width: 80vw;
        height: 60vh;
        padding: 1rem;
        overflow: hidden;
    }

    .content {
        width: 100%;
        max-height: 50vh;
        overflow: auto;
    }
</style>
