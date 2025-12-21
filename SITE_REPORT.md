# Rapport du site — MANFRED Heu und Stroh

Date: 21 décembre 2025

## Vue d'ensemble
- Stack: Next.js (App Router), React 18, TypeScript, Tailwind CSS.
- I18n: système maison via `LanguageProvider` et fichiers JSON dans `src/locales/` (de, en, fr, nl).
- Déploiement: scripts standard dans `package.json` (`dev`, `build`, `start`).

## Pages principales
- Accueil: `src/app/page.tsx` — Hero, Company info, formulaire de contact, sections `#service`, produit, FAQ (`#faq`). Tout le contenu visible est majoritairement servi via la fonction `t(...)` des locales.
- Layout global: `src/app/layout.tsx` — metadata (titre/description en allemand), chargement de la font, inclut `Header` et `Footer`, enveloppe `LanguageProvider`.
- `src/app/kaufen/page.tsx` — page « Acheter » : formulaire de commande (front-end), checklist qualité, informations produits.
- `src/app/verkaufen/page.tsx` — page « Transport / Logistik » : flotte, zones de livraison, services logistiques.
- `src/app/impressum/page.tsx` — mentions légales (Impressum).
- `src/app/datenschutz/page.tsx` — politique de confidentialité (Datenschutzerklärung).

## Composants clés
- `src/components/Header.tsx` — logo, navigation desktop et mobile, numéro de téléphone, `LanguageSwitcher`, smooth scrolling.
- `src/components/Footer.tsx` — contacts, coordonnées, section `#ansprechpartner`.
- `src/components/LanguageSwitcher.tsx` — sélecteur de langue (stockage dans `localStorage`).
- `src/components/FAQAccordion.tsx` — accordéon FAQ alimenté dynamiquement depuis `t('faq.items')`.

## Contexte et traduction
- `src/contexts/LanguageContext.tsx` — expose `language`, `setLanguage`, `t(key)`; traduit à partir des fichiers JSON dans `src/locales/`.
- Les fichiers de traduction (`src/locales/de.json`, `en.json`, `fr.json`, `nl.json`) contiennent les clés affichées dans le site (nav, hero, company, contact, service, faq.items, footer, etc.).

## Contenu & données
- Coordonnées codées en dur: téléphone(s) (ex. 01630295106), emails (`info@manfred-heu-stroh.de`, `verkauf@manfred-heu-stroh.de`), adresse: Pariner Berg 18, 23611 Bad Schwartau.
- FAQ entièrement dans les fichiers de locales — donc multi-langues automatiquement.
- Formulaires: présents avec placeholders et contrôles HTML de base; pas d'API d'envoi implémentée dans le code parcouru (formulaires front-end uniquement).

## Styling et UX
- `src/app/globals.css` combine Tailwind et utilitaires personnalisés (animations, boutons `.btn-primary` / `.btn-secondary`, scrollbar, focus styles).
- Animations personnalisées: `animate-fade-in`, `animate-slide-up`, `animate-scale-in`.
- Images: URLs externes (Unsplash, autres). Pas d'utilisation explicite de `next/image` pour optimisation d'image.

## Accessibilité & bonnes pratiques
- Utilisation cohérente des éléments sémantiques (`section`, `h1`, `form`).
- Focus-visible et états hover définis pour la plupart des contrôles.
- FAQ/accordéon rend des contenus dynamiques, interaction clavier possible via boutons.

## SEO & métadonnées
- Metadata globale définie dans `src/app/layout.tsx` (titre et description principalement en allemand). Pas de meta par page plus détaillé dans les fichiers parcourus.

## Routing
- Routes observées: `/`, `/kaufen/`, `/verkaufen/`, `/impressum/`, `/datenschutz/`.
- Ancres utiles: `#faq`, `#ansprechpartner`, `#contact-form`, `#service`, `#quality-checklist`.

## Observations techniques & suggestions
1. Formulaires: aucune `Route` API ou backend d'envoi trouvé — si vous souhaitez collecter des commandes, ajouter une API (ex: `app/api/contact/route.ts`) ou intégrer un service externe (email/CRM).  
2. Optimisation des images: envisager `next/image` pour performance/format responsive et réduction de la bande passante.  
3. Données de contact codées en dur: si besoin de gérer plusieurs contacts/versions, externaliser dans un fichier JSON de configuration ou CMS.
4. Vérifier cohérence des traductions: `t(key)` renvoie la clé si traduction manquante; faites une passe QA sur chaque langue.

## Où j'ai vérifié
- Pages et composants: `src/app/*`, `src/components/*`.  
- Contexte et utilitaires: `src/contexts/LanguageContext.tsx`, `src/lib/utils.ts`.  
- Locales: `src/locales/de.json`, `src/locales/en.json`, `src/locales/fr.json`, `src/locales/nl.json`.  
- Styles: `src/app/globals.css`.

---

Si vous voulez que j'ajoute automatiquement une API de contact minimale, ou que je crée une issue/lista de tâches pour intégrer l'envoi des formulaires et l'optimisation des images, dites laquelle et je m'en occupe.
