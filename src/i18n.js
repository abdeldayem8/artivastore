import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Static imports for preloaded translations
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import { SiTruenas } from 'react-icons/si';

i18n
  // Load translations dynamically or use static resources
  .use(Backend) 
  // Detect user's language preference
  .use(LanguageDetector) 
  // Bind React to i18n
  .use(initReactI18next) 
  .init({
    // Static translation resources for preloaded languages
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    fallbackLng: 'en', // Default language
    preload: ['en', 'ru'], // Preload specific languages
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // Priority order for language detection
      caches: ['localStorage', 'cookie'], // Cache the detected language
    },
    backend: {
      // dynamic loading of translation files
      loadPath: `./locales/{{lng}}.json`, // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
