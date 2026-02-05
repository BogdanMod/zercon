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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Продукты",
  description:
    "BotKit и OptionMap. Два инженерных продукта Zercon для практических задач.",
};

const products = [
  {
    title: "BotKit",
    description:
      "Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.",
    href: "/products/botkit",
    status: "В разработке",
  },
  {
    title: "OptionMap",
    description:
      "Карта опциональности: модель, которая показывает где решения сужают будущее, а где сохраняют варианты.",
    href: "/products/optionmap",
    status: "В разработке",
  },
];

export default function ProductsPage() {
  return (
    <div className="section-surface">
      <div className="container py-16">
        <div className="max-w-2xl space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
          Каталог
        </p>
        <h1 className="text-3xl font-semibold text-balance">Продукты</h1>
        <p className="text-sm text-muted-foreground text-pretty">
          Два продукта с общим подходом: сначала критерии, затем реализация.
        </p>
      </div>

        <Tabs defaultValue="list" className="mt-10">
        <TabsList className="w-full justify-start gap-2 overflow-x-auto">
          <TabsTrigger value="list">Список</TabsTrigger>
          <TabsTrigger value="compare">Сравнение</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Card key={product.title}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>{product.title}</CardTitle>
                    <Badge variant="outline">{product.status}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={product.href}>Открыть</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="compare">
          <div className="mt-6 overflow-x-auto rounded-lg border">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-5 bg-muted text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <div className="px-4 py-3">Продукт</div>
              <div className="px-4 py-3">Для кого</div>
              <div className="px-4 py-3">Задача</div>
              <div className="px-4 py-3">Результат</div>
              <div className="px-4 py-3">Статус</div>
              </div>
              {[
                {
                  title: "BotKit",
                  audience: "Малый бизнес",
                  task: "Запуск Telegram-ботов без кода",
                  result: "Готовый бот и сценарии",
                  status: "В разработке",
                },
                {
                  title: "OptionMap",
                  audience: "Продуктовые и стратегические команды",
                  task: "Моделирование опциональности",
                  result: "Карта решений и отчёт",
                  status: "В разработке",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="grid grid-cols-5 border-t text-sm"
                >
                  <div className="px-4 py-3 font-medium">{row.title}</div>
                  <div className="px-4 py-3 text-muted-foreground">{row.audience}</div>
                  <div className="px-4 py-3 text-muted-foreground">{row.task}</div>
                  <div className="px-4 py-3 text-muted-foreground">{row.result}</div>
                  <div className="px-4 py-3">
                    <Badge variant="outline">{row.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
