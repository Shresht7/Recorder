//  Type Definitions
import type { mimeType } from "src/types";

/** Generates a random download name */
export const getDownloadName = (type: mimeType) => {
    const extension = type.split('/')[1].substring(0, type.indexOf(';'))
    return 'Recording_' + new Date().toISOString().replace(/[\:\.]/g, '-') + '.' + extension
}