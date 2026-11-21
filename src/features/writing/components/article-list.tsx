import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import type { Article } from "../types";
import styles from "./writing.module.css";

export function ArticleList({ articles, locale }: { articles: Article[]; locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <ul className={styles.list}>
      {articles.map((article) => (
        <li key={article.id}>
          <article className={styles.article}>
            <div>
              <h3>{article.status === "published" ? <Link href={article.href}>{article.title}</Link> : article.title}</h3>
              <p>{article.description}</p>
              <span className={styles.meta}>{article.categories.map((category) => messages.articleCategories[category]).join(" · ")}</span>
            </div>
            <div className={styles.date}>
              {article.status === "published" ? <>
                <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(article.publishedAt))}</time>
                <span>{article.readingMinutes} {messages.ui.minutesRead}</span>
              </> : <span>{messages.ui.preview}</span>}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
