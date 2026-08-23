import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    fallbackLng: "en", // Fallback language if current language is unavailable
    interpolation: {
      escapeValue: false, // React already safe-guards against XSS
    },
  });

export default i18n;
