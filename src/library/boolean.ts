//  Library
import { writable } from 'svelte/store'

function createBooleanStore(initial: boolean = false) {

    const { subscribe, set, update } = writable(initial)

    function toggle() {
        update(state => !state)
    }

    return {
        subscribe,
        set,
        update,
        toggle
    }

}

//  -----------------------------
export default createBooleanStore
//  -----------------------------