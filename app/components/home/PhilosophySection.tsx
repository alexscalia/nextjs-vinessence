import Image from 'next/image';
import { useTranslations } from 'next-intl';

const PhilosophySection = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8">
              {t('philosophy.title')}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t('philosophy.description')}
            </p>
          </div>
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/philosophy-winemaker.webp"
              alt={t('philosophy.image_alt')}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 