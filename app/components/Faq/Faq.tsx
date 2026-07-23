"use client";

import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.heading}>
        <p className="eyebrow">FAQ</p>
        <h2>Коротко о работе над проектом.</h2>
      </div>
      <div className={styles.questions}>
        {questions.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={styles.item} key={question}>
              <button
                className={styles.question}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {question}
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                id={`faq-answer-${index}`}
                aria-hidden={!isOpen}
              >
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      <SectionCta />
    </section>
  );
}
