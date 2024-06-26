"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { documentTransition } from "~/app/_lib/document-transition";
import { useTransitionWithCompletion } from "~/app/_lib/use-transition-with-completion";
import { cx } from "../../../styled-system/css";

export function AnimationLink({
  children,
  href,
  className,
  viewTransitionNameClass,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  viewTransitionNameClass?: string;
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
    <Link
      {...props}
      href={href}
      onClick={onClick}
      // `view-transition-name`は画面内で一意である必要があるため、押下時付与
      className={cx(className, viewTransitionNameClass)}
    >
      {children}
    </Link>
  );
}
