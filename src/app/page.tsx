"use client";

import Link from "next/link";

import { AnimatedHero, AnimatedIn, AnimatedProduct } from "@/components/animated-in";
import { Button } from "@/components/ui/button";
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
        <div className="container pt-28 md:pt-40 pb-20 md:pb-32">
          <AnimatedHero>
            <div className="space-y-10">
              <p className="text-xs uppercase tracking-[0.7em] text-muted-foreground font-mono">
                Built from Zero Context
              </p>
              <div className="space-y-6">
                <h1 className="text-6xl font-semibold tracking-tight md:text-8xl text-balance font-heading">
                  Zercon
                </h1>
                <p className="text-2xl font-heading text-foreground">
                  Systems without assumptions.
                </p>
                <p className="text-base text-muted-foreground md:text-lg">
                  Инструменты для автоматизации и принятия решений.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button asChild>
                  <Link href="/contact">Получить ранний доступ</Link>
                </Button>
                <Link
                  href="/products"
                  className="text-xs uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground"
                >
                  Смотреть продукты
                </Link>
              </div>
              <div className="h-px w-full bg-border" />
            </div>
          </AnimatedHero>
        </div>
      </section>

      <section className="section-muted mt-12 md:mt-16">
        <div className="container py-16 md:py-24">
          <AnimatedIn>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Ясность",
                  text: "Фиксируем критерии и правила до начала разработки.",
                },
                {
                  title: "Устойчивость",
                  text: "Проверяем решения на шум, ограничения и контекст.",
                },
                {
                  title: "Масштаб",
                  text: "Делаем модели, которые можно переносить между командами.",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
                    {item.title}
                  </p>
                  <p className="text-base text-foreground">{item.text}</p>
                </div>
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
                Products
              </p>
              <h2 className="text-3xl font-semibold font-heading">Модули платформы</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/products">Все продукты</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              {
                name: "BotKit",
                status: "Early access",
                line: "Конструктор Telegram-ботов без кода.",
                uses: ["Запись и бронь", "FAQ и ответы", "Заявки и статусы"],
                href: "/products/botkit",
              },
              {
                name: "OptionMap",
                status: "In development",
                line: "Карта опциональности для решений.",
                uses: ["Продуктовые ставки", "Стратегические выборы", "Опер. политики"],
                href: "/products/optionmap",
              },
            ].map((product) => (
              <AnimatedProduct key={product.name}>
                <div className="space-y-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  <span>{product.name}</span>
                  <span>{product.status}</span>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-heading text-foreground">{product.line}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {product.uses.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="h-px w-6 bg-border" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={product.href}
                    className="text-xs uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground"
                  >
                    Подробнее
                  </Link>
                </div>
              </AnimatedProduct>
            ))}
          </div>
        </AnimatedIn>
        </div>
      </section>

      <section className="section-contrast">
        <div className="container py-16 md:py-24">
        <AnimatedIn>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold font-heading">Как мы работаем</h2>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Process
            </span>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              "Формулируем критерии",
              "Строим модель",
              "Проверяем гипотезы",
              "Отдаём результат",
            ].map((step, index) => (
              <div
                key={step}
                className="space-y-3 border-t border-border pt-4 text-sm text-muted-foreground"
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
        <div className="container py-16 md:py-24">
        <AnimatedIn>
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground font-mono">
                Access
              </p>
              <h2 className="text-2xl font-semibold font-heading">Запрос доступа</h2>
              <p className="text-sm text-muted-foreground">
                Опишите задачу. Мы ответим с условиями пилота и критериями данных.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <LeadForm submitLabel="Отправить запрос" />
            </div>
          </div>
        </AnimatedIn>
        </div>
      </section>
    </div>
  );
}
