import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  locale: string,
  pageKey: 'home' | 'about' | 'services' | 'forProducers' | 'privacyPolicy' | 'termsConditions' | 'contact'
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

function getPagePath(pageKey: string): string {
  switch (pageKey) {
    case 'about':
      return 'about'
    case 'services':
      return 'services'
    case 'forProducers':
      return 'for-producers'
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