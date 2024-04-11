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
                // @ts-ignore view-transition-name is valid props in browser
                "view-transition-name": "main-header-text",
              }),
              navigationTextStyle,
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
              })}
            >
              ←
            </span>
            <span
              className={cx(
                css({
                  paddingLeft: "10px",
                  // @ts-ignore view-transition-name is valid props in browser
                  "view-transition-name": "main-header-text-link",
                }),
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
