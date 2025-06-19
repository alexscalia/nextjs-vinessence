'use client';

import { useTranslations } from 'next-intl';
import { wines } from '../../../lib/wines-data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function WinesListSection() {
  const t = useTranslations('wines');
  const params = useParams();
  const locale = params.locale as string;

  // Get localized content for a wine based on locale
  const getLocalizedContent = (wine: typeof wines[0], field: string) => {
    const localizedField = `${field}_${locale}`;
    return (wine as any)[localizedField] || (wine as any)[`${field}_en`]; // fallback to English
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('our_collection')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('collection_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <Link
              key={wine.slug}
              href={`/${locale}/wines/${wine.slug}`}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{wine.vintage}</Badge>
                    <div className="flex items-center">
                      <span className="text-yellow-600 font-bold">{wine.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">/5</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-700 transition-colors">
                    {wine.name}
                  </CardTitle>
                  <p className="text-gray-600">{getLocalizedContent(wine, 'region')}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {t('grape_varieties')}
                      </h4>
                      <p className="text-sm text-gray-600">{getLocalizedContent(wine, 'grape_varieties')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {t('tasting_notes')}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {getLocalizedContent(wine, 'tasting_notes')}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{wine.abv}</span> | {wine.service_temperature}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        ₿{wine.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 