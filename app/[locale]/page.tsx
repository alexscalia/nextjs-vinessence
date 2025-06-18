import {setRequestLocale} from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from '../../lib/metadata';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'th'}];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return generatePageMetadata(locale, 'home');
}

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get translations on the server side
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-wine-800 via-wine-700 to-wine-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-light text-white leading-tight">
              {t('hero.title')}
              <span className="block text-wine-gold">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-light text-wine-100 leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                href="/wines" 
                className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-light tracking-wide hover:bg-wine-500 transition-colors"
              >
                {t('hero.browse_wines')}
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-light tracking-wide hover:bg-white hover:text-wine-charcoal transition-colors"
              >
                {t('hero.contact_sales')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8">
                {t('philosophy.title')}
              </h2>
              <p className="text-lg font-light text-wine-700 leading-relaxed">
                {t('philosophy.description')}
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/philosophy-winemaker.webp"
                alt={t('philosophy.image_alt')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-wine-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8 text-center">
              {t('who_we_serve.title')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/hospitality-restaurant.webp"
                  alt={t('who_we_serve.image_alt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg font-light text-wine-700 leading-relaxed">
                  {t('who_we_serve.description')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    t('who_we_serve.businesses.restaurants'),
                    t('who_we_serve.businesses.hotels'), 
                    t('who_we_serve.businesses.bars'),
                    t('who_we_serve.businesses.cafes'),
                    t('who_we_serve.businesses.catering'),
                    t('who_we_serve.businesses.distributors')
                  ].map((business, index) => (
                    <div key={index} className="bg-white p-4 text-center rounded-lg shadow-sm">
                      <p className="font-light text-wine-charcoal">{business}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-light text-wine-700 leading-relaxed pt-4">
                  {t('who_we_serve.support_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Boutique Wines */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-12 text-center">
              {t('why_boutique.title')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-wine-gold tracking-wide">{t('why_boutique.authenticity.title')}</h3>
                  <p className="font-light text-wine-700 leading-relaxed">
                    {t('why_boutique.authenticity.description')}
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-wine-gold tracking-wide">{t('why_boutique.limited_production.title')}</h3>
                  <p className="font-light text-wine-700 leading-relaxed">
                    {t('why_boutique.limited_production.description')}
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-wine-gold tracking-wide">{t('why_boutique.direct_partnerships.title')}</h3>
                  <p className="font-light text-wine-700 leading-relaxed">
                    {t('why_boutique.direct_partnerships.description')}
                  </p>
                </div>
              </div>
              
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/boutique-wines.webp"
                  alt={t('why_boutique.image_alt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Portfolio Highlights */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-wine-700 via-wine-800 to-wine-900">
          <div className="absolute inset-0 bg-wine-charcoal/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-8 text-white">
              {t('portfolio.title')}
            </h2>
            
            <p className="text-lg font-light leading-relaxed mb-12 text-wine-100">
              {t('portfolio.description')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {[
                t('portfolio.regions.burgundy'),
                t('portfolio.regions.bordeaux'),
                t('portfolio.regions.champagne'),
                t('portfolio.regions.rhone'),
                t('portfolio.regions.loire'),
                t('portfolio.regions.alsace')
              ].map((region, index) => (
                <div key={index} className="bg-wine-50/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-wine-50/20 transition-colors">
                  <div className="w-12 h-12 bg-wine-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6 text-wine-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-light text-wine-100">{region}</p>
                </div>
              ))}
            </div>

            <Link 
              href="/wines" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-light tracking-wide hover:bg-wine-500 transition-colors"
            >
              {t('portfolio.browse_portfolio')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 