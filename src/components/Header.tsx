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
              href="tel:+49(0)1635458483"
              className="text-green-700 font-semibold hover:text-green-800 transition-all duration-300 hover:scale-105"
            >
              {t('footer.phone_display')}
            </a>
            <a
              href="https://wa.me/+491635458483"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 transition-all duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.65C5.13 5.1 8.464 2.56 12.046 2.56c3.582 0 6.917 2.538 6.917 5.65 0 3.115-3.335 5.653-6.917 5.653zm0-1.168c2.96 0 5.359-2.109 5.359-4.695 0-2.586-2.398-4.695-5.359-4.695-2.96 0-5.359 2.109-5.359 4.695 0 2.586 2.398 4.695 5.359 4.695z"/>
              </svg>
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
            <img 
              src="/images/logo.jpeg" 
              alt="Heu und Stroh Manfred Logo" 
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
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
                href="tel:+49(0)1635458483"
                className="text-green-700 font-semibold border-t pt-4 hover:text-green-800 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('footer.phone_display')}
              </a>
              <a
                href="https://wa.me/+491635458483"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-800 transition-all duration-300 hover:scale-110"
                title="WhatsApp"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mt-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.65C5.13 5.1 8.464 2.56 12.046 2.56c3.582 0 6.917 2.538 6.917 5.65 0 3.115-3.335 5.653-6.917 5.653zm0-1.168c2.96 0 5.359-2.109 5.359-4.695 0-2.586-2.398-4.695-5.359-4.695-2.96 0-5.359 2.109-5.359 4.695 0 2.586 2.398 4.695 5.359 4.695z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
