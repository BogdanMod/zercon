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
              <Button variant="outline" size="sm" className="md:hidden">
                Меню
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-base uppercase tracking-[0.3em] text-muted-foreground">
                  Навигация
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 text-sm">
                <Link href="/products" className="text-foreground">
                  Продукты
                </Link>
                <Link href="/about" className="text-foreground">
                  О компании
                </Link>
                <Link href="/contact" className="text-foreground">
                  Контакты
                </Link>
                <Button asChild>
                  <Link href="/contact">Запросить доступ</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
