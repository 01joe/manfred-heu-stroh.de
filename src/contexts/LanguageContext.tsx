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
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, any>> = {
  de: de as any,
  en: en as any,
  nl: nl as any,
  fr: fr as any,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && ['de', 'en', 'nl', 'fr'].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): any => {
    const val = translations[language][key as keyof typeof translations[typeof language]]
    return typeof val === 'undefined' ? key : val
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
