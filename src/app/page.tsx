import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <p className="hero-kicker">Zercon</p>
          <h1>Системы без предположений.</h1>
          <p className="hero-subtitle">
            Мы строим продуктовые системы и модели, которые заменяют догадки измерениями.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Запросить доступ
            </Link>
            <Link className="button ghost" href="/products">
              Посмотреть продукты
            </Link>
          </div>
          <div className="metrics">
            <div className="metric">
              <div className="metric-value">2–4 недели</div>
              <div className="metric-label">пилот</div>
            </div>
            <div className="metric">
              <div className="metric-value">1 система</div>
              <div className="metric-label">единая модель</div>
            </div>
            <div className="metric">
              <div className="metric-value">0 догадок</div>
              <div className="metric-label">только критерии</div>
            </div>
          </div>
          <p className="hero-meta">Прозрачные критерии, измеримые результаты, ответственность за решения.</p>
        </div>
        <div className="hero-visual">
          <div className="glass-card">
            <div className="card-title">Zercon Platform</div>
            <p>Инструменты для системного принятия решений и быстрых запусков.</p>
            <div className="chip-row">
              <span className="chip">BotKit</span>
              <span className="chip">OptionMap</span>
              <span className="chip">Research</span>
            </div>
          </div>
          <div className="flow-board" aria-label="Модель решений">
            <div className="flow-title">OptionMap · Живая модель</div>
            <svg viewBox="0 0 520 300" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="nodeGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7b5cff" />
                  <stop offset="100%" stopColor="#ff86c8" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect x="40" y="60" width="140" height="64" rx="14" fill="#0f131d" stroke="#2b3140" />
              <rect x="210" y="20" width="140" height="64" rx="14" fill="#0f131d" stroke="#2b3140" />
              <rect x="210" y="140" width="140" height="64" rx="14" fill="#0f131d" stroke="#2b3140" />
              <rect x="380" y="92" width="100" height="64" rx="14" fill="#0f131d" stroke="#2b3140" />

              <path className="flow-line" d="M180 92 L210 52" />
              <path className="flow-line" d="M180 92 L210 172" />
              <path className="flow-line" d="M350 52 L380 124" />
              <path className="flow-line" d="M350 172 L380 124" />

              <circle className="flow-node" cx="180" cy="92" r="6" fill="url(#nodeGrad)" filter="url(#glow)" />
              <circle className="flow-node" cx="210" cy="52" r="6" fill="url(#nodeGrad)" filter="url(#glow)" />
              <circle className="flow-node" cx="210" cy="172" r="6" fill="url(#nodeGrad)" filter="url(#glow)" />
              <circle className="flow-node" cx="380" cy="124" r="6" fill="url(#nodeGrad)" filter="url(#glow)" />

              <text x="70" y="98" fill="#e8eaf0" fontSize="13" fontWeight="600">
                Вариант A
              </text>
              <text x="240" y="56" fill="#e8eaf0" fontSize="13" fontWeight="600">
                Вариант B
              </text>
              <text x="240" y="176" fill="#e8eaf0" fontSize="13" fontWeight="600">
                Вариант C
              </text>
              <text x="400" y="128" fill="#e8eaf0" fontSize="13" fontWeight="600">
                Фиксация
              </text>
            </svg>
          </div>
          <div className="gradient-orb" />
        </div>
      </section>

      <section className="section" id="what">
        <div className="section-head">
          <h2>Что мы делаем</h2>
          <p>Переводим продуктовые решения в проверяемые системы с понятными критериями успеха.</p>
        </div>
        <div className="three-col">
          <div className="feature">
            <div className="feature-icon gradient-1" />
            <h3>Снижаем неопределенность</h3>
            <p>Фиксируем гипотезы и превращаем их в измеримые эксперименты.</p>
          </div>
          <div className="feature">
            <div className="feature-icon gradient-2" />
            <h3>Ускоряем запуск</h3>
            <p>Выстраиваем процесс от идеи до результата без потери качества.</p>
          </div>
          <div className="feature">
            <div className="feature-icon gradient-3" />
            <h3>Делаем решения прозрачными</h3>
            <p>Отчеты и модели показывают, почему выбран именно этот путь.</p>
          </div>
        </div>
      </section>

      <div className="divider-line" aria-hidden="true" />

      <section className="section light" id="products">
        <div className="section-head">
          <h2>Продукты</h2>
          <p>Два ключевых направления, которые уже в разработке.</p>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-title">
              <h3>BotKit</h3>
              <span className="pill ghost">В разработке</span>
            </div>
            <p>Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.</p>
            <Link className="text-link" href="/products">
              Подробнее →
            </Link>
          </div>
          <div className="product-card">
            <div className="product-title">
              <h3>OptionMap</h3>
              <span className="pill ghost">В разработке</span>
            </div>
            <p>Карта опциональности для решений, где важно сохранить варианты будущего.</p>
            <Link className="text-link" href="/products">
              Подробнее →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-line" aria-hidden="true" />

      <section className="section" id="process">
        <div className="section-head">
          <h2>Как мы работаем</h2>
          <p>Понятный путь от запроса до результата без «магии».</p>
        </div>
        <div className="steps">
          <div className="step">
            <span>1</span> Формулируем критерии
          </div>
          <div className="step">
            <span>2</span> Строим модель
          </div>
          <div className="step">
            <span>3</span> Проверяем гипотезы
          </div>
          <div className="step">
            <span>4</span> Отдаём результат
          </div>
        </div>
      </section>

      <div className="divider-line" aria-hidden="true" />

      <section className="section" id="faq">
        <div className="section-head">
          <h2>FAQ</h2>
          <p>Короткие ответы на частые вопросы.</p>
        </div>
        <div className="faq">
          <details>
            <summary>Как получить доступ?</summary>
            <p>Оставьте заявку — мы свяжемся и подтвердим формат доступа.</p>
          </details>
          <details>
            <summary>Какие сроки запуска?</summary>
            <p>Пилот — от 2 до 4 недель, в зависимости от масштаба задачи.</p>
          </details>
          <details>
            <summary>Есть ли интеграции?</summary>
            <p>Интеграции подключаем по запросу, для BotKit — в планах.</p>
          </details>
          <details>
            <summary>Сколько стоит?</summary>
            <p>Стоимость рассчитывается по запросу.</p>
          </details>
          <details>
            <summary>Что с данными и безопасностью?</summary>
            <p>Работаем с минимально необходимыми данными и фиксируем правила доступа.</p>
          </details>
          <details>
            <summary>Какая поддержка?</summary>
            <p>Поддержка включена в пилот и расширяется на этап внедрения.</p>
          </details>
        </div>
      </section>

      <section className="section dark" id="contact">
        <div className="section-head">
          <h2>Готовы обсудить?</h2>
          <p>Свяжитесь с нами в Telegram и получите быстрый ответ.</p>
        </div>
        <div className="cta-row">
          <a className="button primary" href="https://t.me/ZER_CON" target="_blank" rel="noreferrer">
            Написать в Telegram
          </a>
          <label className="checkbox">
            <input type="checkbox" />
            <span>Согласен с политикой обработки данных</span>
          </label>
        </div>
      </section>
    </>
  );
}


