import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <p className="eyebrow">Контакты</p>
      <h2>Есть задача с интерфейсом? Давайте обсудим.</h2>
      <a
        className={styles.link}
        href="https://github.com/VladFomin17"
        target="_blank"
        rel="noreferrer"
      >
        Открыть GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
