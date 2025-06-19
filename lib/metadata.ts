import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getWineBySlug } from './wines-data'

export async function generateMetadata(
  locale: string,
  pageKey: 'home' | 'about' | 'services' | 'wines' | 'forProducers' | 'privacyPolicy' | 'termsConditions' | 'contact'
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  
  const baseUrl = 'https://wineimportthailand.com'
  const siteName = t('site.name')
  
  // Generate alternate links for both languages
  const alternateLinks: Record<string, string> = {
    'en': `${baseUrl}/en${pageKey === 'home' ? '' : '/' + getPagePath(pageKey)}`,
    'th': `${baseUrl}/th${pageKey === 'home' ? '' : '/' + getPagePath(pageKey)}`,
    'x-default': `${baseUrl}/en${pageKey === 'home' ? '' : '/' + getPagePath(pageKey)}`
  }

  return {
    title: t(`${pageKey}.title`),
    description: t(`${pageKey}.description`),
    keywords: t(`${pageKey}.keywords`),
    
    // Open Graph
    openGraph: {
      title: t(`${pageKey}.title`),
      description: t(`${pageKey}.description`),
      url: alternateLinks[locale],
      siteName,
      locale: locale === 'en' ? 'en_US' : 'th_TH',
      alternateLocale: locale === 'en' ? 'th_TH' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image-${pageKey}.jpg`,
          width: 1200,
          height: 630,
          alt: t(`${pageKey}.title`),
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: t(`${pageKey}.title`),
      description: t(`${pageKey}.description`),
      images: [`${baseUrl}/og-image-${pageKey}.jpg`],
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: alternateLinks[locale],
      languages: alternateLinks,
    },
    
    // Additional meta tags
    other: {
      'geo.region': 'TH',
      'geo.placename': 'Bangkok',
      'geo.position': '13.7563;100.5018',
      'ICBM': '13.7563, 100.5018',
    },
  }
}

export async function generateWineMetadata(
  locale: string,
  slug: string
): Promise<Metadata> {
  const wine = getWineBySlug(slug);
  
  if (!wine) {
    return {
      title: 'Wine Not Found',
      description: 'The requested wine could not be found.',
    };
  }

  const baseUrl = 'https://wineimportthailand.com'
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  const siteName = t('site.name')
  
  // Get localized content
  const getLocalizedContent = (field: string) => {
    const localizedField = `${field}_${locale}` as keyof typeof wine;
    const fallbackField = `${field}_en` as keyof typeof wine;
    return (wine[localizedField] as string) || (wine[fallbackField] as string) || '';
  };

  const region = getLocalizedContent('region');
  const grapeVarieties = getLocalizedContent('grape_varieties');
  const tastingNotes = getLocalizedContent('tasting_notes');

  const title = `${wine.name} | ${region} | ${siteName}`
  const description = `${wine.name} from ${region}. ${grapeVarieties}. ${tastingNotes ? tastingNotes.substring(0, 100) : 'French wine'}...`
  
  // Generate alternate links for both languages
  const alternateLinks: Record<string, string> = {
    'en': `${baseUrl}/en/wines/${slug}`,
    'th': `${baseUrl}/th/wines/${slug}`,
    'x-default': `${baseUrl}/en/wines/${slug}`
  }

  return {
    title,
    description,
    keywords: `${wine.name}, ${region}, ${grapeVarieties}, French wine Thailand, wine import Thailand, ${wine.vintage}`,
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: alternateLinks[locale],
      siteName,
      locale: locale === 'en' ? 'en_US' : 'th_TH',
      alternateLocale: locale === 'en' ? 'th_TH' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/wines/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: wine.name,
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/wines/${slug}.jpg`],
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: alternateLinks[locale],
      languages: alternateLinks,
    },
    
    // Additional structured data for wines
    other: {
      'product:price:amount': wine.price,
      'product:price:currency': 'THB',
      'product:brand': wine.name.split(' ')[0],
      'product:category': 'Wine',
      'geo.region': 'TH',
      'geo.placename': 'Bangkok',
    },
  }
}

function getPagePath(pageKey: string): string {
  switch (pageKey) {
    case 'about':
      return 'about'
    case 'services':
      return 'services'
    case 'wines':
      return 'wines'
    case 'forProducers':
      return 'producers'
    case 'privacyPolicy':
      return 'privacy-policy'
    case 'termsConditions':
      return 'terms-conditions'
    case 'contact':
      return 'contact'
    default:
      return ''
  }
} 