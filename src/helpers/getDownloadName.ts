/** Generates a random download name */
export const getDownloadName = () => 'Recording_' + new Date().toISOString().replace(/[\:\.]/g, '-')