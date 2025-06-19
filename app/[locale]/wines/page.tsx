import {setRequestLocale} from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from '../../../lib/metadata';
import { Metadata } from 'next';
import { WinesHeroSection, WinesListSection } from '../../components/wines';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'th'}];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return generatePageMetadata(locale, 'wines');
}

export default async function WinesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <WinesHeroSection />
      <WinesListSection />
    </div>
  );
} 