"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useTransitionWithCompletion } from "~/app/_lib/use-transition-with-completion";

type TransitionCallback = (callback: () => Promise<void> | void) => void;

declare global {
  interface Document {
    startViewTransition?: TransitionCallback;
  }
}

const fallbackTransition: TransitionCallback = (callback) => callback();
const transition: TransitionCallback =
  typeof document !== "undefined"
    ? document.startViewTransition.bind(document) ?? fallbackTransition
    : fallbackTransition;

export function AnimationLink({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<typeof Link>) {
  const router = useRouter();
  const [_isPending, startTransitionWithCompletion] =
    useTransitionWithCompletion();
  const onClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      e.preventDefault();
      transition(() =>
        startTransitionWithCompletion(() => {
          router.push(href);
        }),
      );
    },
    [router, href, startTransitionWithCompletion],
  );

  return (
    <Link {...props} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
