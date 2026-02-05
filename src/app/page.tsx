import Link from "next/link";

import { AnimatedIn } from "@/components/animated-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LeadForm } from "@/components/lead-form";

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="section-surface">
        <div className="container pt-24 md:pt-36 pb-20 md:pb-28">
          <AnimatedIn>
            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div className="space-y-10">
                <p className="text-xs uppercase tracking-[0.6em] text-muted-foreground font-mono">
                  Built from Zero Context
                </p>
                <div className="space-y-6">
                  <h1 className="text-6xl font-semibold tracking-tight md:text-8xl text-balance font-heading">
                    Zercon
                  </h1>
                  <div className="h-px w-24 bg-border" />
                  <p className="text-lg text-muted-foreground text-pretty md:text-xl">
                    Системы без предположений. Строгие критерии. Проверяемые модели.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <Button asChild>
                    <Link href="/contact">Запросить доступ</Link>
                  </Button>
                  <Link
                    href="/products"
                    className="text-xs uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground"
                  >
                    Продукты
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border bg-background p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span>System status</span>
                  <span>Live</span>
                </div>
                <div className="mt-6 space-y-6">
                  <div className="h-28 rounded-xl border bg-muted/40" />
                  <div className="grid gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Модель</span>
                      <span>v0.8</span>
                    </div>
                    <div className="h-px w-full bg-border" />
                    <div className="flex items-center justify-between">
                      <span>Критерии</span>
                      <span>Зафиксированы</span>
                    </div>
                    <div className="h-px w-full bg-border" />
                    <div className="flex items-center justify-between">
                      <span>Гипотезы</span>
                      <span>Проверка</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedIn>
        </div>
      </section>

      <section className="section-muted mt-12 md:mt-16">
        <div className="container py-12 md:py-16">
        <AnimatedIn>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Ясность",
                text: "Фиксируем критерии и понятные правила, прежде чем строить систему.",
              },
              {
                title: "Устойчивость",
                text: "Проверяем решения на устойчивость к шуму и изменениям в данных.",
              },
              {
                title: "Масштаб",
                text: "Создаем структуры, которые можно переносить между командами и рынками.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader className="space-y-3">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </AnimatedIn>
        </div>
      </section>

      <section className="section-surface">
        <div className="container py-16 md:py-24">
        <AnimatedIn>
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground font-mono">
                Платформа
              </p>
              <h2 className="text-3xl font-semibold font-heading">Продуктовые модули</h2>
              <p className="text-sm text-muted-foreground">
                Два направления. Единая архитектура.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/products">Все продукты</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>BotKit</span>
                <span>Early access</span>
              </div>
              <div className="mt-6 grid gap-6">
                <div className="module-diagram h-24 rounded-lg border" />
                <p className="text-sm text-muted-foreground">
                  Конструктор Telegram-ботов. Один модуль — быстрый запуск сценариев.
                </p>
                <Link
                  href="/products/botkit"
                  className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
                >
                  Подробнее
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border bg-background p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>OptionMap</span>
                <span>В разработке</span>
              </div>
              <div className="mt-6 grid gap-6">
                <div className="module-map h-24 rounded-lg border" />
                <p className="text-sm text-muted-foreground">
                  Карта опциональности. Модуль для стратегических и продуктовых решений.
                </p>
                <Link
                  href="/products/optionmap"
                  className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </AnimatedIn>
        </div>
      </section>

      <section className="section-contrast">
        <div className="container py-16 md:py-24">
        <AnimatedIn>
          <h2 className="text-2xl font-semibold font-heading">Как мы работаем</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Формулируем критерии",
              "Строим модель",
              "Проверяем гипотезы",
              "Отдаём результат",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-lg border bg-background p-4 text-sm text-muted-foreground"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
                  0{index + 1}
                </p>
                <p className="mt-2 text-base text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </AnimatedIn>
        </div>
      </section>

      <section className="section-surface">
        <div className="container py-12 md:py-16">
        <AnimatedIn>
          <h2 className="text-2xl font-semibold font-heading">FAQ</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как получить доступ к продуктам?</AccordionTrigger>
              <AccordionContent>
                Оставьте заявку. Мы уточним сценарий и подтвердим участие в
                пилоте.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Какие сроки запуска?</AccordionTrigger>
              <AccordionContent>
                Зависит от задачи. Для BotKit — от 2 недель, для OptionMap —
                после пилотного интервью.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Есть ли интеграции?</AccordionTrigger>
              <AccordionContent>
                Базовые интеграции планируем на первый релиз. Приоритет зависит от
                заявок.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Стоимость</AccordionTrigger>
              <AccordionContent>По запросу, после уточнения сценария.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Данные и безопасность</AccordionTrigger>
              <AccordionContent>
                Минимизируем сбор данных. Логи доступны только вашей команде. Можно
                развернуть в приватном контуре.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Поддержка</AccordionTrigger>
              <AccordionContent>
                Каналы поддержки и SLA обсуждаем на старте проекта.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AnimatedIn>
        </div>
      </section>

      <section className="section-muted">
        <div className="container py-12 md:py-16">
        <AnimatedIn>
          <div className="rounded-2xl border bg-background p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
                  Финальный запрос
                </p>
                <h2 className="text-2xl font-semibold font-heading">Расскажите о задаче</h2>
                <p className="text-sm text-muted-foreground">
                  Мы ответим с условиями пилота, сроками и требованиями к данным.
                </p>
              </div>
              <LeadForm submitLabel="Отправить заявку" />
            </div>
          </div>
        </AnimatedIn>
        </div>
      </section>
    </div>
  );
}
