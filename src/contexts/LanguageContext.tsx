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
  t: {
    (key: 'faq.items'): FAQItem[]
    (key: string): string
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type FAQItem = { question: string; answer: string }
type TranslationValue = string | FAQItem[]
type Translations = Record<string, unknown>

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

  function t(key: 'faq.items'): FAQItem[]
  function t(key: string): string
  function t(key: string) {
    const getNested = (obj: unknown, path: string): unknown => {
      if (obj == null) return undefined
      if (typeof obj === 'object') {
        const record = obj as Record<string, unknown>
        // support dot-notation keys and direct keys containing dots
        if (Object.prototype.hasOwnProperty.call(record, path)) return record[path]
        const parts = path.split('.')
        let cur: unknown = record
        for (const p of parts) {
          if (cur == null || typeof cur !== 'object') return undefined
          cur = (cur as Record<string, unknown>)[p]
        }
        return cur
      }
      return undefined
    }

    const val = getNested(translations[language], key)
    const resolved = typeof val === 'undefined'
      ? getNested(translations['de'], key)
      : val

    if (typeof resolved === 'undefined') {
      return key
    }

    if (Array.isArray(resolved)) {
      return resolved as FAQItem[]
    }

    return String(resolved)
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
