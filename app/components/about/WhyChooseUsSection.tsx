import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WhyChooseUsSection = () => {
  const tWhoWeAre = useTranslations('about.who_we_are');
  const tWhyBoutique = useTranslations('about.why_boutique');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/boutique-wines.webp"
              alt="Boutique French wines collection"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8">
              {tWhoWeAre('title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
              <p>
                {tWhoWeAre('paragraph1')}
              </p>
              <p>
                {tWhoWeAre('paragraph2')}
              </p>
              <p>
                {tWhoWeAre('paragraph3')}
              </p>
            </div>
          </div>
        </div>

        {/* Why Boutique Wines Matter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-8">
              {tWhyBoutique('title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
              <p>
                {tWhyBoutique('paragraph1')}
              </p>
              <p className="font-medium">
                {tWhyBoutique('paragraph2')}<br />
                {tWhyBoutique('paragraph3')}
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/philosophy-winemaker.webp"
              alt="Artisan winemaker in vineyard"
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

export default WhyChooseUsSection; 