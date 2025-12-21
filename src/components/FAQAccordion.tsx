'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion() {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState<number[]>([])

  const raw = t('faq.items')
  const faqData: FAQItem[] = Array.isArray(raw) ? raw : []

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
          <button
            className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-gray-800 pr-4">{item.question}</span>
            <div className="text-green-600 flex-shrink-0 transition-transform duration-300">
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </button>

          <div className={`transition-all duration-300 ease-in-out ${
            openItems.includes(index)
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
