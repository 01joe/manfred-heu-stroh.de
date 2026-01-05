'use client'

import Link from 'next/link'
import { Check, Truck, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TransportLogisticsPage() {
  const { t } = useLanguage()
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
               style={{backgroundImage: "url('/images/image 1.jpeg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <p className="text-sm uppercase tracking-wide mb-4 text-green-200">
                {t('verkaufen.hero.tagline')}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('verkaufen.hero.headline')}
              </h1>
            </div>

            {/* Action Cards */}
              <div className="space-y-4">
              {/* Fleet Info Card */}
              <div className="bg-green-700 text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  {t('verkaufen.hero.our')}<br />
                  <span className="text-2xl">{t('verkaufen.hero.fleet')}</span>
                </h3>
                <a
                  href="#fleet-info"
                  className="inline-block bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors mt-4"
                >
                  {t('verkaufen.hero.cta_learn')}
                </a>
              </div>

              {/* Service Areas Card */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-gray-800 font-bold text-lg mb-2">
                  {t('verkaufen.hero.service_prefix')}<br />
                  <span className="text-2xl">{t('verkaufen.hero.service')}</span>
                </h3>
                <a
                  href="#service-areas"
                  className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mt-4"
                >
                  {t('verkaufen.hero.cta_overview')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('verkaufen.intro.title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {t('verkaufen.intro.description')}
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Fleet Services */}
            <div className="text-center">
              <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('verkaufen.fleet.own_title')}</h3>
              <p className="text-gray-600">
                {t('verkaufen.fleet.own_description')}
              </p>
            </div>

            {/* Coverage Area */}
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('verkaufen.fleet.coverage')}</h3>
              <p className="text-gray-600">
                {t('verkaufen.fleet.coverage_description')}
              </p>
            </div>

            {/* Timing */}
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('verkaufen.fleet.timing')}</h3>
              <p className="text-gray-600">
                {t('verkaufen.fleet.timing_description')}
              </p>
            </div>
          </div>

          {/* Logistics Solutions */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('verkaufen.logistics.title')}
            </h3>
            <p className="text-gray-600">{t('verkaufen.logistics.description')}</p>
          </div>
        </div>
      </section>

      {/* Fleet Information Section */}
      <section id="fleet-info" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('verkaufen.fleet.main_title')}</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fleet Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('verkaufen.fleet.details_title')}</h3>
              <p className="text-gray-600 mb-6">{t('verkaufen.fleet.details_description')}</p>

              <div className="space-y-4">
                {(t('verkaufen.fleet.features') as unknown as string[]).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('verkaufen.service_areas.title')}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Germany */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🇩🇪 {t('verkaufen.regions.de')}</h3>
              <p className="text-gray-600 mb-4">
                {t('verkaufen.regions.de_description')}
              </p>
              
            </div>

            {/* Austria & Switzerland */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🇦🇹🇨🇭 {t('verkaufen.regions.at_ch')}</h3>
              <p className="text-gray-600 mb-4">
                {t('verkaufen.regions.at_ch_description')}
              </p>
              
            </div>

            {/* Other European Countries */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🇪🇺 {t('verkaufen.regions.eu')}</h3>
              <p className="text-gray-600 mb-4">
                {t('verkaufen.regions.eu_description')}
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="space-y-4">
              <img
                src="/images/carré vert.jpg"
                alt={t('verkaufen.images.hay_alt')}
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1659257193040-de45f66216d2?fm=jpg&q=80&w=3000"
                alt={t('verkaufen.images.straw_alt')}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Advantages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t('verkaufen.advantages.title')}
              </h2>

              <div className="space-y-6">
                {(t('verkaufen.advantages.items') as unknown as string[]).map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{advantage}</p>
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
