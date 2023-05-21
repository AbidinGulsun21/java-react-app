import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from './tr';
import en from './en';

i18n.use(initReactI18next).init({

    resources: {
        en: {
            translations: localStorage.getItem("userLn") === 'en' && en
        },
        tr: {
            translations: localStorage.getItem("userLn") === 'tr' && tr
        },
    },
    fallbackLng: localStorage.getItem("userLn"),
    ns: ['translations'],
    defaultNs: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }

});

export default i18n;


