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
        borderColor: "gray.5",
      })}
    >
      <Link
        href="/"
        className={css({
          fontSize: "xl",
          fontWeight: "bold",
          color: "gray.10",
        })}
      >
        Next.js with View Transitions Demo
      </Link>
    </header>
  );
}
