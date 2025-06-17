import {setRequestLocale} from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from '../../lib/metadata';
import { Metadata } from 'next';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="French vineyard landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-wine-charcoal/60"></div>
        </div>
        
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
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1558346489-659571b69898?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="French winemaker in cellar"
                fill
                className="object-cover rounded-lg"
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
              Serving Thailand's Hospitality Industry
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1530062845289-9b5e4c4af6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Elegant restaurant setting"
                  fill
                  className="object-cover rounded-lg"
                />
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
              
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Artisanal wine bottles"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Portfolio Highlights */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="French wine cellar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-wine-charcoal/80"></div>
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