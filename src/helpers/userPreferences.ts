/** Returns whether the user prefers dark mode */
export const userPrefersDarkColorScheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;