import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getWineBySlug, getAllWineSlugs } from '../../../../lib/wines-data';
import { generateWineMetadata } from '../../../../lib/metadata';
import { Badge } from '../../../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Separator } from '../../../components/ui/separator';
import Image from 'next/image';
import { Metadata } from 'next';

interface WinePageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  return getAllWineSlugs().flatMap(slug => [
    { locale: 'en', slug },
    { locale: 'th', slug }
  ]);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  return generateWineMetadata(locale, slug);
}

export default async function WinePage({ params }: WinePageProps) {
  const { slug, locale } = await params;
  const t = await getTranslations('wine');
  const wine = getWineBySlug(slug);

  if (!wine) {
    notFound();
  }

  // Get localized content based on locale
  const getLocalizedContent = (field: string) => {
    const localizedField = `${field}_${locale}` as keyof typeof wine;
    const fallbackField = `${field}_en` as keyof typeof wine;
    return (wine[localizedField] as string) || (wine[fallbackField] as string) || '';
  };

  const formatText = (text: string | undefined) => {
    if (!text) return <div>-</div>;
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/boutique-wines.webp"
            alt={wine.name}
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              {wine.vintage}
            </Badge>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: wine.name }}
            />
            <p className="text-xl text-gray-300 mb-4">{getLocalizedContent('region')}</p>
            <p className="text-lg text-gray-400">{getLocalizedContent('grape_varieties')}</p>
          </div>
        </div>
      </div>

      {/* Wine Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Estate */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('the_estate')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{getLocalizedContent('the_estate')}</p>
              </CardContent>
            </Card>

            {/* Terroir */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('terroir')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 leading-relaxed">
                  {formatText(getLocalizedContent('terroir'))}
                </div>
              </CardContent>
            </Card>

            {/* Vinification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('vinification')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 leading-relaxed">
                  {formatText(getLocalizedContent('vinification'))}
                </div>
              </CardContent>
            </Card>

            {/* Tasting Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('tasting_notes')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{getLocalizedContent('tasting_notes')}</p>
              </CardContent>
            </Card>

            {/* Pairing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t('pairing')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{getLocalizedContent('pairing')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wine Info Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {t('wine_details')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{t('rating')}</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-yellow-600">{wine.rating}</span>
                    <span className="text-gray-500 ml-1">/5</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">{t('price')}</span>
                  <span className="text-lg font-bold text-gray-900">₿{wine.price}</span>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('abv')}</span>
                    <span className="font-medium">{wine.abv}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('service_temperature')}</span>
                    <span className="font-medium">{wine.service_temperature}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('sku')}</span>
                    <span className="font-medium">{wine.sku}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('vintage')}</span>
                    <span className="font-medium">{wine.vintage}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 