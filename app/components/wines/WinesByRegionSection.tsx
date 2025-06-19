import { useTranslations } from 'next-intl';

// Wine data organized by region
const winesByRegion = {
  champagne: [
    "Prestige des Sacres - Brut Nature Champagne",
    "Prestige des Sacres - Brut Prestige Champagne",
    "Prestige des Sacres - 30&3 Extra Brut Champagne",
    "Prestige des Sacres - Cuvée Dynastie Blanc de Blancs Brut Champagne",
    "Prestige des Sacres - Cuvée Grenat Millésime 2015 Champagne",
    "Prestige des Sacres - Brut Rosé Champagne",
    "Prestige des Sacres - Demi-Sec Champagne"
  ],
  burgundy: [
    "Closerie des Alisiers - Vieilles Vignes Chablis 1er Cru",
    "Closerie des Alisiers - Petit Chablis",
    "Closerie des Alisiers - Vieilles Vignes Marsannay",
    "Domaine G. Saumaize - Les Creuzettes Pouilly-Fuissé",
    "Domaine G. Saumaize - Mâcon-Davayé 'Les Belouzes'",
    "Domaine G. Saumaize - Bourgogne 'Les Prés Cousins'",
    "Domaine Maldant Pauvelot - Bourgogne Chardonnay",
    "Domaine Maldant Pauvelot - Bourgogne Pinot Noir"
  ],
  bordeaux: [
    "Château Croizet-Bages - Pauillac Grand Cru Classé",
    "La Croix des Aubrais - Pauillac",
    "La Croix des Aubrais - Saint-Julien",
    "La Croix des Aubrais - Pomerol",
    "Château Lilian Ladouys - Saint-Estèphe",
    "Château de France - Pessac-Léognan",
    "Château Capet Duverger - Saint-Émilion Grand Cru",
    "Château Tourbadon - Saint-Émilion Grand Cru",
    "Château Piney - Saint-Émilion Grand Cru",
    "Galius - Saint-Émilion Grand Cru",
    "Château Rocher Gardat - Montagne Saint-Émilion",
    "Château Haut Grelot - Blaye Côtes de Bordeaux Blanc",
    "Château Haut Grelot - Blaye Côtes de Bordeaux Rouge",
    "Château Haut-Bourcier - Blaye Côtes de Bordeaux",
    "Château Terre Blanque - Blaye Côtes de Bordeaux",
    "Château Haut-Lalande - Grand Vin Blaye Côtes de Bordeaux",
    "Château La Roche Bazin - Blaye Côtes de Bordeaux",
    "Château Haut Prieur - Blaye Côtes de Bordeaux",
    "Château Beaumont - Les Pierrières Blaye Côtes de Bordeaux",
    "Vignobles de Paloumey - Ailes de Paloumey Haut-Médoc",
    "Maison Bouey - Château La France Delhomme Médoc",
    "Michel Morin - Médoc",
    "Les Vignerons Réunis de Monségur - Cuvée Nokat Élevé Fût de Chêne Bordeaux",
    "Les Vignerons Réunis de Monségur - Cuvée Nokat Bordeaux",
    "Les Parcelles Delatour - Bordeaux Blanc",
    "Les Parcelles Delatour - Bordeaux Rouge"
  ],
  loire: [
    "Château de Sancerre - Sancerre Blanc",
    "Château de Sancerre - Sancerre Rouge"
  ],
  rhone: [
    "Cellier des Princes - Hauts des Coteaux Châteauneuf-du-Pape",
    "Cellier des Princes - Domaine de la Sainte Vierge Châteauneuf-du-Pape"
  ],
  languedoc: [
    "Château La Roque - Pic-Saint-Loup",
    "Vignobles Vellas - Marquis d'Orsay Languedoc Rouge",
    "Vignobles Vellas - Castelet Saint Pierre Cuvée d'Exception Corbières",
    "Château Val Joanis - Les Aubépines Luberon",
    "Château Val Joanis - Les Griottes Luberon"
  ],
  charente: [
    "Domaine Grains d'Estuaire - Grains de Confidence Chardonnay",
    "Domaine Grains d'Estuaire - Grains de Confidence Rouge",
    "Domaine Grains d'Estuaire - Arcane Syrah",
    "Domaine Grains d'Estuaire - Grains de Cocotte Chardonnay - Sauvignon",
    "Domaine Grains d'Estuaire - Grains de Cocotte Merlot - Cabernet",
    "Domaine Grains d'Estuaire - Grains de Folie Chardonnay"
  ]
};

const WinesByRegionSection = () => {
  const t = useTranslations('wines');

  const regionData = [
    { key: 'champagne', nameKey: 'regions.champagne', wines: winesByRegion.champagne },
    { key: 'burgundy', nameKey: 'regions.burgundy', wines: winesByRegion.burgundy },
    { key: 'bordeaux', nameKey: 'regions.bordeaux', wines: winesByRegion.bordeaux },
    { key: 'loire', nameKey: 'regions.loire', wines: winesByRegion.loire },
    { key: 'rhone', nameKey: 'regions.rhone', wines: winesByRegion.rhone },
    { key: 'languedoc', nameKey: 'regions.languedoc', wines: winesByRegion.languedoc },
    { key: 'charente', nameKey: 'regions.charente', wines: winesByRegion.charente }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-wine-charcoal mb-6">
              {t('portfolio.title')}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
              {t('portfolio.description')}
            </p>
          </div>

          {/* Wine Regions */}
          <div className="space-y-16">
            {regionData.map((region) => (
              <div key={region.key} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl lg:text-3xl font-serif font-light text-wine-gold mb-8 text-center">
                  {t(region.nameKey)}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {region.wines.map((wine, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-wine-50 to-wine-100 p-4 rounded-lg border border-wine-200/30 hover:shadow-md hover:from-wine-100 hover:to-wine-200 transition-all duration-300"
                    >
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {wine}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl lg:text-3xl font-serif font-light text-wine-charcoal mb-4">
              {t('contact.title')}
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-wine-gold text-wine-charcoal font-medium tracking-wide hover:bg-wine-600 hover:text-white transition-all duration-300 rounded-md shadow-md"
            >
              {t('contact.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinesByRegionSection; 