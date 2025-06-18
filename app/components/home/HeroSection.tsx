import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-wine-900 min-h-[80vh] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/grape-trees.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            {/* Vinessence Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/vinessence-logo-text.svg"
                alt="Vinessence"
                width={500}
                height={100}
                className="w-auto h-12 lg:h-16"
                style={{ filter: 'brightness(0) invert(1)' }}
                priority
              />
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-serif font-light text-wine-gold leading-tight" 
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>
              {t('hero.subtitle')}
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl font-light text-white leading-relaxed max-w-3xl mx-auto" 
             style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/wines" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-medium tracking-wide hover:bg-yellow-500 transition-colors shadow-xl border-2 border-wine-gold"
            >
              {t('hero.browse_wines')}
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium tracking-wide hover:bg-white hover:text-wine-charcoal transition-colors shadow-xl"
            >
              {t('hero.contact_sales')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 