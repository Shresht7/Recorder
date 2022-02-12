//  Library
import { writable } from "svelte/store";

//  Type Definitions
import type { theme } from '../types'

function createThemeStore() {

    const { subscribe, set, update } = writable<theme>('light')

    /** Toggle theme */
    function toggle() {
        update(theme => {
            if (theme === 'light') {
                return 'dark'
            } else {
                return 'light'
            }
        })
    }

    return {
        subscribe,
        toggle
    }

}