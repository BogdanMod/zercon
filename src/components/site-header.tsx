import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { RequestAccessDialog } from "@/components/request-access-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-brand tracking-[0.06em] text-foreground"
        >
          Zercon
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
          <Link
            href="/products"
            className="rounded-full px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
          >
            Продукты
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
          >
            О компании
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
          >
            Контакты
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <RequestAccessDialog />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="md:hidden uppercase tracking-[0.3em]"
              >
                Меню
              </Button>
            </DialogTrigger>
            <DialogContent className="h-[100svh] w-full max-w-none rounded-none border-l border-t-0 border-r-0 border-b-0 p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b px-6 py-5">
                  <DialogHeader>
                    <DialogTitle className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Навигация
                    </DialogTitle>
                  </DialogHeader>
                  <ThemeToggle />
                </div>
                <div className="flex flex-1 flex-col justify-between px-6 py-10">
                  <div className="space-y-6">
                    <Link
                      href="/products"
                      className="block text-2xl font-heading text-foreground"
                    >
                      Продукты
                    </Link>
                    <Link
                      href="/about"
                      className="block text-2xl font-heading text-foreground"
                    >
                      О компании
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-2xl font-heading text-foreground"
                    >
                      Контакты
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="h-px w-full bg-border" />
                    <Button asChild className="w-full">
                      <Link href="/contact">Запросить доступ</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
