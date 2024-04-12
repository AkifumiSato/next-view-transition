import {
  type TransitionFunction,
  useLayoutEffect,
  useRef,
  useTransition,
} from "react";

export function useTransitionWithCompletion() {
  const [isPending, startTransition] = useTransition();
  const pendingPromise = useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  useLayoutEffect(() => {
    if (!isPending && pendingPromise.current) {
      pendingPromise.current.resolve();
      pendingPromise.current = undefined;
    }
  }, [isPending]);

  useLayoutEffect(
    () => () => {
      if (pendingPromise.current) {
        // unmountされてもanimationされるようresolve
        pendingPromise.current.resolve();
        pendingPromise.current = undefined;
      }
    },
    [],
  );

  const startTransitionWithCompletion = (transition: TransitionFunction) => {
    const { promise, resolve, reject } = Promise.withResolvers<void>();
    pendingPromise.current = { resolve, reject };
    startTransition(transition);
    return promise;
  };

  return [isPending, startTransitionWithCompletion] as const;
}
