import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Services } from "./components/Services";

const navigation = [
  ["Обо мне", "#about"],
  ["Услуги", "#services"],
  ["Работы", "#portfolio"],
  ["Процесс", "#process"],
  ["FAQ", "#faq"],
  ["Контакты", "#contact"]
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Влад Фомин, на главную">
          ВФ<span>.</span>
        </a>
        <nav aria-label="Основная навигация">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Обсудить проект
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Frontend developer · React · Next.js</p>
        <h1>
          Интерфейсы, в которых
          <em> сложное</em> становится понятным.
        </h1>
        <p className="hero-copy">
          Проектирую и разрабатываю рабочие интерфейсы для продуктов, где
          важны логика, ясность и внимание к деталям.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#portfolio">
            Смотреть проекты
          </a>
          <a className="button button-ghost" href="#contact">
            Написать мне <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="proof-strip" aria-label="Фокус работы">
        <span>Админ-панели</span>
        <span>Дашборды</span>
        <span>Лендинги</span>
        <span>Системы с данными</span>
      </section>

      <About />
      <Services />
      <Portfolio />
      <Process />
      <Faq />
      <Contact />
    </main>
  );
}
