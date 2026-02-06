import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Контакты</h1>
        <p>Оставьте запрос — мы ответим в течение рабочего дня.</p>
      </section>

      <section className="section light">
        <div className="contact-grid">
          <div className="form-card">
            <h3>Форма запроса</h3>
            <ContactForm />
          </div>
          <div className="form-card alt-contacts">
            <h3>Альтернативные контакты</h3>
            <p>Email: hello@zercon.example</p>
            <p>Telegram: @zercon</p>
            <p>Мы отвечаем на сообщения в течение 24 часов.</p>
          </div>
        </div>
      </section>
    </>
  );
}

