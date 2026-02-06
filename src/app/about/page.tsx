export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>О компании</h1>
        <p>Наши принципы: first principles, ясность, измеримость.</p>
      </section>

      <section className="section light">
        <div className="section-head">
          <h2>Почему Zercon</h2>
          <p>Мы создаем продуктовые системы, где решение имеет измеримые основания.</p>
        </div>
        <div className="three-col">
          <div className="feature">
            <h3>First principles</h3>
            <p>Начинаем с первопринципов, убирая лишние допущения.</p>
          </div>
          <div className="feature">
            <h3>Ясность</h3>
            <p>Фиксируем критерии и делаем логику решений прозрачной.</p>
          </div>
          <div className="feature">
            <h3>Измеримость</h3>
            <p>Каждый шаг имеет метрику и понятный результат.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Почему Zercon — 4 причины</h2>
        </div>
        <div className="list-card">
          <ul>
            <li>Модели вместо предположений</li>
            <li>Быстрый пилот и честная проверка гипотез</li>
            <li>Системный результат: модель, критерии, выводы</li>
            <li>Сильная связка продукта и операций</li>
          </ul>
        </div>
      </section>

      <section className="section light">
        <div className="section-head">
          <h2>Контакты</h2>
          <p>Свяжитесь с нами удобным способом.</p>
        </div>
        <div className="list-card">
          <p>Email: hello@zercon.example</p>
          <p>Telegram: @zercon</p>
        </div>
      </section>
    </>
  );
}

