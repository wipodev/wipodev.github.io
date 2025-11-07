import { ui, defaultLang, showDefaultLang } from "./ui";

export function useTranslations(locale: string) {
  const lang = (locale in ui ? locale : defaultLang) as keyof typeof ui;
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
