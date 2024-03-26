import en from "@clientify/locales/en.json";
import es from "@clientify/locales/es.json";
import it from "@clientify/locales/it.json";

const translations: any = {
  en,
  es,
  it,
};

export function useTranslation(locale = "es") {
  function t(key: any) {
    return translations[locale][key] || key;
  }

  return { t };
}
