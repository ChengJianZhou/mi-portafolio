import { ContactHero } from "../components/Contact/ContactHero";
import { ContactInfo } from "../components/Contact/ContactInfo";
import { ContactForm } from "../components/Contact/ContactForm";
import "../styles/contact.css";

export default function ContactPage() {
  return (
    <main className="contact">
      <ContactHero />
      <div className="contact-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}