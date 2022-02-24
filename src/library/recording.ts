//  Library
import { writable } from "svelte/store";

export const state = writable<RecordingState | "">("")

function createCountdown() {
    const { subscribe, set, update } = writable(-1)

    async function start(n: number = 3) {
        set(n);
        const id = setInterval(() => {
            update(ctd => ctd - 1)
        }, 1000);
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                clearInterval(id)
                resolve()
            }, (n * 1000) + 150)    //  Give it n seconds + some change to ensure ctd goes to zero first
        })
    }

    return {
        subscribe,
        start
    }

}

export const countdown = createCountdown()