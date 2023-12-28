import { getLangFromIP } from "../i18n/utils";

export const languages: { [key: string]: string } = {
    en: 'en',
    es: 'es',
    fr: 'fr',
    sv: 'sv',
  } as const;
  
  export const defaultLang = 'sv';
  export const defaultPage = '/';
  
  export const langUI = {
    en: {
      'language': 'Language',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.contact': 'Contact',
    },
    es: {
      'language': 'Idioma',
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de',
      'nav.products': 'Productos',
      'nav.contact': 'Contacto',
    },
    fr: {
      'language': 'Langue',
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.products': 'Produits',
      'nav.contact': 'Contact',
    },
    sv: {
      'language': 'Språk',
      'nav.home': 'Hem',
      'nav.about': 'Om oss',
      'nav.products': 'Produkter',
      'nav.contact': 'Kontakt',
    },
  } as const;

export const pages = {
  home: '',
  about: 'about',
  products: 'products',
  contact: 'contact',
}