import styles from "./principle-list.module.css";

export function PrincipleList({ items }: { items: { title: string; description: string }[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}
    </ul>
  );
}
