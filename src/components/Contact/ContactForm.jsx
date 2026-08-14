import { useState } from "react";
import { useLang } from "../../context/LangContext";
import { contact } from "../../data/contact";

const FORM_ENDPOINT = import.meta.env.DEV
  ? "https://mail.marcoszhou.dev/contact-dev"
  : "https://mail.marcoszhou.dev/contact";

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export function ContactForm() {
  const { lang } = useLang();
  const c = contact[lang] ?? contact.en;
  const f = c.form;

  const [status, setStatus] = useState(STATUS.IDLE);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    const formData = new FormData();
    formData.append("from", values.email);
    formData.append("firstName", values.name);
    formData.append("subject", `Nuevo mensaje de ${values.name} (portafolio)`);
    formData.append("body", values.message);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        // No fijar "Content-Type" a mano: el navegador lo hace solo,
        // incluyendo el boundary necesario para multipart/form-data.
      });

      if (res.ok) {
        setStatus(STATUS.SUCCESS);
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus(STATUS.ERROR);
      }
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-field">
        <label htmlFor="name" className="contact-form-label">
          {f.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={f.namePlaceholder}
          value={values.name}
          onChange={handleChange}
          className="contact-form-input"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="email" className="contact-form-label">
          {f.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={f.emailPlaceholder}
          value={values.email}
          onChange={handleChange}
          className="contact-form-input"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="message" className="contact-form-label">
          {f.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          value={values.message}
          onChange={handleChange}
          className="contact-form-textarea"
        />
      </div>

      <button
        type="submit"
        className="btn btn-solid contact-form-submit"
        disabled={status === STATUS.SENDING}
      >
        {status === STATUS.SENDING ? f.sending : f.submit}
      </button>

      {status === STATUS.SUCCESS && (
        <p className="contact-form-message contact-form-message--success">
          {f.success}
        </p>
      )}
      {status === STATUS.ERROR && (
        <p className="contact-form-message contact-form-message--error">
          {f.error}
        </p>
      )}
    </form>
  );
}