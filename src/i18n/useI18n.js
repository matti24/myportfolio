import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  translations,
} from "./translations";

const STORAGE_KEY = "site_locale";

function normalizeLocale(input) {
  if (!input) return DEFAULT_LOCALE;
  const short = String(input).toLowerCase().split("-")[0];
  return SUPPORTED_LOCALES.includes(short) ? short : DEFAULT_LOCALE;
}

function getByPath(obj, path) {
  if (!obj) return undefined;
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

/**
 * Minimal i18n hook.
 * - locale: 'de' | 'en' | 'nl' | 'sv'
 * - setLocale: persist to localStorage
 * - t(key): string (falls back to DE, then key)
 */
export function useI18n() {
  const [locale, setLocaleState] = useState(() => {
    try {
      return normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      return DEFAULT_LOCALE;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const api = useMemo(() => {
    const dict = translations[locale] || translations[DEFAULT_LOCALE];
    const fallback = translations[DEFAULT_LOCALE];

    const t = (key) => {
      const value = getByPath(dict, key);
      if (typeof value === "string") return value;
      const fb = getByPath(fallback, key);
      if (typeof fb === "string") return fb;
      return key;
    };

    const setLocale = (next) => setLocaleState(normalizeLocale(next));

    return { locale, setLocale, t, supported: SUPPORTED_LOCALES };
  }, [locale]);

  return api;
}
