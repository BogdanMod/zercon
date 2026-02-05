import type { Metadata } from "next";

import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Zercon (Zero Context Systems) строит инженерные системы с опорой на измеримость и ясность.",
};

export default function AboutPage() {
  return (
    <div className="section-surface">
      <div className="container py-16">
        <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
          Zero Context Systems
        </p>
        <h1 className="text-3xl font-semibold text-balance font-heading">
          О компании
        </h1>
        <p className="text-sm text-muted-foreground text-pretty">
          Zercon — это Zero Context Systems. Мы строим системы из первых
          принципов. Уважение к ограничениям, ясность критериев, измеримость
          результата.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold font-heading">Принципы</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["First principles", "Ясность", "Измеримость"].map((item) => (
            <Card key={item}>
              <CardContent className="p-6 text-sm text-muted-foreground">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold font-heading">Почему Zercon</h2>
        <ul className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <li>Фокус на критериях, не на презентациях.</li>
          <li>Минимальные допущения, максимальная проверяемость.</li>
          <li>Чёткие границы ответственности между людьми и системой.</li>
          <li>Понимаем влияние решений на будущее состояние бизнеса.</li>
        </ul>
      </section>

      <section className="mt-12">
        <Card>
          <CardContent className="space-y-2 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
              Контакты
            </p>
            <p className="text-sm text-muted-foreground">email: hello@zercon.systems</p>
            <p className="text-sm text-muted-foreground">telegram: @zercon</p>
          </CardContent>
        </Card>
      </section>
      </div>
    </div>
  );
}
