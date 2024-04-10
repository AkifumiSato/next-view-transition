import { css } from "../../../styled-system/css";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={css({
        fontSize: "4xl",
        fontWeight: "bold",
      })}
    >
      {children}
    </h1>
  );
}
