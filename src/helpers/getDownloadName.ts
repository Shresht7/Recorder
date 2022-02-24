//  Helpers
import { getExtension } from "./getExtension";

//  Type Definitions
import type { mimeType } from "src/types";

/** Generates a random download name */
export const getDownloadName = (type: mimeType) => {
    const date = new Date().toISOString().replace(/[\:\.]/g, '-')
    const extension = getExtension(type)
    return `Recording_${date}.${extension}`
}