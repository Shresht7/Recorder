//  Library
import { writable } from "svelte/store";
import { getAllSupportedMimeTypes } from '../helpers'

const supportedMimeTypes = getAllSupportedMimeTypes('video')

interface Options extends MediaRecorderOptions { }

const options = writable<Options>({ mimeType: supportedMimeTypes[0] })

//  ------------------
export default options
//  ------------------