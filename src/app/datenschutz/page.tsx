"use client";

import { useLanguage } from '@/contexts/LanguageContext'

export default function DatenschutzPage() {
  const { t } = useLanguage()
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t('datenschutz.title')}</h1>
        <div className="w-24 h-1 bg-green-600 mb-8"></div>

        <div className="prose max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('datenschutz.section1_title')}</h2>
          <p className="mb-6">{t('datenschutz.section1_lead')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('datenschutz.general_notes')}</h3>
          <p className="mb-6">{t('datenschutz.general_notes_body')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('datenschutz.section2_title')}</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('datenschutz.privacy_title')}</h3>
          <p className="mb-6">{t('datenschutz.privacy_body')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('datenschutz.responsible_title')}</h3>
          <p className="mb-6">{t('datenschutz.responsible_body')}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('datenschutz.section3_title')}</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('datenschutz.cookies_title')}</h3>
          <p className="mb-6">{t('datenschutz.cookies_body')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('datenschutz.contactform_title')}</h3>
          <p className="mb-6">{t('datenschutz.contactform_body')}</p>
        </div>
      </div>
    </div>
  )
}
