
import { TrendingUp, BarChart3, Sparkles, Target } from 'lucide-react';

const TrendAnalytics = () => {
  const trendData = [
    { trend: "Minimalist Luxury", growth: "+145%", color: "from-mocha to-bronze" },
    { trend: "Sustainable Couture", growth: "+89%", color: "from-bronze to-gold" },
    { trend: "Artisan Craftsmanship", growth: "+123%", color: "from-gold to-sand" },
    { trend: "Timeless Elegance", growth: "+167%", color: "from-sand to-mocha" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-cream to-beige">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold font-serif gradient-text mb-8">
            Style Intelligence
          </h2>
          <p className="text-xl md:text-2xl text-mocha/80 max-w-3xl mx-auto leading-relaxed font-light">
            Sophisticated fashion analytics powered by artificial intelligence and global style consciousness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Trend Chart */}
          <div className="luxury-card p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-charcoal font-serif">Emerging Trends</h3>
              <BarChart3 className="w-8 h-8 text-mocha" />
            </div>
            <div className="space-y-6">
              {trendData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-pearl rounded-xl border border-sand/20">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    <span className="text-charcoal font-medium text-lg">{item.trend}</span>
                  </div>
                  <span className="text-mocha font-semibold text-lg">{item.growth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="luxury-card p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-charcoal font-serif">Curator Insights</h3>
              <Sparkles className="w-8 h-8 text-bronze" />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-mocha/5 to-bronze/5 rounded-xl border border-mocha/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-5 h-5 text-mocha" />
                  <span className="text-mocha font-semibold">Style Forecast</span>
                </div>
                <p className="text-charcoal/80 leading-relaxed">Textural richness and sustainable luxury materials are defining the next season's sophisticated aesthetic</p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-bronze/5 to-gold/5 rounded-xl border border-bronze/20">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-bronze" />
                  <span className="text-bronze font-semibold">Market Analysis</span>
                </div>
                <p className="text-charcoal/80 leading-relaxed">Your style profile perfectly aligns with the emerging artisanal luxury movement and conscious consumption trends</p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gold/5 to-sand/5 rounded-xl border border-gold/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="text-gold font-semibold">Personal Curation</span>
                </div>
                <p className="text-charcoal/80 leading-relaxed">Investment recommendation: Heritage pieces and timeless silhouettes for your refined wardrobe evolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Trend Map */}
        <div className="luxury-card p-12 rounded-2xl">
          <h3 className="text-3xl font-semibold text-charcoal mb-8 text-center font-serif">Global Style Pulse</h3>
          <div className="h-80 bg-gradient-to-br from-pearl via-beige to-sand rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury-lg animate-gentle-float">
                <TrendingUp className="w-12 h-12 text-cream" />
              </div>
              <p className="text-charcoal/70 text-lg mb-3">Style Intelligence Mapping</p>
              <p className="text-sm text-mocha/70">Analyzing 2.4M luxury fashion data points</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendAnalytics;
