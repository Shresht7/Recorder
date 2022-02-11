//  Library
import { writable } from 'svelte/store';

const download = {
    href: "",
    download: "test.webm",
    visible: false
}

function createDownloadStore() {

    const { subscribe, set } = writable<typeof download>(download)

    function setDownload(url: string, name: string = "test.webm") {
        set({
            href: url,
            download: name,
            visible: true
        })
    }

    function clearDownload() {
        set(download)
    }

    return {
        subscribe,
        setDownload,
        clearDownload
    }

}

//  --------------------------------
export default createDownloadStore()
//  --------------------------------