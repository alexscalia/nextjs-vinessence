import {setRequestLocale} from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from '../../lib/metadata';
import { Metadata } from 'next';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-wine-800 via-wine-700 to-wine-900">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-light text-white leading-tight">
              Boutique French Wines 
              <span className="block text-wine-gold">Directly Imported for Thailand's Hospitality Industry</span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-light text-wine-100 leading-relaxed max-w-3xl mx-auto">
              Exclusive selections from small producers across France. Sourced directly, imported professionally, delivered with care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="/wines" 
                className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-light tracking-wide hover:bg-wine-500 transition-colors"
              >
                Browse Our Wines
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-light tracking-wide hover:bg-white hover:text-wine-charcoal transition-colors"
              >
                Contact Our Sales Team
              </a>
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
                Discover the Hidden Gems of France.
              </h2>
              <p className="text-lg font-light text-wine-700 leading-relaxed">
                Vinessence is a boutique French wine importer based in Thailand. We carefully curate our portfolio by working directly with small, independent producers from France's most iconic regions. Every bottle reflects the unique character of its terroir, the dedication of its winemaker, and the artisanal tradition behind its creation.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-wine-200 to-wine-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-wine-700">
                <div className="w-16 h-16 bg-wine-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-light">French Winemaker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-wine-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8 text-center">
              Serving Thailand's Hospitality Industry
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-wine-300 to-wine-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-wine-700">
                  <div className="w-16 h-16 bg-wine-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <p className="text-sm font-light">Restaurant Scene</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg font-light text-wine-700 leading-relaxed">
                  We partner with businesses of all sizes across Thailand's food & beverage sector:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Restaurants',
                    'Hotels & Resorts', 
                    'Bars & Lounges',
                    'Cafés and Bistros',
                    'Catering & Event Companies',
                    'Distributors & Wholesalers'
                  ].map((business, index) => (
                    <div key={index} className="bg-white p-4 text-center rounded-lg shadow-sm">
                      <p className="font-light text-wine-charcoal">{business}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-light text-wine-700 leading-relaxed pt-4">
                  Whether you're developing a new wine list or looking for exclusive labels, our experienced team offers full support and consultation.
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
              Why Boutique Wines?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-wine-gold tracking-wide">Authenticity</h3>
                  <p className="font-light text-wine-700 leading-relaxed">
                    Wines crafted with passion by family-owned estates.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-wine-gold tracking-wide">Limited Production</h3>
                  <p className="font-light text-wine-700 leading-relaxed">
                    Unique labels, often unavailable through large importers.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-light text-wine-gold tracking-wide">Direct Partnerships</h3>
                  <p className="font-light text-wine-700 leading-relaxed">
                    We work closely with the producers for every wine we bring to Thailand.
                  </p>
                </div>
              </div>
              
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-wine-400 to-wine-500 rounded-lg flex items-center justify-center">
                <div className="text-center text-wine-100">
                  <div className="w-16 h-16 bg-wine-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-wine-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-light">Boutique Wine Selection</p>
                </div>
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
              Explore Our Selection
            </h2>
            
            <p className="text-lg font-light leading-relaxed mb-12 text-wine-100">
              Our wines are carefully sourced from across France's most celebrated regions:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {[
                'Champagne',
                'Burgundy', 
                'Bordeaux',
                'Rhône Valley',
                'Loire Valley',
                'Provence & Languedoc'
              ].map((region, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="font-light text-wine-gold tracking-wide">{region}</p>
                </div>
              ))}
            </div>

            <a 
              href="/wines" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-light tracking-wide hover:bg-wine-500 transition-colors"
            >
              Browse the Full Portfolio →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 