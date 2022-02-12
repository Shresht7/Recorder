//  Library
import { writable } from "svelte/store";

function createTimer() {

    const { subscribe, set, update } = writable(0)

    /** Timer ID */
    let intervalID: NodeJS.Timer

    /** Current State of the Timer */
    let state: 'running' | 'paused' | 'stopped' = 'stopped'

    /** Starts the timer */
    function start() {
        set(0)  //  Reset value to zero
        intervalID = setInterval(() => {
            if (state !== 'running') { return }
            update((t) => t + 1)
        }, 1000)
        state = 'running'
    }

    /** Pause the timer */
    function pause() {
        state = 'paused'
    }

    /** Resume the timer */
    function resume() {
        state = 'running'
    }

    /** Stop the timer */
    function stop() {
        if (!intervalID) { return }
        clearInterval(intervalID)
        state = 'stopped'
    }

    /** Clears the timer value */
    function clear() {
        set(0)
    }

    return {
        subscribe,
        start,
        pause,
        resume,
        stop,
        clear
    }
}

//  ------------------------
export default createTimer()
//  ------------------------