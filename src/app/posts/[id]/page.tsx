import { notFound } from "next/navigation";
import { css } from "../../../../styled-system/css";
import { PageTitle } from "../../_components/page-title";
import { getPostById } from "../../_fetcher/posts";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const post = await getPostById(id);
  if (!post) {
    return notFound();
  }
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
        <img src={post.imageSrc} alt={post.title} width={900} height={450} />
      </div>
    </div>
  );
}
