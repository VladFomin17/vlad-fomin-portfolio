import styles from "./SectionCta.module.css";

export function SectionCta() {
  return (
    <a className={styles.link} href="#contact">
      Написать мне <span className={styles.arrow} aria-hidden="true">→</span>
    </a>
  );
}
