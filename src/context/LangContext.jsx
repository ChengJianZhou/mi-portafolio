import { createContext, useContext, useState } from 'react'

// Añade aquí todos los textos de la web
const translations = {
  en: {
    nav: {
      home:     'Home',
      projects: 'Projects',
      about:    'About',
      contact:  'Contact',
    },
    hero: {
      badge:   'Available for work',
      title:   'Hi, I\'m Marcos Zhou',
      role:    'Full Stack Developer',
      desc:    'Building web apps with React and Python. Passionate about Linux, Docker and infrastructure. Based in Madrid 🇪🇸',
      cta_primary:   'View projects',
      cta_secondary: 'Contact me',
    }
  },
  es: {
    nav: {
      home:     'Inicio',
      projects: 'Proyectos',
      about:    'Sobre mí',
      contact:  'Contacto',
    },
    hero: {
      badge:   'Disponible para trabajar',
      title:   'Hola, soy Marcos Zhou',
      role:    'Full Stack Developer',
      desc:    'Construyo apps web con React y Python. Apasionado por Linux, Docker e infraestructura. Basado en Madrid 🇪🇸',
      cta_primary:   'Ver proyectos',
      cta_secondary: 'Contáctame',
    }
  },
  zh: {
    nav: {
      home:     '首页',
      projects: '项目',
      about:    '关于我',
      contact:  '联系',
    },
    hero: {
      badge:   '正在找工作',
      title:   '你好，我是 Marcos Zhou',
      role:    'Full Stack 开发者',
      desc:    '使用 React 和 Python 构建 Web 应用。热爱 Linux、Docker 和基础设施。定居马德里 🇪🇸',
      cta_primary:   '查看项目',
      cta_secondary: '联系我',
    }
  }
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en') // inglés por defecto

  // t('hero.badge') → devuelve el texto en el idioma activo
  const t = (key) =>
    key.split('.').reduce((obj, k) => obj?.[k], translations[lang]) ?? key

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

// Hook para usar en cualquier componente
export function useLang() {
  return useContext(LangContext)
}