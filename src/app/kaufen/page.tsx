'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function KaufenPage() {
  const { t } = useLanguage()
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1659257193040-de45f66216d2?fm=jpg&q=80&w=3000')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <p className="text-sm uppercase tracking-wide mb-4 text-green-200">
                {t('kaufen.hero.tagline')}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('kaufen.hero.headline')}
              </h1>
            </div>

            {/* Action Cards */}
              <div className="space-y-4">
              {/* Online Request Card */}
              <div className="bg-green-700 text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Online-<br />
                  <span className="text-2xl">{t('kaufen.hero.request')}</span>
                </h3>
                <a
                  href="#contact-form"
                  className="inline-block bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors mt-4"
                >
                  {t('kaufen.hero.cta_form')}
                </a>
              </div>

              {/* Quality Criteria Card */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-gray-800 font-bold text-lg mb-2">
                  Qualitäts-<br />
                  <span className="text-2xl">{t('kaufen.hero.criteria')}</span>
                </h3>
                <a
                  href="#quality-checklist"
                  className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mt-4"
                >
                  {t('kaufen.hero.cta_checklist')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('kaufen.info.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t('kaufen.info.description')}
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Heu Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('kaufen.heu')}</h3>
              <p className="text-gray-600">
                {t('kaufen.heu.description')}
              </p>
            </div>

            {/* Stroh Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('kaufen.stroh')}</h3>
              <p className="text-gray-600">
                {t('kaufen.stroh.description')}
              </p>
            </div>


          </div>

          {/* Alternative Products */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('kaufen.alternatives.title')}
            </h3>
            <p className="text-gray-600">
              {t('kaufen.alternatives.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('kaufen.order_form.title')}</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            

            {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('kaufen.order_via_phone')}</h3>

              <div className="flex gap-3">
                <a
                  href="tel:+49(0)1635458483" 
                  className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
                >
                  +49(0)1635458483
                </a>
                <a
                  href="https://wa.me/+491635458483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-3.582 0-6.917-2.536-6.917-5.65C5.13 5.1 8.464 2.56 12.046 2.56c3.582 0 6.917 2.538 6.917 5.65 0 3.115-3.335 5.653-6.917 5.653zm0-1.168c2.96 0 5.359-2.109 5.359-4.695 0-2.586-2.398-4.695-5.359-4.695-2.96 0-5.359 2.109-5.359 4.695 0 2.586 2.398 4.695 5.359 4.695z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">{t('service.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('service.producers.title')}</h3>
                  <p className="text-gray-600">
                    {t('service.producers.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('service.delivery.title')}</h3>
                  <p className="text-gray-600">
                    {t('service.delivery.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('service.guarantee.title')}</h3>
                  <p className="text-gray-600">
                    {t('service.guarantee.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Checklist */}
      <section id="quality-checklist" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('kaufen.quality.checklist_title')}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Heu Quality */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('kaufen.quality.hay_title')}
                  </h3>
              <p className="text-gray-600 mb-6">
                Es gibt mehrere Faktoren, an denen sich gute Heuqualität erkennen lässt.
              </p>

              <div className="space-y-4">
                {(t('kaufen.quality.hay_items') as unknown as string[]).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stroh Quality */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('kaufen.quality.straw_title')}
                  </h3>
              <p className="text-gray-600 mb-6">
                Wichtiger Hinweis: Es gibt unterschiedliche Sorten von Stroh, wobei jedes Stroh abhängig von der
                verarbeiteten Getreidesorte zum Füttern oder Streuen geeignet ist.
              </p>

              <div className="space-y-4">
                {(t('kaufen.quality.straw_items') as unknown as string[]).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
