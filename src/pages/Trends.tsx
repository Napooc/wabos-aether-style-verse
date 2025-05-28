
import { TrendingUp, BarChart3, Calendar, Globe, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import AIAssistant from '@/components/AI/AIAssistant';
import FloatingParticles from '@/components/Effects/FloatingParticles';

const Trends = () => {
  const trendData = [
    { 
      trend: "Sustainable Luxury", 
      growth: "+189%", 
      color: "from-mocha to-bronze",
      description: "Eco-conscious high-end fashion gaining unprecedented momentum",
      impact: "Global movement reshaping luxury standards"
    },
    { 
      trend: "Artisan Craftsmanship", 
      growth: "+156%", 
      color: "from-bronze to-gold",
      description: "Hand-made pieces celebrating traditional techniques",
      impact: "Revival of heritage skills and slow fashion"
    },
    { 
      trend: "Gender-Fluid Design", 
      growth: "+134%", 
      color: "from-gold to-sand",
      description: "Boundary-breaking fashion transcending traditional norms",
      impact: "Inclusive design philosophy reshaping industry"
    },
    { 
      trend: "Tech-Enhanced Textiles", 
      growth: "+112%", 
      color: "from-sand to-mocha",
      description: "Smart fabrics merging innovation with luxury",
      impact: "Future of fashion meets cutting-edge technology"
    }
  ];

  const seasonalTrends = [
    {
      season: "Spring 2024",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      trends: ["Soft Pastels", "Flowing Silhouettes", "Botanical Prints"]
    },
    {
      season: "Summer 2024",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      trends: ["Sustainable Linen", "Bold Accessories", "Minimalist Elegance"]
    },
    {
      season: "Fall 2024",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
      trends: ["Rich Textures", "Earth Tones", "Structured Coats"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-cream to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold font-serif gradient-text mb-8">
              Fashion Foresight
            </h1>
            <p className="text-xl md:text-2xl text-mocha/80 max-w-3xl mx-auto leading-relaxed font-light">
              Explore the future of luxury fashion through AI-powered trend analysis and global style intelligence
            </p>
          </div>

          {/* Global Trend Analysis */}
          <div className="luxury-card p-12 rounded-2xl mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">Global Trend Pulse</h2>
              <p className="text-lg text-mocha/70">Real-time analysis of emerging fashion movements worldwide</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {trendData.map((item, index) => (
                  <div key={index} className="luxury-card p-6 rounded-xl border border-sand/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                        <h3 className="text-xl font-semibold text-charcoal font-serif">{item.trend}</h3>
                      </div>
                      <span className="text-2xl font-bold text-mocha">{item.growth}</span>
                    </div>
                    <p className="text-mocha/70 mb-2">{item.description}</p>
                    <p className="text-sm text-mocha/60 italic">{item.impact}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className="luxury-card p-8 rounded-2xl text-center max-w-md">
                  <div className="w-24 h-24 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury-lg animate-gentle-float">
                    <TrendingUp className="w-12 h-12 text-cream" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 font-serif">AI Trend Engine</h3>
                  <p className="text-mocha/70 mb-6">Analyzing 4.7M data points from global fashion capitals</p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-mocha/60">Processing Speed</span>
                      <span className="text-charcoal font-semibold">Real-time</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-mocha/60">Accuracy Rate</span>
                      <span className="text-charcoal font-semibold">94.7%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-mocha/60">Global Coverage</span>
                      <span className="text-charcoal font-semibold">127 Cities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Forecast */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">Seasonal Forecast</h2>
              <p className="text-lg text-mocha/70">Anticipating the evolution of luxury fashion aesthetics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seasonalTrends.map((season, index) => (
                <div key={index} className="luxury-card overflow-hidden rounded-2xl luxury-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={season.image}
                      alt={season.season}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-cream font-serif">{season.season}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {season.trends.map((trend, tIndex) => (
                        <div key={tIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-mocha to-bronze rounded-full"></div>
                          <span className="text-charcoal font-medium">{trend}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trend Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="luxury-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-mocha to-bronze rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-cream" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal font-serif">Global Impact</h3>
              </div>
              <p className="text-mocha/70 mb-4">Sustainable luxury is reshaping consumer expectations across all demographics, with 73% of luxury shoppers prioritizing ethical production.</p>
              <Button variant="outline" className="border-mocha/30 text-mocha hover:border-mocha rounded-full">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Data
              </Button>
            </div>

            <div className="luxury-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-bronze to-gold rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-cream" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal font-serif">Consumer Behavior</h3>
              </div>
              <p className="text-mocha/70 mb-4">Modern luxury consumers seek authentic craftsmanship and transparent supply chains, valuing story and heritage over pure brand prestige.</p>
              <Button variant="outline" className="border-bronze/30 text-bronze hover:border-bronze rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Insights
              </Button>
            </div>

            <div className="luxury-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-sand rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-cream" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal font-serif">Future Forecast</h3>
              </div>
              <p className="text-mocha/70 mb-4">The next wave of luxury fashion will be defined by personalization, sustainability, and the integration of technology with traditional craftsmanship.</p>
              <Button variant="outline" className="border-gold/30 text-gold hover:border-gold rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Explore
              </Button>
            </div>
          </div>

          {/* Trend Subscription */}
          <div className="luxury-card p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold font-serif text-charcoal mb-6">Stay Ahead of the Curve</h2>
            <p className="text-lg text-mocha/70 mb-8 max-w-2xl mx-auto">
              Receive exclusive trend forecasts and style insights delivered to your inbox, curated by our AI fashion intelligence team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white border border-sand/30 rounded-full text-charcoal placeholder-mocha/60 focus:outline-none focus:border-mocha/50 focus:ring-2 focus:ring-mocha/20"
              />
              <Button className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Trends;
