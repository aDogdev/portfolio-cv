import en from "../i18n/en.json";
import es from "../i18n/es.json";

export const LANGUAGES = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;

type Paths<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}`;
    }[keyof T]
  : never;

export type Key = Paths<UI["en"]>;

function getNestedValue<T>(obj: T, path: string): string {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc: any, part) => acc?.[part], obj);
}

export function getLangFromUrl(url: URL) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const lang = pathSegments[0];
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: Key, params?: Record<string, string>): string {
    // Get text from current language or fall back to default
    let text = getNestedValue(ui[lang], key);
    if (text === undefined) {
      text = getNestedValue(ui[defaultLang], key);
    }
    if (text === undefined) {
      return key as string;
    }

    // Replace all parameters in one pass using regex
    if (params) {
      text = text.replace(
        /\{(\w+)\}/g,
        (match, param) => params[param] || match,
      );
    }

    return text;
  };
}
