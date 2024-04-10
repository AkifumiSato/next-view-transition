type TransitionCallback = (callback: () => Promise<void> | void) => void;

declare global {
  interface Document {
    startViewTransition?: TransitionCallback;
  }
}

const fallbackTransition: TransitionCallback = (callback) => callback();
export const documentTransition: TransitionCallback =
  typeof document !== "undefined"
    ? document.startViewTransition.bind(document) ?? fallbackTransition
    : fallbackTransition;
