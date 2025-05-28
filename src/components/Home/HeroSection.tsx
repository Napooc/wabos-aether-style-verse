
import { useState, useEffect } from 'react';
import { Sparkles, Wand2, TrendingUp, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Timeless Elegance Redefined",
    "Your Personal Style Curator",
    "Where Art Meets Fashion",
    "Discover Your Signature Style"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-pearl to-beige">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-luxury-fade-in">
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-bold font-serif mb-8 tracking-wider">
            <span className="gradient-text">WABOS</span>
          </h1>
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-light text-charcoal/90 transition-all duration-700 font-serif italic">
              {heroTexts[currentText]}
            </h2>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-mocha/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Experience the pinnacle of fashion curation with our AI-powered platform. 
          Discover, refine, and elevate your personal style with unparalleled sophistication.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button size="lg" className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-10 py-4 text-lg font-medium text-cream rounded-full shadow-luxury">
            <Sparkles className="w-5 h-5 mr-3" />
            Begin Your Journey
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-mocha text-mocha hover:bg-mocha hover:text-cream luxury-hover px-10 py-4 text-lg font-medium rounded-full">
            <Eye className="w-5 h-5 mr-3" />
            Virtual Atelier
          </Button>
        </div>

        {/* AI Features Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="luxury-card p-8 rounded-2xl luxury-hover text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
              <Wand2 className="w-10 h-10 text-cream" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-charcoal font-serif">Style Intelligence</h3>
            <p className="text-mocha/70 leading-relaxed">Sophisticated algorithms understand your aesthetic preferences and curate pieces that reflect your unique style DNA</p>
          </div>
          
          <div className="luxury-card p-8 rounded-2xl luxury-hover text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-bronze to-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
              <TrendingUp className="w-10 h-10 text-cream" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-charcoal font-serif">Trend Forecasting</h3>
            <p className="text-mocha/70 leading-relaxed">Stay ahead of the curve with AI-powered trend analysis and exclusive access to emerging designer collections</p>
          </div>
          
          <div className="luxury-card p-8 rounded-2xl luxury-hover text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-sand rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
              <Eye className="w-10 h-10 text-cream" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-charcoal font-serif">Virtual Styling</h3>
            <p className="text-mocha/70 leading-relaxed">Experience pieces through advanced visualization technology before making your investment in timeless fashion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
