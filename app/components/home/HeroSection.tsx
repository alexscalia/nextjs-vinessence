import Link from 'next/link';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-wine-800 via-wine-700 to-wine-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-serif font-light text-white leading-tight">
            {t('hero.title')}
            <span className="block text-wine-gold">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-light text-wine-100 leading-relaxed max-w-3xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/wines" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-light tracking-wide hover:bg-wine-500 transition-colors"
            >
              {t('hero.browse_wines')}
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-light tracking-wide hover:bg-white hover:text-wine-charcoal transition-colors"
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