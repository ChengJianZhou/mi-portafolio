// Traducciones de toda la web en un solo sitio
export const translations = {
  en: {
    nav: {
      home:     'Home',
      projects: 'Projects',
      about:    'About',
      contact:  'Contact',
    }
  },
  es: {
    nav: {
      home:     'Inicio',
      projects: 'Proyectos',
      about:    'Sobre mí',
      contact:  'Contacto',
    }
  },
  zh: {
    nav: {
      home:     '首页',
      projects: '项目',
      about:    '关于我',
      contact:  '联系',
    }
  }
}

import { useState } from 'react'

export default function useLang() {
  // Inglés como idioma por defecto
  const [lang, setLang] = useState('en')

  // t('nav.home') → devuelve el texto en el idioma actual
  const t = (key) => {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[lang]) ?? key
  }

  return { lang, setLang, t }
}