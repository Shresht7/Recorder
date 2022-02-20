//  Type Definitions
import type { mimeType } from "src/types";

/** Generates a random download name */
export const getDownloadName = (type: mimeType) => 'Recording_' + new Date().toISOString().replace(/[\:\.]/g, '-') + '.' + type.split('/')[1]