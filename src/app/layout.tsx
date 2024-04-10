import { css } from "../../styled-system/css";
import { Header } from "./_components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
          })}
        >
          <div
            className={css({
              width: "100%",
              maxWidth: "1040px",
              padding: 4,
            })}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
