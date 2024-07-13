import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Optional: For loading translations from backend

// Assuming your translations are in separate JSON files:
import en from './locales/en.json';
import he from './locales/he.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)  // Detect user language
  .use(HttpBackend)       // Load translations from backend (optional)
  .use(initReactI18next)   // Integrate with React
  .init({
    fallbackLng: 'en',   // Default language: English
    debug: false,         // Disable debug mode in production
    lngs: ['en', 'he', 'ar'], // Supported languages
    resources: {
      en: { translation: en },
      he: { translation: he },
      ar: { translation: ar },
    },

  });

export default i18n;
