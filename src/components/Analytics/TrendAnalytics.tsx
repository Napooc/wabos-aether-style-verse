
import { TrendingUp, BarChart3, Zap, Target } from 'lucide-react';

const TrendAnalytics = () => {
  const trendData = [
    { trend: "Cyber Fashion", growth: "+145%", color: "from-neon-purple to-neon-cyan" },
    { trend: "Sustainable Tech", growth: "+89%", color: "from-neon-cyan to-neon-rose" },
    { trend: "AI Patterns", growth: "+67%", color: "from-neon-rose to-neon-gold" },
    { trend: "Holographic Styles", growth: "+123%", color: "from-neon-gold to-neon-purple" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] gradient-text mb-6">
            AI Trend Analytics
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real-time fashion intelligence powered by machine learning algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Trend Chart */}
          <div className="cyber-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Trending Categories</h3>
              <BarChart3 className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className="space-y-4">
              {trendData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    <span className="text-white font-medium">{item.trend}</span>
                  </div>
                  <span className="text-neon-cyan font-semibold">{item.growth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="cyber-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">AI Insights</h3>
              <Zap className="w-6 h-6 text-neon-purple" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-lg border border-neon-purple/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-neon-purple" />
                  <span className="text-neon-purple font-semibold">Style Prediction</span>
                </div>
                <p className="text-white/80 text-sm">Metallic textures will peak in the next 2 weeks based on social sentiment analysis</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-neon-cyan/10 to-neon-rose/10 rounded-lg border border-neon-cyan/30">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-neon-cyan" />
                  <span className="text-neon-cyan font-semibold">Market Analysis</span>
                </div>
                <p className="text-white/80 text-sm">Your style profile aligns 94% with emerging quantum aesthetic trends</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-neon-rose/10 to-neon-gold/10 rounded-lg border border-neon-rose/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-neon-rose" />
                  <span className="text-neon-rose font-semibold">Personal Forecast</span>
                </div>
                <p className="text-white/80 text-sm">Recommended investment: Tech-wear accessories for your Q2 wardrobe evolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Trend Map */}
        <div className="cyber-card">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Global Fashion Pulse</h3>
          <div className="h-64 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-rose-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-neon">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/70">Interactive trend visualization loading...</p>
              <p className="text-sm text-neon-cyan mt-2">AI analyzing 2.4M fashion data points</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendAnalytics;
