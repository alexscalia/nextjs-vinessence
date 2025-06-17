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
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <CallToAction />
    </>
  );
} 