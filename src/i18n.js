import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'
import ruTranslation from './locales/ru.json'
import LanguageDetector from 'i18next-browser-languagedetector';
 


i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        ru: { translation: ruTranslation },
      },
      detection: {
        caches: ['localStorage', 'cookie'],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    }
  });

  export default i18n;