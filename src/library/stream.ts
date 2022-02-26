//  Library
import { writable } from "svelte/store";

//  Type Definitions
import { streamType } from '../types'

function createStreamStore() {
    const { subscribe, set } = writable<MediaStream>()

    /** Prompts the user to select a screen to capture and sets the media stream */
    async function start(type: streamType, constraints: MediaStreamConstraints | DisplayMediaStreamConstraints = { video: true, audio: true }) {
        let stream: MediaStream
        switch (type) {
            case streamType.SCREEN:
                stream = await navigator.mediaDevices.getDisplayMedia(constraints)
                break;
            case streamType.AUDIO:
                stream = await navigator.mediaDevices.getUserMedia(constraints)
                break;
            default:
                break
        }
        set(stream)
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