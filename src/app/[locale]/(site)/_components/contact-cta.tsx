import styles from "./home-sections.module.css";

export function ContactCta({ title, description, email, label }: {
  title: string;
  description: string;
  email: string | null;
  label: string;
}) {
  return (
    <section className={styles.contact} id="contact">
      <h2>{title}</h2>
      <div>
        <p>{description}</p>
        {email && <a className={styles.button} href={`mailto:${email}`}>{label}</a>}
      </div>
    </section>
  );
}
