//  Library
import { writable } from "svelte/store";

interface Options extends MediaRecorderOptions { }

const options = writable<Options>({ mimeType: 'video/webm' })

//  ------------------
export default options
//  ------------------