import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Optional: For loading translations from backend
import { initReactI18next } from 'react-i18next';

// Assuming your translations are in separate JSON files:
import en from './locales/en.json';
import he from './locales/he.json';
import ar from './locales/ar.json';

i18n
  .use(HttpBackend) // Use HttpBackend for loading translations from backend (optional)
  .use(LanguageDetector) // Use LanguageDetector to detect user language
  .use(initReactI18next) // Initialize react-i18next for React integration
  .init({
    fallbackLng: 'en', // Default language: English
    debug: false, // Disable debug mode in production
    supportedLngs: ['en', 'he', 'ar'], // Supported languages
    resources: {
      en: { translation: en },
      he: { translation: he },
      ar: { translation: ar },
    },
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    react: {
      useSuspense: false, // No need for suspense in this example
    },
  });

export default i18n;
