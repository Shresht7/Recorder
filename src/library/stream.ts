import { writable } from "svelte/store";

function createStreamStore() {
    const { subscribe, set } = writable<MediaStream>()

    /** Prompts the user to select a screen to capture and sets the media stream */
    function start(constraints: DisplayMediaStreamConstraints = { video: true, audio: true }) {
        navigator.mediaDevices
            .getDisplayMedia(constraints)
            .then((mediaStream) => set(mediaStream))
            .catch((err) => console.error(err));
    }

    /** Sets the store to null */
    function stop() {
        set(null)
    }

    return {
        subscribe,
        start,
        stop
    }
}

//  ------------------------------
export default createStreamStore()
//  ------------------------------