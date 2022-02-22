
/** Formats the time for display */
export function format(time: number) {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time / 60) % 60);
    let hours = Math.floor((time / (60 * 60)) % 24);

    const hh = hours < 10 ? "0" + hours : hours;
    const mm = minutes < 10 ? "0" + minutes : minutes;
    const ss = seconds < 10 ? "0" + seconds : seconds;

    if (!hours) {
        return `${mm}:${ss}`;
    }

    return `${hh}:${mm}:${ss}`;
}