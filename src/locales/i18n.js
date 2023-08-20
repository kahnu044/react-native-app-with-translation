import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// import your language files
import english from './en.json';
import spanish from './sp.json';

// Initialize i18next
i18next.use(initReactI18next).init({
    resources: {
        en: { translation: english },
        sp: { translation: spanish },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
});

export default i18next;