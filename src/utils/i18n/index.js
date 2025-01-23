import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import ruTranslation from './locales/ru/ru.json';
import enTranslation from './locales/en/en.json';
import uzTranslation from './locales/uz/uz.json';

// Resources for translations
const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  uz: { translation: uzTranslation }
};

// Retrieve saved language from localStorage or fallback to Russian
const savedLanguage = localStorage.getItem('language') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Set the default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;