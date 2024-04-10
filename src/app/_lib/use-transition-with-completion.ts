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
    console.log({ isPending });
    if (!isPending && pendingPromise.current) {
      pendingPromise.current.resolve();
      pendingPromise.current = undefined;
    }
  }, [isPending]);

  useLayoutEffect(
    () => () => {
      // todo: アニメーション専用にhooksを再設計する
      if (pendingPromise.current) {
        // unmountされてもanimationされるようresolve
        pendingPromise.current.resolve();
        pendingPromise.current = undefined;
      }
    },
    [],
  );

  const startTransitionWithCompletion = (transition: TransitionFunction) => {
    const promise = new Promise<void>((resolve, reject) => {
      pendingPromise.current = { resolve, reject };
    });
    startTransition(transition);
    return promise;
  };

  return [isPending, startTransitionWithCompletion] as const;
}
