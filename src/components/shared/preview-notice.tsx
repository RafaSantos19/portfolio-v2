import styles from "./editorial.module.css";

export function PreviewNotice({ children }: { children: React.ReactNode }) {
  return <p className={styles.notice}>{children}</p>;
}
