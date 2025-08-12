'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
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
                  <a
                    href="tel:+491630295106"
                    className="text-green-700 hover:text-green-800 font-medium transition-all duration-300 hover:scale-105"
                  >
                    Tel. +491630295106
                  </a>
                  <br />
                  <a
                    href="mailto:verkauf@manfred-heu-stroh.de"
                    className="text-green-700 hover:text-green-800 text-sm transition-all duration-300 hover:scale-105"
                  >
                    verkauf@manfred-heu-stroh.de  
                  </a> <br />
                  <a
                    href="mailto:info@manfred-heu-stroh.de"
                    className="text-green-700 hover:text-green-800 text-sm transition-all duration-300 hover:scale-105"
                  >
                    info@manfred-heu-stroh.de  
                  </a>
                  
                  
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
            {/* Bestellung */}
            <div className="hover-lift">
              <div className="mb-4">
                <Phone className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('footer.order')}</h3>
              <a
                href="tel:+491630295106"
                className="text-lg font-medium hover:text-green-200 transition-all duration-300 hover:scale-105"
              >
                011630295106
              </a>
            </div>

            {/* Address */}
            <div className="hover-lift">
              <div className="mb-4">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">MANFRED Heu und Stroh</h3>
              <div className="space-y-1">
                <p>Pariner Berg 18</p>
                <p>23611 Bad Schwartau</p>
              </div>
            </div>

            {/* Email */}
            <div className="hover-lift">
              <div className="mb-4">
                <Mail className="w-8 h-8 mx-auto mb-2 text-white transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('footer.email')}</h3>
              <a
                href="mailto:info@manfred-heu-stroh.de"
                className="hover:text-green-200 transition-all duration-300 hover:scale-105"
              >
                info@manfred-heu-stroh.de
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      
    </footer>
  )
}
