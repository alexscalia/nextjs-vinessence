import {setRequestLocale} from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from '../../../lib/metadata';
import { Metadata } from 'next';
import { 
  AboutHeroSection,
  AboutIntroSection,
  WhyChooseUsSection,
  ServicesSection,
  ContactCTASection
} from '../../components/about';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'th'}];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return generatePageMetadata(locale, 'about');
}

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <AboutIntroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ContactCTASection />
    </div>
  );
} 