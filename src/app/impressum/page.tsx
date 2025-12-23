import { useLanguage } from '@/contexts/LanguageContext'

export default function ImpressumPage() {
  const { t } = useLanguage()
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t('impressum.title')}</h1>
        <div className="w-24 h-1 bg-green-600 mb-8"></div>

        <div className="prose max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('impressum.legal_section_title')}</h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-gray-800 mb-2">{t('impressum.company_name')}</p>
            <p>{t('impressum.address.line1')}</p>
            <p>{t('impressum.address.zipcity')}</p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('impressum.contact_title')}</h3>
          <div className="mb-6">
            <p>{t('impressum.contact.phone')}</p>
            <p>{t('impressum.contact.email')}</p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('impressum.vat_title')}</h3>
          <p className="mb-6">{t('impressum.vat_body')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('impressum.responsible_title')}</h3>
          <div className="mb-6">
            <p>{t('impressum.responsible.name')}</p>
            <p>{t('impressum.address.line1')}</p>
            <p>{t('impressum.address.zipcity')}</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('impressum.disclaimer_title')}</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('impressum.liability_content_title')}</h3>
          <p className="mb-6">{t('impressum.liability_content_body')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('impressum.liability_links_title')}</h3>
          <p className="mb-6">{t('impressum.liability_links_body')}</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('impressum.copyright_title')}</h3>
          <p className="mb-6">{t('impressum.copyright_body')}</p>
        </div>
      </div>
    </div>
  )
}
