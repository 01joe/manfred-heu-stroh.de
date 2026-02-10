"use client"

import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-100">
      {/* Contact Partners Section */}
      <div id="ansprechpartner" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Section Title */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('footer.partners.title')}
              </h2>
            </div>

            {/* Contact Cards Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Jan Müller */}
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover animate-slide-up">
                
                <p className="text-gray-600 mb-4">{t('footer.jan.role')}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/+491635458483"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:text-green-800 font-medium transition-all duration-300 hover:scale-105"
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.65C5.13 5.1 8.464 2.56 12.046 2.56c3.582 0 6.917 2.538 6.917 5.65 0 3.115-3.335 5.653-6.917 5.653zm0-1.168c2.96 0 5.359-2.109 5.359-4.695 0-2.586-2.398-4.695-5.359-4.695-2.96 0-5.359 2.109-5.359 4.695 0 2.586 2.398 4.695 5.359 4.695z"/>
                      </svg>
                    </a>
                  </div>
                  <br />
                  <a
                    href={`mailto:${t('footer.email_sales')}`}
                    className="text-green-700 hover:text-green-800 text-sm transition-all duration-300 hover:scale-105"
                  >
                    {t('footer.email_sales')}
                  </a> <br />
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Kontaktieren Sie uns */}
            <div className="hover-lift">
              <div className="mb-4">
                <Phone className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('footer.order')}</h3>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://wa.me/+491635458483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-green-200 transition-all duration-300 hover:scale-105"
                >
                  {t('footer.phone_display')}
                </a>
                <a
                  href="https://wa.me/+491635458483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-200 transition-all duration-300 hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.65C5.13 5.1 8.464 2.56 12.046 2.56c3.582 0 6.917 2.538 6.917 5.65 0 3.115-3.335 5.653-6.917 5.653zm0-1.168c2.96 0 5.359-2.109 5.359-4.695 0-2.586-2.398-4.695-5.359-4.695-2.96 0-5.359 2.109-5.359 4.695 0 2.586 2.398 4.695 5.359 4.695z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="hover-lift">
              <div className="mb-4">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('footer.company_display')}</h3>
              <div className="space-y-1">
                <p>{t('footer.address.line1')}</p>
                <p>{t('footer.address.zipcity')}</p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="hover-lift">
              <div className="mb-4">
                <Phone className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('footer.order')}</h3>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://wa.me/+491635458483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-200 transition-all duration-300 hover:scale-105"
                >
                  {t('footer.phone_display')}
                </a>
                <a
                  href="https://wa.me/+491635458483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-200 transition-all duration-300 hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.65C5.13 5.1 8.464 2.56 12.046 2.56c3.582 0 6.917 2.538 6.917 5.65 0 3.115-3.335 5.653-6.917 5.653zm0-1.168c2.96 0 5.359-2.109 5.359-4.695 0-2.586-2.398-4.695-5.359-4.695-2.96 0-5.359 2.109-5.359 4.695 0 2.586 2.398 4.695 5.359 4.695z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
