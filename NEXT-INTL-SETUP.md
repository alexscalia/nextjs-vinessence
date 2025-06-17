# Next-intl Implementation Guide

This project now uses `next-intl` for internationalization with App Router and i18n routing support.

## 🌍 Supported Locales

- **English** (`en`) - Default locale
- **Thai** (`th`) - Secondary locale for the Thai market

## 📁 Project Structure

```
├── app/
│   └── [locale]/                 # Dynamic locale segment
│       ├── layout.tsx           # Locale-aware layout
│       ├── page.tsx             # Home page
│       ├── loading.tsx          # Loading component
│       ├── about/
│       │   └── page.tsx         # About page
│       ├── services/
│       │   └── page.tsx         # Services page
│       └── for-producers/
│           └── page.tsx         # For Producers page
├── i18n/
│   ├── routing.ts               # Routing configuration
│   ├── navigation.ts            # Navigation helpers
│   └── request.ts               # Server-side configuration
├── messages/
│   ├── en.json                  # English translations
│   └── th.json                  # Thai translations
├── middleware.ts                # Locale detection and routing
└── next.config.ts               # Next-intl plugin configuration
```

## 🚀 Features

### ✅ Automatic Locale Detection
- Redirects root URL `/` to default locale `/en`
- Middleware handles locale detection and routing

### ✅ Localized URLs
- English: `/en`, `/en/about`, `/en/services`
- Thai: `/th`, `/th/about`, `/th/services`

### ✅ Static Generation
- All pages support static generation with `generateStaticParams()`
- Optimized for performance

### ✅ Type-safe Translations
- Structured JSON translation files
- TypeScript support for translation keys

## 🔧 Usage

### Using Translations in Components

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('HomePage');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('hero.cta')}</button>
    </div>
  );
}
```

### Server-side Translations

```tsx
import {getTranslations} from 'next-intl/server';

export default async function ServerComponent() {
  const t = await getTranslations('HomePage');
  
  return <h1>{t('title')}</h1>;
}
```

### Internationalized Navigation

```tsx
import { Link, useRouter } from '@/i18n/navigation';

// Link component automatically includes locale
<Link href="/about">About Us</Link>

// Router with locale awareness
const router = useRouter();
router.push('/services');
```

### Language Switcher

Use the provided `LanguageSwitcher` component:

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  return (
    <header>
      <nav>
        {/* Other navigation items */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
```

## 📝 Adding New Translations

1. **Add to English translations** (`messages/en.json`):
```json
{
  "MyNewSection": {
    "title": "New Section",
    "description": "This is a new section"
  }
}
```

2. **Add to Thai translations** (`messages/th.json`):
```json
{
  "MyNewSection": {
    "title": "ส่วนใหม่",
    "description": "นี่คือส่วนใหม่"
  }
}
```

3. **Use in components**:
```tsx
const t = useTranslations('MyNewSection');
return <h2>{t('title')}</h2>;
```

## 🔧 Adding New Locales

1. **Update routing configuration** (`i18n/routing.ts`):
```ts
export const routing = defineRouting({
  locales: ['en', 'th', 'fr'], // Add new locale
  defaultLocale: 'en'
});
```

2. **Create translation file** (`messages/fr.json`):
```json
{
  "HomePage": {
    "title": "Titre français"
  }
}
```

3. **Update static params** in pages:
```ts
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'th'}, {locale: 'fr'}];
}
```

## 🌐 URLs and Routing

The middleware automatically handles:
- `/` → `/en` (redirect to default locale)
- `/about` → `/en/about` (redirect with locale prefix)
- `/th/about` → Thai version of about page
- Invalid locales return 404

## 🎯 Benefits

- **SEO Optimized**: Each locale gets its own URL structure
- **Performance**: Static generation for all locale pages
- **Type Safety**: Full TypeScript support for translations
- **Flexible**: Easy to add new locales and translations
- **User Experience**: Automatic locale detection and switching

## 🛠️ Development

- **Dev Server**: `npm run dev` - automatically includes locale routing
- **Build**: `npm run build` - generates static pages for all locales
- **Translation Keys**: IntelliSense support for translation keys (if configured)

## 📚 Resources

- [Next-intl Documentation](https://next-intl.dev/)
- [App Router Guide](https://next-intl.dev/docs/getting-started/app-router)
- [Translation Management](https://next-intl.dev/docs/usage/messages) 