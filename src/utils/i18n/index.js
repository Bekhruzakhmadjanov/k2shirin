import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import ruTranslation from './locales/ru/ru.json';
import enTranslation from './locales/en/en.json';
import uzTranslation from './locales/uz/uz.json';

// Resources for translations
const resources = {
  uz: { translation: uzTranslation },
  en: { translation: enTranslation },
  ru: { translation: ruTranslation }
};

// Check for saved language or set default to Uzbek
let savedLanguage = localStorage.getItem('language');
let defaultLanguage = savedLanguage || 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage, // Explicitly set to Uzbek if no language is saved
    fallbackLng: 'uz', // Default to Uzbek
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;