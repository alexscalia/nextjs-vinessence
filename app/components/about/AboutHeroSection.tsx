import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutHeroSection = () => {
  const t = useTranslations('about.hero');

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-wine-900 min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/boutique-wines.webp"
          alt="About Vinessence"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-serif font-light text-wine-gold leading-tight" 
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>
              {t('title')}
            </h1>
            
            <p className="text-xl lg:text-2xl font-light text-white leading-relaxed max-w-3xl mx-auto" 
               style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 