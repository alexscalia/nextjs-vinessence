import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ServicesSection = () => {
  const t = useTranslations('about.commitment');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/hospitality-restaurant.webp"
              alt="Fine dining restaurant setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8">
              {t('title')}
            </h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-wine-charcoal">
                  {t('partnership.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('partnership.description')}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-wine-charcoal">
                  {t('sourcing.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('sourcing.description')}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-wine-charcoal">
                  {t('storage.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('storage.description')}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-wine-charcoal">
                  {t('assistance.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('assistance.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 