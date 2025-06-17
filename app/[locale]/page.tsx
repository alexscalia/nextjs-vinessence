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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wine-900 to-wine-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            VINESSENCE
          </h1>
          <p className="text-xl mb-8 text-wine-100">
            Boutique French Wine Importer – Thailand
          </p>
          <p className="text-lg max-w-2xl mx-auto text-wine-200">
            Discover exceptional French wines carefully curated for the Thai market. 
            From intimate tastings to corporate events, we bring the essence of French viticulture to Thailand.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wine-900 mb-8">
            Welcome to VINESSENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-wine-800 mb-4">Premium Selection</h3>
              <p className="text-wine-600">
                Carefully selected French wines from renowned regions and emerging vineyards.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-wine-800 mb-4">Expert Guidance</h3>
              <p className="text-wine-600">
                Professional wine education and consultation for restaurants and wine enthusiasts.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-wine-800 mb-4">Local Expertise</h3>
              <p className="text-wine-600">
                Deep understanding of the Thai market and local preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 