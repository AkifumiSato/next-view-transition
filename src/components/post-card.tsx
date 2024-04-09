import Link from "next/link";
import { css } from "../../styled-system/css";

export function PostCard({
  href,
  title,
  imageSrc,
}: {
  href: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={href}
      className={css({
        display: "flex",
        flexDirection: "column",
        border: "1",
        borderRadius: "md",
        boxShadow: "md",
        overflow: "hidden",
        transition: "all 0.3s",
        _hover: {
          boxShadow: "xl",
          "& h3": {
            color: "gray.10",
          },
          "& img": {
            transform: "scale(1.05)",
          },
        },
      })}
    >
      <div
        className={css({
          width: "300px",
          height: "150px",
          overflow: "hidden",
        })}
      >
        <img
          src={imageSrc}
          alt={title}
          className={css({
            width: "300px",
            height: "150px",
            objectFit: "cover",
            transition: "all 0.3s",
          })}
          width={300}
          height={150}
        />
      </div>
      <h3
        className={css({
          fontSize: "lg",
          fontWeight: "bold",
          padding: 2,
          transition: "all 0.3s",
        })}
      >
        {title}
      </h3>
    </Link>
  );
}
