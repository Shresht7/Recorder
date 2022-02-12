//  Library
import { writable } from 'svelte/store';

const download = {
    href: "",
    download: "test.webm",
    visible: false
}

function createDownloadStore() {

    const { subscribe, set: _set } = writable<typeof download>(download)

    function set(url: string, name: string = "test.webm") {
        _set({
            href: url,
            download: name,
            visible: true
        })
    }

    function clear() {
        _set(download)
    }

    return {
        subscribe,
        set,
        clear
    }

}

//  --------------------------------
export default createDownloadStore()
//  --------------------------------