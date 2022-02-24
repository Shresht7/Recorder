//  Library
import { writable } from 'svelte/store';

type Toast = {
    message: string,
    duration: number,
    timeout: NodeJS.Timeout
}

function createToastStore() {

    const { subscribe, set, update } = writable<Toast[]>([])

    /** Create a new toast */
    function create(message: string, duration: number = 3000): Toast {
        duration = duration || 1_000_000
        const timeout: NodeJS.Timeout = setTimeout(() => remove(timeout), duration)
        const newToast = { message, duration, timeout }
        update(toasts => ([...toasts, newToast]))
        return newToast
    }

    /** Remove a toast by it's timeout ID */
    function remove(timeout: NodeJS.Timeout) {
        update(toasts => toasts.filter(toast => toast.timeout !== timeout))
    }

    /** Remove all toasts from the toast-list */
    function clear() {
        set([])
    }

    return {
        subscribe,
        create,
        remove,
        clear
    }

}

//  -----------------------------
export default createToastStore()
//  -----------------------------