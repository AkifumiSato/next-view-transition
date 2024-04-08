import Link from "next/link";
import { css } from "../../styled-system/css";

export function Header() {
  return (
    <header
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 4,
        borderBottom: "1px solid",
        backgroundColor: "gray.3",
      })}
    >
      <Link
        href="/"
        className={css({
          fontSize: "xl",
          fontWeight: "bold",
          color: "gray.11",
        })}
      >
        Next.js with View Transitions
      </Link>
    </header>
  );
}
