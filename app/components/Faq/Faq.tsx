import styles from "./Faq.module.css";
import { SectionCta } from "../SectionCta";

const questions = [
  {
    question: "Сколько стоит?",
    answer:
      "Стоимость зависит от сложности проекта. После обсуждения задачи подготовлю точную оценку."
  },
  {
    question: "Какие сроки?",
    answer:
      "Небольшие лендинги — от нескольких дней. Более сложные веб-приложения — по согласованному плану."
  },
  {
    question: "Можно ли доработать существующий проект?",
    answer:
      "Да. Часто подключаюсь к уже готовым проектам и добавляю новый функционал."
  },
  {
    question: "Работаете только с дизайном из Figma?",
    answer:
      "Нет. Могу работать как по готовому дизайну, так и помочь определить структуру интерфейса."
  }
];

export function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.heading}>
        <p className="eyebrow">FAQ</p>
        <h2>Коротко о работе над проектом.</h2>
      </div>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => (
          <details className={styles.item} key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <SectionCta />
    </section>
  );
}
