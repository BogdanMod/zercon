import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Продукты Zercon</h1>
        <p>Два инструмента, которые помогают запускать решения без предположений.</p>
      </section>

      <section className="section light">
        <div className="section-head">
          <h2>Краткий обзор</h2>
          <p>Оба продукта — в разработке, доступ выдаётся по запросу.</p>
        </div>
        <div className="list-grid">
          <div className="list-card">
            <div className="product-title">
              <h3>BotKit</h3>
              <span className="pill ghost">В разработке</span>
            </div>
            <p>Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.</p>
            <ul>
              <li>Для команд без разработчиков</li>
              <li>Фокус на быстрый запуск</li>
              <li>Понятные сценарии общения</li>
            </ul>
          </div>
          <div className="list-card">
            <div className="product-title">
              <h3>OptionMap</h3>
              <span className="pill ghost">В разработке</span>
            </div>
            <p>Карта опциональности, где решения делают будущее уже или оставляют варианты.</p>
            <ul>
              <li>Для продуктовых и стратегических команд</li>
              <li>Фокус на моделирование решений</li>
              <li>Прозрачная фиксация критериев</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Сравнение</h2>
          <p>Быстрое понимание отличий по ключевым параметрам.</p>
        </div>
        <table className="comparison">
          <thead>
            <tr>
              <th>Параметр</th>
              <th>BotKit</th>
              <th>OptionMap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Для кого</td>
              <td>Малый бизнес, операционные команды</td>
              <td>Продукт, стратегия, операционные лиды</td>
            </tr>
            <tr>
              <td>Задача</td>
              <td>Запуск Telegram-ботов без кода</td>
              <td>Оценка решений через модель опциональности</td>
            </tr>
            <tr>
              <td>Формат результата</td>
              <td>Рабочие сценарии и бот в Telegram</td>
              <td>Модель, критерии, отчет</td>
            </tr>
            <tr>
              <td>Статус</td>
              <td>В разработке</td>
              <td>В разработке</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section light">
        <div className="section-head">
          <h2>BotKit</h2>
          <p>Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.</p>
        </div>
        <div className="list-grid">
          <div className="list-card">
            <h3>Сценарии</h3>
            <ul>
              <li>Запись и бронь</li>
              <li>Ответы на вопросы</li>
              <li>Заявки и оплата (интеграции в планах)</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>Фичи</h3>
            <div className="feature-grid">
              <div className="feature-tile">Визуальные блоки</div>
              <div className="feature-tile">Шаблоны</div>
              <div className="feature-tile">Переменные</div>
              <div className="feature-tile">Сегментация</div>
              <div className="feature-tile">Аналитика</div>
              <div className="feature-tile">Роли и доступ</div>
            </div>
          </div>
        </div>
        <div className="list-card" style={{ marginTop: "24px" }}>
          <h3>Дорожная карта</h3>
          <div className="roadmap">
            <div className="roadmap-item">Q1 — интеграции оплат</div>
            <div className="roadmap-item">Q2 — marketplace шаблонов</div>
            <div className="roadmap-item">Q3 — A/B сценарии</div>
          </div>
          <div style={{ marginTop: "16px" }}>
            <Link className="button primary" href="/contact">
              Запросить ранний доступ
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>OptionMap</h2>
          <p>
            Карта опциональности: модель, которая показывает где решения делают будущее уже, а где
            оставляют варианты.
          </p>
        </div>
        <div className="list-grid">
          <div className="list-card">
            <h3>Сценарии</h3>
            <ul>
              <li>Продуктовые решения</li>
              <li>Стратегические ставки</li>
              <li>Операционные политики</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>Фичи</h3>
            <div className="feature-grid">
              <div className="feature-tile">Граф состояний</div>
              <div className="feature-tile">Критерии событий</div>
              <div className="feature-tile">Вероятностные окна</div>
              <div className="feature-tile">Триггеры</div>
              <div className="feature-tile">Журнал решений</div>
              <div className="feature-tile">Экспорт отчёта</div>
            </div>
          </div>
        </div>
        <div className="notice" style={{ marginTop: "20px" }}>
          Важно: OptionMap — инструмент поддержки решений, он не гарантирует точность прогнозов.
        </div>
        <div style={{ marginTop: "16px" }}>
          <Link className="button primary" href="/contact">
            Запросить демо
          </Link>
        </div>
      </section>
    </>
  );
}

