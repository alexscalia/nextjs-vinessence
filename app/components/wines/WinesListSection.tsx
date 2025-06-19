'use client';

import { useTranslations } from 'next-intl';
import { winesByRegion } from '../../../lib/wines-data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function WinesListSection() {
  const t = useTranslations('wines');
  const tRegions = useTranslations('wines.regions');
  const params = useParams();
  const locale = params.locale as string;

  // Get localized content for a wine based on locale
  const getLocalizedContent = (wine: any, field: string) => {
    const localizedField = `${field}_${locale}`;
    return (wine as any)[localizedField] || (wine as any)[`${field}_en`]; // fallback to English
  };

  // Function to format text with line breaks
  const formatText = (text: string) => {
    return text.replace(/\\n/g, '<br>');
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

        {winesByRegion.map((region) => (
          <div key={region.region_slug} className="mb-16">
            {/* Region Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {tRegions(region.region_slug)}
              </h3>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>

            {/* Wine Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {region.wines.map((wine) => (
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
                      <CardTitle 
                        className="text-lg leading-tight group-hover:text-red-700 transition-colors break-words"
                        dangerouslySetInnerHTML={{ __html: formatText(wine.name) }}
                      />
                      <p className="text-gray-600 text-sm">{getLocalizedContent(wine, 'region')}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                            {t('grape_varieties')}
                          </h4>
                          <p className="text-sm text-gray-600 pl-4">{getLocalizedContent(wine, 'grape_varieties')}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                            {t('tasting_notes')}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-3 pl-4">
                            {getLocalizedContent(wine, 'tasting_notes')}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                          <div className="text-center">
                            <p className="text-xs text-gray-500 mb-1">ABV</p>
                            <p className="text-sm font-medium text-gray-900">{wine.abv}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500 mb-1">Serve</p>
                            <p className="text-sm font-medium text-gray-900">{wine.service_temperature}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500 mb-1">SKU</p>
                            <p className="text-sm font-medium text-gray-900">{wine.sku}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 