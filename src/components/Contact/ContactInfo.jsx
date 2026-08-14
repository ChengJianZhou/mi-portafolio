import { useLang } from "../../context/LangContext";
import { contact } from "../../data/contact";
import cv from "../../assets/cv/curriculum Chengjian Zhou.pdf";

const SOCIAL_LINKS = [
  {
    key: "github",
    href: "https://github.com/ChengJianZhou",
    icon: "github-icon",
    label: "GitHub",
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/chengjian-zhou",
    icon: "social-icon",
    label: "LinkedIn",
  },
];

export function ContactInfo() {
  const { lang } = useLang();
  const c = contact[lang] ?? contact.en;

  return (
    <div className="contact-info">
      <div className="contact-info-block">
        <span className="contact-info-label">{c.emailLabel}</span>
        <a className="contact-email" href={`mailto:${c.email}`}>
          {c.email}
        </a>
      </div>

      <div className="contact-info-block">
        <span className="contact-info-label">{c.socialLabel}</span>
        <div className="contact-social">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label={social.label}
            >
              <svg className="contact-social-icon" aria-hidden="true">
                <use href={`/icons.svg#${social.icon}`} />
              </svg>
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      <p className="contact-availability">{c.availabilityNote}</p>

      <a
        href={cv}
        download
        className="btn btn-outline contact-cv-btn"
      >
        {c.cvdownload}
      </a>
    </div>
  );
}