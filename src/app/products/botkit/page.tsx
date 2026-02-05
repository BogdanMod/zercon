import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BotKit",
  description:
    "Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.",
};

export default function BotKitPage() {
  return (
    <div className="section-surface">
      <div className="container py-16">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
            Продукт
          </p>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold font-heading">BotKit</h1>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Early access
            </span>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground text-pretty">
            Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.
          </p>
        </div>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Запросить ранний доступ</Link>
        </Button>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold font-heading">Сценарии</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Запись и бронь",
              text: "Принимает заявки, подтверждает слот, отправляет напоминания.",
            },
            {
              title: "Ответы на вопросы",
              text: "Собирает FAQ и выдаёт быстрые ответы в диалоге.",
            },
            {
              title: "Заявки и оплата",
              text: "Сбор заявок, статусы, интеграции оплаты — в планах.",
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
            "Визуальные блоки",
            "Шаблоны",
            "Переменные",
            "Сегментация",
            "Аналитика",
            "Роли и доступ",
          ].map((item) => (
            <div key={item} className="text-sm text-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold font-heading">Дорожная карта</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { title: "Q1", text: "Интеграции оплат" },
            { title: "Q2", text: "Marketplace шаблонов" },
            { title: "Q3", text: "A/B сценарии" },
          ].map((item) => (
            <div key={item.title} className="space-y-2 border-t border-border pt-4">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
                {item.title}
              </p>
              <p className="text-sm text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="border-t border-border pt-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold font-heading">Запросить ранний доступ</h3>
              <p className="text-sm text-muted-foreground">
                Расскажите о сценарии и масштабе. Мы ответим с условиями пилота.
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
