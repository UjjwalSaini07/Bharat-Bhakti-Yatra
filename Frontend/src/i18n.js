// Frontend/src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  // 1. Load translations via HTTP
  .use(HttpBackend) 
  // 2. Detect and cache user language
  .use(LanguageDetector)
  // 3. Pass the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi'], 
    
    // 💡 CRITICAL for preference saving and language detection order
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator'],
      // Save language preference here
      caches: ['localStorage', 'cookie'], 
    },
    
    // Path to the translation files in the public folder
    backend: {
        loadPath: '/locales/{{lng}}/translation.json', 
    },
    
    // Allows us to use nested keys (e.g., 'header.title')
    keySeparator: '.',
    
    interpolation: {
      escapeValue: false, // React protects against XSS
    },

    react: {
      useSuspense: true, 
    },
    
    debug: false, 
  });

export default i18n;