'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div>


      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
           style={{backgroundImage: "url('/images/foinsss.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="text-white animate-fade-in">
              <p className="text-sm uppercase tracking-wide mb-4 text-green-200">
                {t('hero.tagline')}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-scale-in">
              {/* Buy Card */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg card-hover">
                <h3 className="text-green-700 font-bold text-lg mb-2">
                  {t('hero.buy.title')}<br />
                  <span className="text-2xl">{t('hero.buy.action')}</span>
                </h3>
                <Link
                  href="/kaufen/"
                  className="inline-block btn-primary mt-4"
                >
                  {t('common.more_info')}
                </Link>
              </div>

              {/* Transport/Logistics Card */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg card-hover">
                <h3 className="text-green-700 font-bold text-lg mb-2">
                  {t('hero.sell.title')}<br />
                  <span className="text-2xl">{t('hero.sell.action')}</span>
                </h3>
                <Link
                  href="/verkaufen/"
                  className="inline-block btn-primary mt-4"
                >
                  {t('common.more_info')}
                </Link>
              </div>

              {/* Service Card */}
              <div className="bg-green-700 text-white p-6 rounded-lg card-hover">
                <h3 className="font-bold text-lg mb-2">
                  {t('hero.service.title')}<br />
                  <span className="text-2xl">{t('hero.service.action')}</span>
                </h3>
                <button
                  onClick={() => scrollToSection('#service')}
                  className="btn-secondary mt-4"
                >
                  {t('common.more_info')}
                </button>
              </div>

              {/* FAQ Card */}
              <div className="bg-gray-100 p-6 rounded-lg card-hover">
                <h3 className="text-gray-800 font-bold text-lg mb-2">
                  {t('hero.faq.title')}<br />
                  <span className="text-2xl">{t('hero.faq.action')}</span>
                </h3>
                <button
                  onClick={() => scrollToSection('#faq')}
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 mt-4"
                >
                  {t('common.more_info')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('company.title')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <h3 className="text-xl text-gray-600">{t('company.subtitle')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Buy Section */}
            <div className="animate-slide-up hover-lift">
              <img
                src="/images/image AC3.jpeg"
                alt={t('company.buy.title')}
                className="w-full h-64 object-cover rounded-lg mb-6 hover-grow"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('company.buy.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('company.buy.description')}
              </p>
              <Link
                href="/kaufen/"
                className="inline-flex items-center text-green-700 hover:text-green-800 font-medium transition-all duration-300 hover:translate-x-1"
              >
                {t('common.learn_more')} <span className="ml-2 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Transport/Logistics Section */}
            <div className="animate-slide-up hover-lift">
              <img
                src="/images/image AC4.jpeg"
                alt={t('company.sell.title')}
                className="w-full h-64 object-cover rounded-lg mb-6 hover-grow"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('company.sell.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('company.sell.description')}
              </p>
              <Link
                href="/verkaufen/"
                className="inline-flex items-center text-green-700 hover:text-green-800 font-medium transition-all duration-300 hover:translate-x-1"
              >
                {t('common.learn_more')} <span className="ml-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-green-700 text-white p-8 rounded-lg hover-lift animate-scale-in">
            <h3 className="text-2xl font-bold mb-6">{t('contact.title')}</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t('contact.name')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <input
                type="text"
                placeholder={t('contact.company')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <input
                type="tel"
                placeholder={t('contact.phone')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <input
                type="tel"
                placeholder={t('contact.whatsapp')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <input
                type="text"
                placeholder={t('contact.street')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <input
                type="text"
                placeholder={t('contact.city')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <input
                type="text"
                placeholder={t('contact.zip')}
                className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105"
              />
              <select className="p-3 rounded text-gray-800 transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:scale-105">
                <option>{t('contact.interest')}</option>
                <option>{t('contact.options.hay')}</option>
                <option>{t('contact.options.straw')}</option>
              </select>
              <div className="md:col-span-2">
                
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {t('contact.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section id="service" className="py-16 bg-cover bg-center relative"
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1471532027614-154d124ccf57?fm=jpg&q=80&w=3000')"}}>
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {t('service.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover animate-slide-up">
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-bold text-gray-800">{t('service.producers.title')}</h3>
              </div>
              <p className="text-gray-600">
                {t('service.producers.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-bold text-gray-800">{t('service.delivery.title')}</h3>
              </div>
              <p className="text-gray-600">
                {t('service.delivery.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start space-x-3 mb-4">
                <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-bold text-gray-800">{t('service.guarantee.title')}</h3>
              </div>
              <p className="text-gray-600">
                {t('service.guarantee.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('products.title')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('products.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Round Bales */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover animate-slide-up">
              <img
                src="/images/ronde vert.jpg"
                alt={t('products.round.alt')}
                className="w-full h-48 object-cover hover-grow"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('products.round.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('products.round.description')}
                </p>
              </div>
            </div>

            {/* Square Bales */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover animate-slide-up" style={{animationDelay: '0.2s'}}>
              <img
                src="/images/carré vert.jpg"
                alt={t('products.square.alt')}
                className="w-full h-48 object-cover hover-grow"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('products.square.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('products.square.description')}
                </p>
              </div>
            </div>

            {/* Premium Hay */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover animate-slide-up" style={{animationDelay: '0.4s'}}>
              <img
                src="/images/vip.png"
                alt={t('products.premium.alt')}
                className="w-full h-48 object-cover hover-grow"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('products.premium.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('products.premium.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-sm uppercase tracking-wide text-green-600 mb-2">
              {t('faq.tagline')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('faq.title')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('faq.description')}
            </p>
          </div>

          <div className="animate-slide-up">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </div>
  )
}
