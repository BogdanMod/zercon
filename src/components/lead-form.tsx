"use client";

import * as React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const leadSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  contact: z.string().min(3, "Укажите email или Telegram"),
  message: z.string().min(10, "Опишите задачу или контекст"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Нужно согласие с политикой" }),
  }),
  company: z.string().optional(),
});

type LeadValues = z.infer<typeof leadSchema>;

export function LeadForm({
  className,
  submitLabel = "Отправить",
  onSuccess,
}: {
  className?: string;
  submitLabel?: string;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setError,
  } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
      consent: false,
      company: "",
    },
  });

  const onSubmit = async (values: LeadValues) => {
    if (values.company) {
      setError("company", { message: "" });
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      toast.success("Запрос отправлен. Мы свяжемся с вами.");
      reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      toast.error("Не удалось отправить запрос. Попробуйте позже.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
    >
      <div className="grid gap-2">
        <label className="text-sm" htmlFor="name">
          Имя
        </label>
        <Input
          id="name"
          placeholder="Ирина П."
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <label className="text-sm" htmlFor="contact">
          Email или Telegram
        </label>
        <Input
          id="contact"
          placeholder="hello@company.ru или @telegram"
          autoComplete="email"
          inputMode="email"
          {...register("contact")}
        />
        {errors.contact && (
          <p className="text-xs text-destructive">{errors.contact.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <label className="text-sm" htmlFor="message">
          Сообщение
        </label>
        <Textarea
          id="message"
          placeholder="Коротко о цели, сроках, масштабе."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <Input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>
      <div className="flex items-start gap-2">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <Checkbox
              id="consent"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          Я согласен с{" "}
          <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">
            политикой конфиденциальности
          </Link>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-destructive" aria-live="polite">
          {errors.consent.message}
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-destructive">
          Возникла ошибка. Попробуйте позже.
        </p>
      )}
      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : submitLabel}
      </Button>
    </form>
  );
}
