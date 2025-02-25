// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json';
import de from './lang/de.json';
import fr from './lang/fr.json';

const resources = {
  en: { translation: en }, // Inglés
  de: { translation: de }, // Alemán
  fr: { translation: fr }, // Francés
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;