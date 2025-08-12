'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'de' | 'en' | 'nl' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  de: {
    // Header
    'nav.start': 'START',
    'nav.buy': 'KAUFEN',
    'nav.sell': 'TRANSPORT / LOGISTIK',
    'nav.faq': 'HÄUFIGE FRAGEN',
    'nav.contact': 'ANSPRECHPARTNER',
    'header.order': 'Bestellung',

    // Hero Section
    'hero.tagline': 'HEU & STROH HANDEL MANFRED',
    'hero.title': 'Hohe Qualität zum fairen Preis mit Spitzenservice',
    'hero.buy.title': 'Heu und Stroh',
    'hero.buy.action': 'KAUFEN',
    'hero.sell.title': 'Transport &',
    'hero.sell.action': 'LOGISTIK',
    'hero.service.title': 'Spitzen',
    'hero.service.action': 'SERVICE',
    'hero.faq.title': 'Häufige',
    'hero.faq.action': 'FRAGEN',
    'common.more_info': 'MEHR INFOS',

    // Company Section
    'company.title': 'Heu & Stroh Handel – deutschlandweit, Österreich, Schweiz, Dänemark, Frankreich und ganz Europa.',
    'company.subtitle': 'Unsere Leistungen',
    'company.buy.title': 'Heu & Stroh kaufen',
    'company.buy.description': 'Sie wollen Heu & Stroh in hoher Qualität zum fairen Preis mit Spitzenservice kaufen? Dann sind Sie bei uns richtig. Wir verkaufen ganzjährig Heu und Stroh.',
    'company.sell.title': 'Transport & Logistik',
    'company.sell.description': 'Professionelle Logistiklösungen für Heu & Stroh. Mit eigenem Fuhrpark und erfahrenem Personal sorgen wir für zuverlässige Lieferungen deutschlandweit und in ganz Europa.',
    'common.learn_more': 'MEHR ERFAHREN',

    // Contact Form
    'contact.title': 'Beratung vereinbaren',
    'contact.name': 'Ihr Name',
    'contact.phone': 'Ihre Rufnummer',
    'contact.whatsapp': 'WhatsApp-Nummer',
    'contact.company': 'Name Ihres Unternehmens (optional)',
    'contact.street': 'Straße',
    'contact.city': 'Stadt',
    'contact.zip': 'Ihre PLZ',
    'contact.interest': 'Ich interessiere mich für...',
    'contact.privacy': 'Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.',
    'contact.privacy_link': 'Mehr zum Datenschutz',
    'contact.submit': 'ABSENDEN',

    // Service Section
    'service.title': 'Unser Spitzenservice',
    'service.producers.title': 'Unser Hof und die Qualität unserer Ernten',
    'service.producers.description': 'Dank konsequenter landwirtschaftlicher Praktiken und sorgfältiger Überwachung in jeder Phase des Anbaus garantieren wir Ihnen Stroh und Heu von höchster Qualität.',
    'service.delivery.title': 'Einfache Abwicklung',
    'service.delivery.description': 'Wir liefern das Heu & Stroh mit eigenem Fuhrpark – so wie Sie es brauchen – das ganze Jahr über. Zuverlässig und deutschlandweit. Bestellen Sie einfach telefonisch oder per Online-Anfrage.',
    'service.guarantee.title': 'Austausch-Garantie',
    'service.guarantee.description': 'Wir sorgen für eine einwandfreie Qualität. Sollte es doch mal eine Beanstandung oder Unzufriedenheit geben, tauschen wir die Ware umgehend aus – ohne Diskussion.',

    // FAQ Section
    'faq.tagline': 'HEU & STROH HANDEL – HÄUFIGE FRAGEN',
    'faq.title': 'Häufige Fragen zu Heu & Stroh',
    'faq.description': 'Sie haben Fragen rund um das Thema Heu und Stroh? Hier haben wir ein paar häufige Fragen bereits beantwortet.',

    // Footer
    'footer.partners.title': 'Ihre Ansprechpartner',
    'footer.jan.role': 'Ansprechpartner für Heu & Stroh-Käufer',
    'footer.friedrich.role': 'Ansprechpartner für Heu & Stroh-Verkäufer',
    'footer.niklas.role': 'Ansprechpartner vor Ort; Logistik & Außendienst',
    'footer.christa.role': 'Buchhaltung',
    'footer.order': 'Bestellung',
    'footer.email': 'E-Mail',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.imprint': 'Impressum',

    // Cookie Banner
    'cookie.message': 'Wir setzen auf unserer Website nur technisch erforderliche Cookies ein. Ihr Nutzerverhalten wird nicht analysiert.',
    'cookie.continue': 'Fortfahren',
    'cookie.privacy': 'Datenschutzerklärung',
  },
  en: {
    // Header
    'nav.start': 'HOME',
    'nav.buy': 'BUY',
    'nav.sell': 'TRANSPORT / LOGISTICS',
    'nav.faq': 'FAQ',
    'nav.contact': 'CONTACT',
    'header.order': 'Order',

    // Hero Section
    'hero.tagline': 'HAY & STRAW TRADING MANFRED',
    'hero.title': 'High Quality at Fair Prices with Premium Service',
    'hero.buy.title': 'Hay and Straw',
    'hero.buy.action': 'BUY',
    'hero.sell.title': 'Transport &',
    'hero.sell.action': 'LOGISTICS',
    'hero.service.title': 'Premium',
    'hero.service.action': 'SERVICE',
    'hero.faq.title': 'Frequently',
    'hero.faq.action': 'ASKED QUESTIONS',
    'common.more_info': 'MORE INFO',

    // Company Section
    'company.title': 'Hay & Straw Trading – Germany-wide, Austria, Switzerland, Denmark, France and all of Europe.,
    'company.subtitle': 'Our Services',
    'company.buy.title': 'Buy Hay & Straw',
    'company.buy.description': 'Do you want to buy hay & straw in high quality at fair prices with premium service? Then you are in the right place. We sell hay and straw year-round.',
    'company.sell.title': 'Transport & Logistics',
    'company.sell.description': 'Professional logistics solutions for hay & straw. With our own fleet and experienced personnel, we ensure reliable deliveries throughout Germany and Europe.',
    'common.learn_more': 'LEARN MORE',

    // Contact Form
    'contact.title': 'Schedule Consultation',
    'contact.name': 'Your Name',
    'contact.phone': 'Your Phone Number',
    'contact.whatsapp': 'WhatsApp Number',
    'contact.company': 'Company Name (optional)',
    'contact.street': 'Street',
    'contact.city': 'City',
    'contact.zip': 'Your ZIP Code',
    'contact.interest': 'I am interested in...',
    'contact.privacy': 'I agree to the processing of my data for contact purposes.',
    'contact.privacy_link': 'More about Privacy',
    'contact.submit': 'SUBMIT',

    // Service Section
    'service.title': 'Our Premium Service',
    'service.producers.title': 'Selected Producers',
    'service.producers.description': 'We know our selected producer farms personally and are on-site with our own qualified personnel. This way we can ensure high hay & straw quality for you.',
    'service.delivery.title': 'Simple Processing',
    'service.delivery.description': 'We deliver hay & straw with our own fleet – as you need it – all year round. Reliable and Germany-wide. Simply order by phone or online request.',
    'service.guarantee.title': 'Exchange Guarantee',
    'service.guarantee.description': 'We ensure perfect quality. Should there be a complaint or dissatisfaction, we immediately exchange the goods – without discussion.',

    // FAQ Section
    'faq.tagline': 'HAY & STRAW TRADING – FREQUENTLY ASKED QUESTIONS',
    'faq.title': 'Frequently Asked Questions about Hay & Straw',
    'faq.description': 'Do you have questions about hay and straw? Here we have already answered some frequently asked questions.',

    // Footer
    'footer.partners.title': 'Your Contact Partners',
    'footer.jan.role': 'Contact for Hay & Straw Buyers',
    'footer.friedrich.role': 'Contact for Hay & Straw Sellers',
    'footer.niklas.role': 'On-site Contact; Logistics & Field Service',
    'footer.christa.role': 'Accounting',
    'footer.order': 'Order',
    'footer.email': 'Email',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',

    // Cookie Banner
    'cookie.message': 'We only use technically necessary cookies on our website. Your user behavior is not analyzed.',
    'cookie.continue': 'Continue',
    'cookie.privacy': 'Privacy Policy',
  },
  nl: {
    // Header
    'nav.start': 'HOME',
    'nav.buy': 'KOPEN',
    'nav.sell': 'TRANSPORT / LOGISTIEK',
    'nav.faq': 'VEELGESTELDE VRAGEN',
    'nav.contact': 'CONTACT',
    'header.order': 'Bestelling',

    // Hero Section
    'hero.tagline': 'HOOI & STRO HANDEL MANFRED',
    'hero.title': 'Hoge Kwaliteit tegen Eerlijke Prijzen met Premium Service',
    'hero.buy.title': 'Hooi en Stro',
    'hero.buy.action': 'KOPEN',
    'hero.sell.title': 'Transport &',
    'hero.sell.action': 'LOGISTIEK',
    'hero.service.title': 'Premium',
    'hero.service.action': 'SERVICE',
    'hero.faq.title': 'Veelgestelde',
    'hero.faq.action': 'VRAGEN',
    'common.more_info': 'MEER INFO',

    // Company Section
    'company.title': 'Hooi & Stro Handel – Duitsland-breed', Oostenrijk, Zwitserland, Denemarken, Frankrijk en heel Europa.,
    'company.subtitle': 'Onze Diensten',
    'company.buy.title': 'Hooi & Stro Kopen',
    'company.buy.description': 'Wilt u hooi & stro van hoge kwaliteit tegen eerlijke prijzen met premium service kopen? Dan bent u bij ons aan het juiste adres. Wij verkopen het hele jaar door hooi en stro.',
    'company.sell.title': 'Transport & Logistiek',
    'company.sell.description': 'Professionele logistieke oplossingen voor hooi & stro. Met onze eigen vloot en ervaren personeel zorgen we voor betrouwbare leveringen door heel Duitsland en Europa.',
    'common.learn_more': 'MEER WETEN',

    // Contact Form
    'contact.title': 'Consultatie Plannen',
    'contact.name': 'Uw Naam',
    'contact.phone': 'Uw Telefoonnummer',
    'contact.whatsapp': 'WhatsApp Nummer',
    'contact.company': 'Bedrijfsnaam (optioneel)',
    'contact.street': 'Straat',
    'contact.city': 'Stad',
    'contact.zip': 'Uw Postcode',
    'contact.interest': 'Ik ben geïnteresseerd in...',
    'contact.privacy': 'Ik ga akkoord met de verwerking van mijn gegevens voor contactdoeleinden.',
    'contact.privacy_link': 'Meer over Privacy',
    'contact.submit': 'VERZENDEN',

    // Service Section
    'service.title': 'Onze Premium Service',
    'service.producers.title': 'Geselecteerde Producenten',
    'service.producers.description': 'Wij kennen onze geselecteerde producenten persoonlijk en zijn ter plaatse met ons eigen gekwalificeerd personeel. Zo kunnen we hoge hooi & stro kwaliteit voor u garanderen.',
    'service.delivery.title': 'Eenvoudige Verwerking',
    'service.delivery.description': 'Wij leveren hooi & stro met onze eigen vloot – zoals u het nodig heeft – het hele jaar door. Betrouwbaar en Duitsland-breed. Bestel gewoon telefonisch of via online aanvraag.',
    'service.guarantee.title': 'Uitwisselingsgarantie',
    'service.guarantee.description': 'Wij zorgen voor perfecte kwaliteit. Mocht er een klacht of ontevredenheid zijn, dan wisselen we de goederen onmiddellijk uit – zonder discussie.',

    // FAQ Section
    'faq.tagline': 'HOOI & STRO HANDEL – VEELGESTELDE VRAGEN',
    'faq.title': 'Veelgestelde Vragen over Hooi & Stro',
    'faq.description': 'Heeft u vragen over hooi en stro? Hier hebben we al enkele veelgestelde vragen beantwoord.',

    // Footer
    'footer.partners.title': 'Uw Contactpartners',
    'footer.jan.role': 'Contact voor Hooi & Stro Kopers',
    'footer.friedrich.role': 'Contact voor Hooi & Stro Verkopers',
    'footer.niklas.role': 'Ter Plaatse Contact; Logistiek & Buitendienst',
    'footer.christa.role': 'Boekhouding',
    'footer.order': 'Bestelling',
    'footer.email': 'Email',
    'footer.privacy': 'Privacybeleid',
    'footer.imprint': 'Colofon',

    // Cookie Banner
    'cookie.message': 'Wij gebruiken alleen technisch noodzakelijke cookies op onze website. Uw gebruikersgedrag wordt niet geanalyseerd.',
    'cookie.continue': 'Doorgaan',
    'cookie.privacy': 'Privacybeleid',
  },
  fr: {
    // Header
    'nav.start': 'ACCUEIL',
    'nav.buy': 'ACHETER',
    'nav.sell': 'TRANSPORT / LOGISTIQUE',
    'nav.faq': 'FAQ',
    'nav.contact': 'CONTACT',
    'header.order': 'Commande',

    // Hero Section
    'hero.tagline': 'COMMERCE DE FOIN ET PAILLE MANFRED',
    'hero.title': 'Haute Qualité à Prix Équitables avec Service Premium',
    'hero.buy.title': 'Foin et Paille',
    'hero.buy.action': 'ACHETER',
    'hero.sell.title': 'Transport &',
    'hero.sell.action': 'LOGISTIQUE',
    'hero.service.title': 'Service',
    'hero.service.action': 'PREMIUM',
    'hero.faq.title': 'Questions',
    'hero.faq.action': 'FRÉQUENTES',
    'common.more_info': 'PLUS D\'INFO',

    // Company Section
    'company.title': 'Commerce de Foin et Paille – À travers l\'Allemagne', l'\Autriche, la Suisse, le Danemark, la France et toute l'\Europe.,
    'company.subtitle': 'Nos Services',
    'company.buy.title': 'Acheter Foin et Paille',
    'company.buy.description': 'Voulez-vous acheter du foin et de la paille de haute qualité à des prix équitables avec un service premium? Alors vous êtes au bon endroit. Nous vendons du foin et de la paille toute l\'année.',
    'company.sell.title': 'Transport & Logistique',
    'company.sell.description': 'Solutions logistiques professionnelles pour le foin et la paille. Avec notre propre flotte et du personnel expérimenté, nous assurons des livraisons fiables dans toute l\'Allemagne et l\'Europe.',
    'common.learn_more': 'EN SAVOIR PLUS',

    // Contact Form
    'contact.title': 'Planifier une Consultation',
    'contact.name': 'Votre Nom',
    'contact.phone': 'Votre Numéro de Téléphone',
    'contact.whatsapp': 'Numéro WhatsApp',
    'contact.company': 'Nom de l\'Entreprise (optionnel)',
    'contact.street': 'Rue',
    'contact.city': 'Ville',
    'contact.zip': 'Votre Code Postal',
    'contact.interest': 'Je suis intéressé par...',
    'contact.privacy': 'J\'accepte le traitement de mes données à des fins de contact.',
    'contact.privacy_link': 'Plus sur la Confidentialité',
    'contact.submit': 'ENVOYER',

    // Service Section
    'service.title': 'Notre Service Premium',
    'service.producers.title': 'Producteurs Sélectionnés',
    'service.producers.description': 'Nous connaissons personnellement nos fermes productrices sélectionnées et sommes sur place avec notre propre personnel qualifié. Ainsi, nous pouvons assurer une haute qualité de foin et paille pour vous.',
    'service.delivery.title': 'Traitement Simple',
    'service.delivery.description': 'Nous livrons le foin et la paille avec notre propre flotte – comme vous en avez besoin – toute l\'année. Fiable et à travers l\'Allemagne. Commandez simplement par téléphone ou demande en ligne.',
    'service.guarantee.title': 'Garantie d\'Échange',
    'service.guarantee.description': 'Nous assurons une qualité parfaite. S\'il y a une plainte ou une insatisfaction, nous échangeons immédiatement les marchandises – sans discussion.',

    // FAQ Section
    'faq.tagline': 'COMMERCE DE FOIN ET PAILLE – QUESTIONS FRÉQUENTES',
    'faq.title': 'Questions Fréquemment Posées sur le Foin et la Paille',
    'faq.description': 'Avez-vous des questions sur le foin et la paille? Ici, nous avons déjà répondu à quelques questions fréquemment posées.',

    // Footer
    'footer.partners.title': 'Vos Partenaires de Contact',
    'footer.jan.role': 'Contact pour Acheteurs de Foin et Paille',
    'footer.friedrich.role': 'Contact pour Vendeurs de Foin et Paille',
    'footer.niklas.role': 'Contact Sur Site; Logistique & Service Terrain',
    'footer.christa.role': 'Comptabilité',
    'footer.order': 'Commande',
    'footer.email': 'Email',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.imprint': 'Mentions Légales',

    // Cookie Banner
    'cookie.message': 'Nous n\'utilisons que les cookies techniquement nécessaires sur notre site web. Votre comportement d\'utilisateur n\'est pas analysé.',
    'cookie.continue': 'Continuer',
    'cookie.privacy': 'Politique de Confidentialité',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && ['de', 'en', 'nl', 'fr'].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
