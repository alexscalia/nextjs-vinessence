import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WhoWeServeSection = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-wine-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8 text-center">
            {t('who_we_serve.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/hospitality-restaurant.webp"
                alt={t('who_we_serve.image_alt')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                {t('who_we_serve.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  t('who_we_serve.businesses.restaurants'),
                  t('who_we_serve.businesses.hotels'), 
                  t('who_we_serve.businesses.bars'),
                  t('who_we_serve.businesses.cafes'),
                  t('who_we_serve.businesses.catering'),
                  t('who_we_serve.businesses.distributors')
                ].map((business, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-wine-50 p-5 text-center rounded-lg shadow-md border border-wine-200/30 hover:shadow-lg hover:from-wine-50 hover:to-wine-100 transition-all duration-300">
                    <p className="font-medium text-gray-800 tracking-wide">{business}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-800 leading-relaxed pt-4">
                {t('who_we_serve.support_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection; 