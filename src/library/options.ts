//  Library
import type { mimeType } from "src/types";
import { writable } from "svelte/store";

interface Options extends MediaRecorderOptions {
    name: string,
}

function createOptionsStore() {

    const { subscribe, set, update } = writable<Options>({
        name: 'test.webm',
        mimeType: 'video/webm'
    })

    function setName(name: string) {
        update(o => ({ ...o, name }))
    }

    function setMimeType(mimeType: mimeType) {
        update(o => ({ ...o, mimeType }))
    }

    return {
        subscribe,
        setName,
        setMimeType
    }

}


//  -------------------------------
export default createOptionsStore()
//  -------------------------------