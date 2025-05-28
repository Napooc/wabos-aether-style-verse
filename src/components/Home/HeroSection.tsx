
import { useState, useEffect } from 'react';
import { Sparkles, Zap, TrendingUp, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "AI-Powered Fashion Discovery",
    "Your Personal Style Assistant",
    "Future of Shopping is Here",
    "Discover Your Signature Look"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-rose-900/20 animate-gradient-xy"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-slide-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-['Orbitron'] mb-6">
            <span className="gradient-text">WABOS</span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-light text-white/90 transition-all duration-500">
              {heroTexts[currentText]}
            </h2>
          </div>
        </div>

        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Experience the future of fashion with our AI-powered platform. 
          Discover, try-on, and style with cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
            <Sparkles className="w-5 h-5 mr-2" />
            Start AI Styling
          </Button>
          <Button size="lg" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 px-8 py-4 text-lg">
            <Eye className="w-5 h-5 mr-2" />
            Virtual Try-On
          </Button>
        </div>

        {/* AI Features Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="cyber-card text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AI Style Analysis</h3>
            <p className="text-white/70">Advanced algorithms analyze your preferences and suggest perfect matches</p>
          </div>
          
          <div className="cyber-card text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-rose rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Trend Prediction</h3>
            <p className="text-white/70">Stay ahead with AI-powered trend forecasting and style recommendations</p>
          </div>
          
          <div className="cyber-card text-center hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-rose to-neon-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Virtual Try-On</h3>
            <p className="text-white/70">See how clothes fit before you buy with augmented reality technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
