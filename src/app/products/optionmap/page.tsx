import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OptionMap",
  description:
    "Карта опциональности: модель, которая показывает где решения делают будущее уже, а где оставляют варианты.",
};

export default function OptionMapPage() {
  return (
    <div className="section-surface">
      <div className="container py-16">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
            Продукт
          </p>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold font-heading">OptionMap</h1>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              In development
            </span>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground text-pretty">
            Карта опциональности: модель, которая показывает где решения делают
            будущее уже, а где оставляют варианты.
          </p>
        </div>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Запросить демо</Link>
        </Button>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold font-heading">Сценарии</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Продуктовые решения",
              text: "Выбор фич, очередность, минимально достаточные ставки.",
            },
            {
              title: "Стратегические ставки",
              text: "Оценка стратегий, которые сокращают или расширяют опции.",
            },
            {
              title: "Операционные политики",
              text: "Решения в процессах, которые ограничивают гибкость команды.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2 border-t border-border pt-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {item.title}
              </p>
              <p className="text-sm text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold font-heading">Фичи</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            "Граф состояний",
            "Критерии событий",
            "Вероятностные окна",
            "Триггеры",
            "Журнал решений",
            "Экспорт отчёта",
          ].map((item) => (
            <div key={item} className="text-sm text-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="border-t border-border pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
            Важно
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            OptionMap — инструмент поддержки решений. Он помогает структурировать
            выбор, но не гарантирует точность прогнозов.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="border-t border-border pt-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold font-heading">Запросить демо</h3>
              <p className="text-sm text-muted-foreground">
                Опишите контекст, чтобы мы подготовили демо и структуру карты.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
