import Link from 'next/link';
import { useTranslations } from 'next-intl';

const WinePortfolioSection = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-wine-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-8 text-wine-charcoal">
            {t('portfolio.title')}
          </h2>
          
          <p className="text-lg font-medium leading-relaxed mb-12 text-gray-800 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              t('portfolio.regions.burgundy'),
              t('portfolio.regions.bordeaux'),
              t('portfolio.regions.champagne'),
              t('portfolio.regions.rhone'),
              t('portfolio.regions.loire'),
              t('portfolio.regions.alsace')
            ].map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-wine-100 p-6 rounded-lg text-center shadow-md border border-wine-200/30 hover:shadow-lg hover:from-wine-100 hover:to-wine-200 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-wine-600 to-wine-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-wine-700 group-hover:to-wine-800 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zM4 4a4 4 0 014-4h4a4 4 0 014 4v12a4 4 0 01-4 4H8a4 4 0 01-4-4V4zm6 1a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-800 tracking-wide">{region}</p>
              </div>
            ))}
          </div>

          <Link 
            href="/wines" 
            className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-medium tracking-wide hover:bg-wine-600 hover:text-white transition-all duration-300 rounded-md shadow-md"
          >
            {t('portfolio.browse_portfolio')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WinePortfolioSection; 