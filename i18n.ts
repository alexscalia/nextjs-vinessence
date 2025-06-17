// Can be imported from a shared config
export const locales = ['en', 'th'] as const;
export type Locale = typeof locales[number];

export const defaultLocale = 'en' as const; 