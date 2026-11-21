"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PreviewNotice } from "@/components/shared/preview-notice";
import { SectionHeading } from "@/components/shared/section-heading";
import { FilterChips } from "@/components/ui/filter-chips";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { articleCategories, type Article } from "../types";
import { ArticleList } from "./article-list";
import styles from "./writing.module.css";

export function ArticleCollection({ articles, locale }: { articles: Article[]; locale: Locale }) {
  const [selected, setSelected] = useState("all");
  const messages = getMessages(locale);
  const filtered = articles.filter((article) => selected === "all" || article.categories.some((category) => category === selected));
  const published = filtered
    .filter((article): article is Extract<Article, { status: "published" }> => article.status === "published")
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));
  const years = [...new Set(published.map((article) => article.publishedAt.slice(0, 4)))];
  const drafts = filtered.filter((article) => article.status === "draft");
  const options = [
    { id: "all", label: messages.ui.all, count: articles.length },
    ...articleCategories.map((id) => ({ id, label: messages.articleCategories[id], count: articles.filter((article) => article.categories.includes(id)).length })),
  ];
  return (
    <PageContainer className={styles.collection}>
      <FilterChips label={messages.ui.filterArticles} options={options} selected={selected} onChange={setSelected} controls="article-results" />
      <div className={styles.results} id="article-results">
        {articles.some((article) => article.status === "draft") && <PreviewNotice>{messages.ui.previewNotice}</PreviewNotice>}
        <p className={styles.srOnly} role="status">{filtered.length} {messages.ui.resultCount}</p>
        {years.map((year) => <section key={year} className={styles.group} aria-label={year}>
          <SectionHeading title={year} />
          <ArticleList articles={published.filter((article) => article.publishedAt.startsWith(year))} locale={locale} />
        </section>)}
        {drafts.length > 0 && <section className={styles.group} aria-labelledby="drafts-title">
          <SectionHeading title={messages.ui.drafts} id="drafts-title" />
          <ArticleList articles={drafts} locale={locale} />
        </section>}
        {!filtered.length && <p>{messages.ui.noResults}</p>}
      </div>
    </PageContainer>
  );
}
