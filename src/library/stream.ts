import { writable } from "svelte/store";

function createStreamStore() {
    const { subscribe, set } = writable<MediaStream>(null)

    /** Prompts the user to select a screen to capture and sets the media stream */
    function selectScreen() {
        navigator.mediaDevices
            .getDisplayMedia({
                video: true,
                audio: true, //  TODO: turn these into checkboxes
            })
            .then((mediaStream) => set(mediaStream))
            .catch((err) => console.error(err)); //  TODO: Show error message to user
    }

    /** Sets the store to null */
    function clear() {
        set(null)
    }

    return {
        subscribe,
        selectScreen,
        clear
    }
}

//  ------------------------------
export default createStreamStore()
//  ------------------------------