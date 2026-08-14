import { useLang } from "../../context/LangContext";
import { contact } from "../../data/contact";

export function ContactHero() {
  const { lang } = useLang();
  const c = contact[lang] ?? contact.en;

  return (
    <section className="contact-hero">
      <h1 className="contact-title">{c.title}</h1>
      <p className="contact-subtitle">{c.subtitle}</p>
    </section>
  );
}