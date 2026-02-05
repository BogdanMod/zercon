import Link from "next/link";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <h1 className="text-3xl font-semibold">OptionMap</h1>
            <Badge variant="outline">В разработке</Badge>
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
        <h2 className="text-xl font-semibold">Сценарии</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
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
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Фичи</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Граф состояний",
            "Критерии событий",
            "Вероятностные окна",
            "Триггеры",
            "Журнал решений",
            "Экспорт отчёта",
          ].map((item) => (
            <div key={item} className="rounded-lg border bg-background p-4 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Card>
          <CardContent className="space-y-2 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
              Важно
            </p>
            <p className="text-sm text-muted-foreground">
              OptionMap — инструмент поддержки решений. Он помогает структурировать
              выбор, но не гарантирует точность прогнозов.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <Card>
          <CardContent className="flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Запросить демо</h3>
              <p className="text-sm text-muted-foreground">
                Опишите контекст, чтобы мы подготовили демо и структуру карты.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Оставить заявку</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
      </div>
    </div>
  );
}
