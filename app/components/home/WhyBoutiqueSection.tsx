import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WhyBoutiqueSection = () => {
  const t = useTranslations();

  return (
    <section className="pt-4 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-12 text-center">
            {t('why_boutique.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-wine-gold tracking-wide">{t('why_boutique.authenticity.title')}</h3>
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t('why_boutique.authenticity.description')}
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-wine-gold tracking-wide">{t('why_boutique.limited_production.title')}</h3>
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t('why_boutique.limited_production.description')}
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-wine-gold tracking-wide">{t('why_boutique.direct_partnerships.title')}</h3>
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {t('why_boutique.direct_partnerships.description')}
                </p>
              </div>
            </div>
            
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/boutique-wines.webp"
                alt={t('why_boutique.image_alt')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoutiqueSection; 