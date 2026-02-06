import Link from "next/link";
import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Навигация</h4>
          <Link href="/#what">Что мы делаем</Link>
          <Link href="/#products">Продукты</Link>
          <Link href="/#process">Как мы работаем</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/contact">Контакты</Link>
        </div>
        <div>
          <h4>Продукты</h4>
          <Link href="/products">BotKit</Link>
          <Link href="/products">OptionMap</Link>
          <Link href="/products">Сравнение</Link>
          <Link href="/contact">Запросить доступ</Link>
          <Link href="/contact">Запросить демо</Link>
        </div>
        <div>
          <h4>Компания</h4>
          <Link href="/about">О компании</Link>
          <Link href="/about">Почему Zercon</Link>
          <Link href="/contact">Email</Link>
          <Link href="/contact">Telegram</Link>
          <Link href="/about">Принципы</Link>
        </div>
        <div>
          <h4>Юридическое</h4>
          <Link href="/#policy">Политика</Link>
          <Link href="/#terms">Условия</Link>
          <Link href="/#security">Безопасность</Link>
          <Link href="/#data">Данные</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <Logo size="footer" tone="light" className="logo logo-muted" />
        <div className="footer-actions">
          <Link className="button ghost" href="/products">
            Посмотреть продукты
          </Link>
          <Link className="button primary" href="/contact">
            Связаться
          </Link>
        </div>
      </div>
    </footer>
  );
}

