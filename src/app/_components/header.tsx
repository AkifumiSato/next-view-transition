"use client";

import { usePathname } from "next/navigation";
import { AnimationLink } from "~/app/_components/animation-link";
import { css } from "../../../styled-system/css";

const navigationTextStyle = css({
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
          <span className={navigationTextStyle}>
            Next.js with View Transitions Demo
          </span>
        ) : (
          <AnimationLink href="/" className={navigationTextStyle}>
            {"← "}Back to Top page
          </AnimationLink>
        )}
      </div>
    </header>
  );
}
