import { createContext, useContext, useState } from 'react'
import { en } from './lang/en'
import { es } from './lang/es'
import { zh } from './lang/zh'

const translations = { en, es, zh }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = (key) => {
    const result = key.split('.').reduce((obj, k) => obj?.[k], translations[lang])
    return result ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}