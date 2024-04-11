"use client";

import { usePathname } from "next/navigation";
import { AnimationLink } from "~/app/_components/animation-link";
import { css, cx } from "../../../styled-system/css";

const navigationTextStyle = css({
  display: "block",
  fontSize: "xl",
  fontWeight: "bold",
  color: "gray.1",
});

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 4,
        backgroundColor: "accent.8",
        // @ts-ignore view-transition-name is valid props in browser
        "view-transition-name": "main-header",
      })}
    >
      <div>
        {pathname === "/" ? (
          <span
            className={cx(
              css({
                display: "inline-flex",
              }),
              navigationTextStyle,
              "main-header-text",
            )}
          >
            Next.js with View Transitions Demo
          </span>
        ) : (
          <AnimationLink href="/" className={navigationTextStyle}>
            <span
              className={css({
                display: "inline-flex",
                width: "20px",
                marginRight: "10px",
              })}
            >
              ←
            </span>
            <span
              className={cx(
                css({
                  display: "inline-flex",
                }),
                "main-header-text",
              )}
            >
              Next.js with View Transitions Demo
            </span>
          </AnimationLink>
        )}
      </div>
    </header>
  );
}
