"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import de from '@/locales/de.json'
import en from '@/locales/en.json'
import nl from '@/locales/nl.json'
import fr from '@/locales/fr.json'

type Language = 'de' | 'en' | 'nl' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => TranslationValue
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type FAQItem = { question: string; answer: string }
type TranslationValue = string | FAQItem[]
type Translations = Record<string, TranslationValue>

const translations: Record<Language, Translations> = {
  de: de as Translations,
  en: en as Translations,
  nl: nl as Translations,
  fr: fr as Translations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && ['de', 'en', 'nl', 'fr'].includes(saved)) {
      setLanguage(saved as Language)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): TranslationValue => {
    const getNested = (obj: any, path: string) => {
      if (obj == null) return undefined
      // support dot-notation keys and direct keys containing dots
      if (Object.prototype.hasOwnProperty.call(obj, path)) return obj[path]
      const parts = path.split('.')
      let cur = obj
      for (const p of parts) {
        if (cur == null || typeof cur !== 'object') return undefined
        cur = cur[p]
      }
      return cur
    }

    const val = getNested(translations[language], key)
    if (typeof val === 'undefined') {
      // fallback to German locale if available
      const fallback = getNested(translations['de'], key)
      return typeof fallback === 'undefined' ? key : fallback
    }
    return val
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
