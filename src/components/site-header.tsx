import Link from "next/link";
import { Logo } from "@/components/brand/logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Logo animate />
        <div className="nav-links">
          <Link href="/#what">Что мы делаем</Link>
          <Link href="/#products">Продукты</Link>
          <Link href="/#process">Как мы работаем</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div className="nav-actions">
          <Link className="text-link" href="/products">
            Продукты
          </Link>
          <Link className="text-link" href="/about">
            О компании
          </Link>
          <Link className="button primary" href="/contact">
            Контакты
          </Link>
        </div>
      </nav>
    </header>
  );
}

