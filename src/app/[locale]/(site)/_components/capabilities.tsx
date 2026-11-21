import { PageContainer } from "@/components/layout/page-container";
import { PrincipleList } from "@/components/shared/principle-list";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import type { HomeContent } from "@/content/pages/home/types";
import styles from "./home-sections.module.css";

export function Capabilities({ title, items, stackLabel }: { title: string; items: HomeContent["capabilities"]; stackLabel: string }) {
  return (
    <PageContainer className={styles.section}>
      <section aria-labelledby="capabilities-title">
        <SectionHeading title={title} id="capabilities-title" />
        <PrincipleList items={items} />
        <div className={styles.stack}><span>{stackLabel}</span><ul>{siteConfig.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
      </section>
    </PageContainer>
  );
}
