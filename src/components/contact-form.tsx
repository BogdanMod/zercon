"use client";

import { useState } from "react";

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    event.currentTarget.reset();
    window.setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя</label>
        <input id="name" name="name" type="text" placeholder="Ваше имя" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />

        <label htmlFor="message">Сообщение</label>
        <textarea id="message" name="message" placeholder="Кратко опишите задачу" required />

        <button className="button primary" type="submit">
          Отправить
        </button>
      </form>
      <div className={`toast ${showToast ? "show" : ""}`}>Спасибо! Запрос отправлен.</div>
    </>
  );
}

