import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <p className="eyebrow">Контакты</p>
      <h2>Есть задача с интерфейсом? Давайте обсудим.</h2>
      <p className={styles.note}>
        Готов рассмотреть долгосрочное сотрудничество и трудоустройство.
      </p>
      <div className={styles.links}>
        <a
          className={styles.primaryLink}
          href="https://t.me/Vlad_Fomii"
          target="_blank"
          rel="noreferrer"
        >
          Написать в Telegram <span className={styles.arrow} aria-hidden="true">→</span>
        </a>
        <a className={styles.secondaryLink} href="mailto:fominvladosik@gmail.com">
          fominvladosik@gmail.com
        </a>
      </div>
    </section>
  );
}
