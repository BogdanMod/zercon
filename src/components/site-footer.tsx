import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-foreground">Zercon — Zero Context Systems.</p>
          <p>Стратегические системы и продукты без предположений.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-foreground">
            Политика конфиденциальности
          </Link>
          <Link href="/products" className="hover:text-foreground">
            Продукты
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  );
}
