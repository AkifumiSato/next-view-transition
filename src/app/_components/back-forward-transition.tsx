/// <reference types="navigation-api-types" />
"use client";
import { use, useEffect, useRef, useState, useTransition } from "react";
import { documentTransition } from "~/app/_lib/document-transition";

export function BackForwardTransition() {
  const [isPending, startTransition] = useTransition();
  const reactTransitionPromise = useRef<PromiseWithResolvers<void>>();
  const [viewTransitionPromise, setViewTransitionPromise] =
    useState<Promise<void>>();

  useEffect(() => {
    if (!isPending && reactTransitionPromise.current) {
      reactTransitionPromise.current.resolve();
      reactTransitionPromise.current = undefined;
    }
  }, [isPending]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    window.navigation?.addEventListener(
      "navigate",
      ({ navigationType }) => {
        if (navigationType !== "traverse") {
          return;
        }
        // `isPending: true`でrenderし、`reactTransitionPromise`を解決させることで
        // React TransitionのPromiseとして扱える
        startTransition(() => {});
        reactTransitionPromise.current = Promise.withResolvers();
      },
      { signal },
    );

    window.addEventListener(
      "popstate",
      () => {
        startTransition(() => {
          const { promise, resolve } = Promise.withResolvers<void>();
          setViewTransitionPromise(promise);
          documentTransition(() => {
            resolve();
            setViewTransitionPromise(undefined);
            return reactTransitionPromise.current.promise;
          });
        });
      },
      { signal },
    );
    return () => abortController.abort();
  }, []);

  if (!isPending && viewTransitionPromise) {
    use(viewTransitionPromise);
  }
  return null;
}
