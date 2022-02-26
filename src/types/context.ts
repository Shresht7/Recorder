export type recorderCtx = {
    startRecording: () => Promise<void>;
    stopRecording: () => void;
    pauseRecording: () => void;
    continueRecording: () => void;
};