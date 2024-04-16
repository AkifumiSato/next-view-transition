import { notFound } from "next/navigation";
import { css, cx } from "../../../../styled-system/css";
import { PageTitle } from "../../_components/page-title";
import { getPostById } from "../../_fetcher/posts";

export default async function Page({
  params: { id },
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: Record<string, string>;
}) {
  const post = await getPostById(id);
  if (!post) {
    return notFound();
  }
  const clickedFromIndex = searchParams.clickedFromIndex;
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 3,
      })}
    >
      <PageTitle>{post.title}</PageTitle>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
        })}
      >
        <img
          src={post.imageSrc}
          alt={post.title}
          width={900}
          height={450}
          className={cx(
            clickedFromIndex && `post-card-image-${clickedFromIndex}`,
          )}
        />
      </div>
    </div>
  );
}
