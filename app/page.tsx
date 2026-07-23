const navigation = [
  ["Обо мне", "#about"],
  ["Работы", "#portfolio"],
  ["Процесс", "#process"],
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

      <section className="section-placeholder" id="about">
        <p className="eyebrow">О сайте</p>
        <h2>Портфолио на основе реальных задач и интерфейсов.</h2>
      </section>

      <section className="section-placeholder" id="portfolio">
        <p className="eyebrow">Избранные работы</p>
        <h2>Проекты будут добавлены из подтверждённого описания.</h2>
      </section>

      <section className="section-placeholder" id="process">
        <p className="eyebrow">Процесс</p>
        <h2>От задачи и сценариев — к понятному интерфейсу.</h2>
      </section>

      <section className="contact-placeholder" id="contact">
        <p className="eyebrow">Контакты</p>
        <h2>Есть задача? Давайте обсудим её.</h2>
        <a className="button button-primary" href="mailto:hello@example.com">
          Написать на почту <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
