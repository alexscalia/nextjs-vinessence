import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ContactCTASection = () => {
  const t = useTranslations('about.cta');

  return (
    <section className="py-16 bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-gold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-white leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-medium tracking-wide hover:bg-yellow-500 transition-colors shadow-xl border-2 border-wine-gold"
            >
              {t('contact_button')}
            </Link>
            <Link 
              href="/wines" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium tracking-wide hover:bg-white hover:text-wine-charcoal transition-colors shadow-xl"
            >
              {t('wines_button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection; 