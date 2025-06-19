import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ProducersContentSection = () => {
  const t = useTranslations('producers.content');

  return (
    <>
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                {t('intro')}
              </p>
              
              <h2 className="text-2xl lg:text-3xl font-serif font-light text-wine-charcoal mb-6">
                {t('services.title')}
              </h2>
              
              <ul className="space-y-4 text-lg text-gray-800">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-wine-gold rounded-full mt-3 flex-shrink-0"></span>
                  <span>{t('services.import')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-wine-gold rounded-full mt-3 flex-shrink-0"></span>
                  <span>{t('services.distribution')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-wine-gold rounded-full mt-3 flex-shrink-0"></span>
                  <span>{t('services.expertise')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-wine-gold rounded-full mt-3 flex-shrink-0"></span>
                  <span>{t('services.operations')}</span>
                </li>
              </ul>
              
              <p className="text-lg text-gray-800 leading-relaxed mt-8">
                {t('closing')}
              </p>
            </div>
            
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/boutique-wines.webp"
                alt="Boutique French wines"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-gold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white leading-relaxed mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-medium tracking-wide hover:bg-yellow-500 transition-colors shadow-xl border-2 border-wine-gold"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProducersContentSection; 