//  Library
import { writable } from "svelte/store";

//  Type Definitions
import type { streamType } from '../types'

function createStreamStore() {
    const { subscribe, set } = writable<MediaStream>()

    let type: streamType = 'SCREEN';

    /** Prompts the user to select a screen to capture and sets the media stream */
    async function start(streamType: streamType, constraints: MediaStreamConstraints | DisplayMediaStreamConstraints = { video: true, audio: true }) {
        let stream: MediaStream
        switch (streamType) {
            case 'SCREEN':
                stream = await navigator.mediaDevices.getDisplayMedia(constraints)
                break;
            case 'WEBCAM':
                stream = await navigator.mediaDevices.getUserMedia(constraints)
                break;
            case 'AUDIO':
                stream = await navigator.mediaDevices.getUserMedia(constraints)
                break;
            default:
                break
        }
        type = streamType
        set(stream)
    }

    /** Sets the store to null */
    function stop() {
        set(null)
    }

    return {
        subscribe,
        start,
        stop,
        type
    }
}

//  ------------------------------
export default createStreamStore()
//  ------------------------------