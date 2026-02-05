# Zercon Marketing Site

Маркетинговый сайт для Zercon (Zero Context Systems) на Next.js, TypeScript и Tailwind CSS.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Структура

- `src/app` — страницы и API route.
- `src/components` — UI и композиционные компоненты.
- `src/components/ui` — shadcn/ui компоненты.
- `src/lib` — утилиты.
- `src/styles` — глобальные стили.

## Где менять тексты

- Главная: `src/app/page.tsx`
- Продукты: `src/app/products/page.tsx`
- BotKit: `src/app/products/botkit/page.tsx`
- OptionMap: `src/app/products/optionmap/page.tsx`
- О компании: `src/app/about/page.tsx`
- Контакты: `src/app/contact/page.tsx`
- Политика: `src/app/privacy/page.tsx`

## Формы

- Компонент формы: `src/components/lead-form.tsx`
- Мок API: `src/app/api/lead/route.ts`

## Темы

Переключатель темы использует `next-themes`, настроен в `src/app/layout.tsx` и `src/components/theme-toggle.tsx`.
