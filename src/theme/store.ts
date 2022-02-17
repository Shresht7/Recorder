//  Library
import { writable } from "svelte/store";
import themes from './themes'
import { userPrefersDarkColorScheme } from '../helpers';

//  Type definitions
import type { theme, themeMode } from '../types'

function createThemeStore() {

    let _current: themeMode = userPrefersDarkColorScheme()
        ? "dark"
        : "light";

    /** Get the given theme */
    const getTheme = (name: themeMode) =>
        name in themes ? themes[name] : themes[_current];

    /** Get the current theme name */
    const getCurrentTheme = (): themeMode => _current

    //  ------------------------------------------------------
    const { subscribe, update } = writable(getTheme(_current))
    //  ------------------------------------------------------

    /** Toggle theme */
    function toggle() {
        _current = _current === "light" ? "dark" : "light";
        update((t) => ({ ...t, ...getTheme(_current) }));
        setRootColors(getTheme(_current))
    }

    /** Set CSS Variables */
    const setRootColors = (theme: theme) => {
        for (const [key, value] of Object.entries(theme)) {
            const property = `--clr-${key}`
            document.documentElement.style.setProperty(property, value)
        }
    }

    return {
        subscribe,
        getCurrentTheme,
        toggle,
        setRootColors
    }

}

//  -----------------------------
export default createThemeStore()
//  -----------------------------