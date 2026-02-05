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
      <section className="container pt-14 md:pt-24">
        <AnimatedIn>
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
              Built from Zero Context
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl text-balance">
              Zercon
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Системы без предположений. Мы фиксируем критерии, строим модели и
              проверяем их на реальности.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Запросить доступ</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/products">Посмотреть продукты</Link>
              </Button>
            </div>
          </div>
        </AnimatedIn>
      </section>

      <section className="container mt-16 md:mt-20">
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
      </section>

      <section className="container mt-16 md:mt-20">
        <AnimatedIn>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Продукты</h2>
              <p className="text-sm text-muted-foreground">
                Два направления. Оба в активной разработке.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/products">Все продукты</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "BotKit",
                text: "Конструктор Telegram-ботов для малого бизнеса. Без кода. Быстрый запуск.",
                href: "/products/botkit",
              },
              {
                title: "OptionMap",
                text: "Карта опциональности для стратегических и продуктовых решений.",
                href: "/products/optionmap",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>{item.title}</CardTitle>
                    <Badge variant="outline">В разработке</Badge>
                  </div>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={item.href}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedIn>
      </section>

      <section className="container mt-16 md:mt-20">
        <AnimatedIn>
          <h2 className="text-2xl font-semibold">Как мы работаем</h2>
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
      </section>

      <section className="container mt-16 md:mt-20">
        <AnimatedIn>
          <h2 className="text-2xl font-semibold">FAQ</h2>
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
      </section>

      <section className="container mt-16 md:mt-20">
        <AnimatedIn>
          <div className="rounded-2xl border bg-background p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
                  Финальный запрос
                </p>
                <h2 className="text-2xl font-semibold">Расскажите о задаче</h2>
                <p className="text-sm text-muted-foreground">
                  Мы ответим с условиями пилота, сроками и требованиями к данным.
                </p>
              </div>
              <LeadForm submitLabel="Отправить заявку" />
            </div>
          </div>
        </AnimatedIn>
      </section>
    </div>
  );
}
