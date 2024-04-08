import { ArticleCard } from "~/components/article-card";
import { css } from "../../styled-system/css";
import { PageTitle } from "../components/page-title";

export default function Home() {
  return (
    <main>
      <PageTitle>Top page</PageTitle>
      <div
        className={css({
          paddingTop: 5,
        })}
      >
        <ul
          className={css({
            display: "flex",
            gap: 3,
          })}
        >
          <li>
            <ArticleCard title="Card title" description="Description of card" />
          </li>
          <li>
            <ArticleCard title="Card title" description="Description of card" />
          </li>
        </ul>
      </div>
    </main>
  );
}
