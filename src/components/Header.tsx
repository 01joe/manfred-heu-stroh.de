'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top bar with phone number */}
      <div className="hidden md:block bg-gray-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{t('header.order')}</span>
            <Phone className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
            <a
              href="tel:+491630295106"
              className="text-green-700 font-semibold hover:text-green-800 transition-all duration-300 hover:scale-105"
            >
              {t('footer.phone_display')}
            </a>
          </div>

          {/* Language Switcher in top bar */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover-lift">
            <div className="flex items-center">
              <div className="w-12 h-8 bg-gradient-to-r from-yellow-500 to-green-600 mr-3 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-green-500 to-green-700 transform skew-x-12 transition-transform duration-300 hover:scale-110"></div>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-xl font-bold text-gray-800">{t('branding.name')}</div>
                <div className="text-sm text-gray-600 -mt-1">{t('branding.tagline')}</div>
                <div className="text-xs text-gray-500">{t('branding.since')}</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105 link-hover"
            >
              {t('nav.start')}
            </Link>
            <Link
              href="/kaufen/"
              className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105 link-hover"
            >
              {t('nav.buy')}
            </Link>
            <Link
              href="/verkaufen/"
              className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105 link-hover"
            >
              {t('nav.sell')}
            </Link>
            <a
              href="/#faq"
              onClick={(e) => handleSmoothScroll(e, '#faq')}
              className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105 link-hover"
            >
              {t('nav.faq')}
            </a>
            <a
              href="/#ansprechpartner"
              onClick={(e) => handleSmoothScroll(e, '#ansprechpartner')}
              className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:scale-105 link-hover"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:+491707729489"
              className="text-green-700 font-semibold text-sm hover:text-green-800 transition-all duration-300 hover:scale-105"
            >
              {t('footer.phone_display')}
            </a>

            {/* Mobile Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="transition-transform duration-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100 mt-4 pb-4'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-2 link-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.start')}
              </Link>
              <Link
                href="/kaufen/"
                className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-2 link-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.buy')}
              </Link>
              <Link
                href="/verkaufen/"
                className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-2 link-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.sell')}
              </Link>
              <a
                href="/#faq"
                onClick={(e) => handleSmoothScroll(e, '#faq')}
                className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-2 link-hover"
              >
                {t('nav.faq')}
              </a>
              <a
                href="/#ansprechpartner"
                onClick={(e) => handleSmoothScroll(e, '#ansprechpartner')}
                className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-2 link-hover"
              >
                {t('nav.contact')}
              </a>
              <a
                href="tel:+491707729489"
                className="text-green-700 font-semibold border-t pt-4 hover:text-green-800 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('footer.phone_display')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
