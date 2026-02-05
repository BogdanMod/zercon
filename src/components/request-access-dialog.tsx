"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/lead-form";

export function RequestAccessDialog({
  label = "Запросить доступ",
}: {
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Запросить доступ</DialogTitle>
          <DialogDescription>
            Коротко опишите задачу. Мы ответим с условиями и сроками.
          </DialogDescription>
        </DialogHeader>
        <LeadForm
          onSuccess={() => setOpen(false)}
          submitLabel="Отправить запрос"
        />
      </DialogContent>
    </Dialog>
  );
}
