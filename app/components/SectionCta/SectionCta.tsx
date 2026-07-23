import styles from "./SectionCta.module.css";

export function SectionCta() {
  return (
    <a className={styles.link} href="#contact">
      Написать мне <span aria-hidden="true">↗</span>
    </a>
  );
}
