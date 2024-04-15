"use client";
import { use, useEffect, useState, useTransition } from "react";
import { documentTransition } from "~/app/_lib/document-transition";

export function BackForwardTransition() {
  const [pending, startTransition] = useTransition();
  const [promise, setPromise] = useState<Promise<void>>(null);

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    window.addEventListener(
      "popstate",
      () => {
        startTransition(() => {
          const { promise, resolve } = Promise.withResolvers<void>();
          setPromise(promise);
          documentTransition(() => {
            resolve();
            setPromise(null);
          });
        });
      },
      { signal },
    );
    return () => ac.abort();
  }, []);

  if (!pending && promise) {
    use(promise);
  }
  return null;
}
