import { css } from "../../styled-system/css";
import { PageTitle } from "./_components/page-title";
import { PostCard } from "./_components/post-card";
import { getAllPosts } from "./_fetcher/posts";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      <PageTitle>Post gallery</PageTitle>
      <div
        className={css({
          paddingTop: 5,
        })}
      >
        <ul
          className={css({
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          })}
        >
          {posts.map((post) => (
            <li key={post.title}>
              <PostCard
                href={`/posts/${post.id}`}
                title={post.title}
                imageSrc={post.imageSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
