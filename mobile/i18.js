// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json';
import es from './lang/es.json';
import de from './lang/de.json';
import deCH from './lang/de-CH.json'; // Importa correctamente el JSON para alemán suizo

const resources = {
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
  'de-CH': { translation: deCH }, // Encierra la propiedad en comillas
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
