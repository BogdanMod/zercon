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
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em]">
          ZERCON
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/products" className="transition-colors hover:text-foreground">
            Продукты
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            О компании
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
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
