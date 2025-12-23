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
            <div className="lg:col-span-2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('contact.name')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder={t('contact.company')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="text"
                  placeholder={t('contact.company')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />


                <input
                  type="email"
                  placeholder={t('contact.email')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder={t('contact.phone')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="tel"
                  placeholder={t('contact.whatsapp')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="text"
                  placeholder={t('contact.address_full')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="text"
                  placeholder={t('contact.quantity')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="text"
                  placeholder={t('contact.street')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <input
                  type="text"
                  placeholder={t('contact.postcode_city')}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent md:col-span-2">
                  <option>{t('contact.interest')}</option>
                  <option>{t('contact.options.hay')}</option>
                  <option>{t('contact.options.straw')}</option>
                  <option>{t('contact.options.both')}</option>
                </select>
                <textarea
                  placeholder={t('contact.message_placeholder')}
                  rows={4}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent md:col-span-2"
                ></textarea>
                <div className="md:col-span-2">
                  <label className="flex items-start space-x-2 text-sm mb-4">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      {t('contact.privacy')}
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                  >
                    {t('contact.submit')}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('kaufen.order_via_phone')}</h3>

              <a
                href="tel:+491630295106"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
              >
                011630295106
              </a>
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
