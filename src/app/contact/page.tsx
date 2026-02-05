import type { Metadata } from "next";

import { LeadForm } from "@/components/lead-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с командой Zercon. Мы ответим на запрос и обсудим задачи.",
};

export default function ContactPage() {
  return (
    <div className="section-surface">
      <div className="container py-16">
        <div className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-mono">
          Связь
        </p>
        <h1 className="text-3xl font-semibold text-balance font-heading">
          Контакты
        </h1>
        <p className="text-sm text-muted-foreground text-pretty">
          Оставьте заявку, и мы свяжемся с вами. Или используйте прямые контакты.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardContent className="p-6">
            <LeadForm submitLabel="Отправить запрос" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 p-6 text-sm text-muted-foreground">
            <p className="text-xs uppercase tracking-[0.3em] font-mono">
              Альтернативно
            </p>
            <p>email: hello@zercon.systems</p>
            <p>telegram: @zercon</p>
            <p className="pt-4">
              Мы отвечаем по будням в течение 1-2 рабочих дней.
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
