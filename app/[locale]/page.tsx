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
    <div className="min-h-screen bg-wine-cream">
      {/* Hero Section - Magazine Style */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Left Side - Text Content */}
          <div className="flex items-center justify-center p-8 lg:p-16 bg-wine-charcoal text-wine-cream">
            <div className="max-w-lg space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-light tracking-[0.3em] text-wine-gold uppercase">
                  Our Story
                </p>
                <h1 className="text-5xl lg:text-6xl font-serif font-light leading-tight tracking-wide">
                  The Art Behind
                  <span className="block text-wine-gold italic">The Wine</span>
                </h1>
              </div>
              
              <div className="space-y-6 text-wine-200">
                <p className="text-lg font-light leading-relaxed">
                  Since our establishment, VINESSENCE has been dedicated to celebrating 
                  the finest French winemaking traditions in Thailand.
                </p>
                <p className="font-light leading-relaxed">
                  We believe that every bottle tells a story – of passionate vignerons, 
                  centuries-old traditions, and the unique terroir that makes French wine extraordinary.
                </p>
              </div>

              <div className="pt-4">
                <div className="w-16 h-px bg-wine-gold mb-4"></div>
                <p className="text-sm font-light tracking-wide text-wine-300">
                  Curated exclusively for discerning palates
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Year */}
          <div className="relative flex items-center justify-center bg-wine-200 overflow-hidden">
            <div className="text-center space-y-4">
              <div className="text-[12rem] lg:text-[16rem] font-serif font-light text-wine-charcoal/20 leading-none">
                2024
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal tracking-wide">
                    ESTABLISHED
                  </h2>
                  <p className="text-wine-700 font-light tracking-[0.2em] text-sm">
                    EXCELLENCE IN EVERY BOTTLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Magazine Grid */}
      <section className="py-20 bg-wine-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Large Text Block */}
            <div className="lg:col-span-2 space-y-8">
              <div className="max-w-4xl">
                <h2 className="text-4xl lg:text-5xl font-serif font-light text-wine-charcoal leading-tight mb-8">
                  "Let us take care of 
                  <span className="italic text-wine-gold"> the details.</span>"
                </h2>
                <p className="text-lg font-light text-wine-700 leading-relaxed">
                  Every wine in our collection represents a careful selection process, 
                  where we evaluate not just the quality of the wine, but the story behind it, 
                  the heritage of the producer, and its perfect pairing with Thai cuisine and climate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-wine-charcoal tracking-wide">Premium Curation</h3>
                  <p className="text-wine-600 font-light leading-relaxed">
                    Hand-selected wines from boutique French producers who share our 
                    commitment to quality and tradition.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-wine-charcoal tracking-wide">Expert Guidance</h3>
                  <p className="text-wine-600 font-light leading-relaxed">
                    Our sommelier-led tastings and consultations ensure the perfect 
                    wine selection for every occasion.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-8 shadow-sm">
                <h4 className="text-lg font-light text-wine-charcoal mb-4 tracking-wide">
                  Our Promise
                </h4>
                <p className="text-wine-600 font-light text-sm leading-relaxed">
                  Every bottle we import meets our exacting standards for quality, 
                  authenticity, and value. We stand behind each selection with our 
                  personal guarantee of excellence.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-6xl font-serif font-light text-wine-gold">
                  EST.
                </div>
                <div className="space-y-2">
                  <p className="text-wine-charcoal font-light tracking-[0.2em] text-sm">
                    BOUTIQUE FRENCH
                  </p>
                  <p className="text-wine-charcoal font-light tracking-[0.2em] text-sm">
                    WINE IMPORTER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 