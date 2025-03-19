import type { Locale } from '@/types/i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/public/locales/en').then((module) => module.default),
  vi: () => import('@/public/locales/vi').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Validate that the locale exists
  if (!Object.keys(dictionaries).includes(locale)) {
    return dictionaries.en();
  }
  
  return dictionaries[locale as keyof typeof dictionaries]();
};
