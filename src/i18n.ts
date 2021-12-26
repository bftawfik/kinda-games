import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const initOptions = {
  fallbackLng: "en",
  debug: true,
  detection: {
    order: ["queryString", "cookie"],
    cache: ["cookie"],
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath:
      !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "/locales/{{lng}}/{{ns}}.json"
        : "./locales/{{lng}}/{{ns}}.json",
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...initOptions,
  });

export default i18n;
