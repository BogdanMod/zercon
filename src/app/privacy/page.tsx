import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Короткая политика конфиденциальности Zercon.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold">Политика конфиденциальности</h1>
        <p className="text-sm text-muted-foreground">
          Мы собираем только те данные, которые вы отправляете через формы на
          сайте: имя, контакт и сообщение.
        </p>
        <p className="text-sm text-muted-foreground">
          Данные используются исключительно для ответа на запрос и обсуждения
          условий сотрудничества.
        </p>
        <p className="text-sm text-muted-foreground">
          Мы не передаём данные третьим лицам без вашего согласия и можем удалить
          их по запросу.
        </p>
        <p className="text-sm text-muted-foreground">
          Если у вас есть вопросы, напишите на hello@zercon.systems.
        </p>
      </div>
    </div>
  );
}
