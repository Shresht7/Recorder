// Type Definitions
import type { mimeType } from "src/types";

/** Extract extension from the mime-type */
export const getExtension = (type: mimeType) => type.split('/')[1].split(';')[0]