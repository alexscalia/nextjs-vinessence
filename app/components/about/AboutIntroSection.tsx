import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutIntroSection = () => {
  const t = useTranslations('about.intro');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t('paragraph2')}
            </p>
          </div>
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/philosophy-winemaker.webp"
              alt="French winemaker crafting authentic wines"
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

export default AboutIntroSection; 