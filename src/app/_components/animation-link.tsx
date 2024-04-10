"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { documentTransition } from "~/app/_lib/document-transition";
import { useTransitionWithCompletion } from "~/app/_lib/use-transition-with-completion";

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
      documentTransition(() =>
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
