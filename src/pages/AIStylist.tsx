
import { useState } from 'react';
import { Sparkles, Wand2, Camera, Upload, Palette, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import AIAssistant from '@/components/AI/AIAssistant';
import FloatingParticles from '@/components/Effects/FloatingParticles';

const AIStylist = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [stylePreferences, setStylePreferences] = useState<string[]>([]);

  const styleOptions = [
    { name: 'Minimalist', icon: '○', color: 'from-mocha to-bronze' },
    { name: 'Romantic', icon: '♡', color: 'from-bronze to-gold' },
    { name: 'Edgy', icon: '◊', color: 'from-gold to-sand' },
    { name: 'Classic', icon: '◦', color: 'from-sand to-mocha' },
    { name: 'Bohemian', icon: '✧', color: 'from-mocha to-gold' },
    { name: 'Modern', icon: '▲', color: 'from-bronze to-sand' }
  ];

  const toggleStylePreference = (style: string) => {
    setStylePreferences(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pearl to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold font-serif gradient-text mb-8">
              AI Style Studio
            </h1>
            <p className="text-xl md:text-2xl text-mocha/80 max-w-3xl mx-auto leading-relaxed font-light">
              Let our advanced AI understand your unique style DNA and curate a personalized wardrobe that reflects your aesthetic vision
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    activeStep >= step 
                      ? 'bg-gradient-to-r from-mocha to-bronze text-cream shadow-luxury' 
                      : 'bg-white border-2 border-sand text-mocha'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-20 h-1 mx-4 transition-all duration-300 ${
                      activeStep > step ? 'bg-gradient-to-r from-mocha to-bronze' : 'bg-sand/40'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Style Preferences */}
          {activeStep === 1 && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">
                  Discover Your Style DNA
                </h2>
                <p className="text-lg text-mocha/70">
                  Select the aesthetics that resonate with your personal style vision
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {styleOptions.map((option) => (
                  <div
                    key={option.name}
                    onClick={() => toggleStylePreference(option.name)}
                    className={`luxury-card p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                      stylePreferences.includes(option.name)
                        ? 'ring-2 ring-mocha shadow-luxury-lg scale-105'
                        : 'hover:scale-102'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl text-cream">{option.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal text-center mb-2 font-serif">
                      {option.name}
                    </h3>
                    <p className="text-sm text-mocha/70 text-center">
                      Express your {option.name.toLowerCase()} side
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setActiveStep(2)}
                  disabled={stylePreferences.length === 0}
                  size="lg"
                  className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-12 py-4 text-lg font-medium text-cream rounded-full shadow-luxury"
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  Continue to Analysis
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Upload & Analysis */}
          {activeStep === 2 && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">
                  Style Analysis
                </h2>
                <p className="text-lg text-mocha/70">
                  Upload photos of your current wardrobe or style inspirations for AI analysis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="luxury-card p-8 rounded-2xl text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-mocha to-bronze rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                    <Camera className="w-10 h-10 text-cream" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 font-serif">Current Wardrobe</h3>
                  <p className="text-mocha/70 mb-6">Let AI analyze your existing pieces to understand your current style</p>
                  <Button className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full px-8">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photos
                  </Button>
                </div>

                <div className="luxury-card p-8 rounded-2xl text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-bronze to-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                    <Palette className="w-10 h-10 text-cream" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 font-serif">Style Inspiration</h3>
                  <p className="text-mocha/70 mb-6">Share images that inspire your ideal aesthetic vision</p>
                  <Button className="bg-gradient-to-r from-bronze to-gold hover:from-gold hover:to-bronze text-cream rounded-full px-8">
                    <Upload className="w-4 h-4 mr-2" />
                    Add Inspiration
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setActiveStep(3)}
                  size="lg"
                  className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-12 py-4 text-lg font-medium text-cream rounded-full shadow-luxury"
                >
                  <Wand2 className="w-5 h-5 mr-3" />
                  Generate Style Profile
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {activeStep === 3 && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">
                  Your Curated Style Profile
                </h2>
                <p className="text-lg text-mocha/70">
                  Based on your preferences and AI analysis, here's your personalized style curation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Style DNA */}
                <div className="luxury-card p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-mocha to-bronze rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-cream" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal font-serif">Style DNA</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-mocha/70">Minimalist</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-sand/30 rounded-full">
                          <div className="w-16 h-2 bg-gradient-to-r from-mocha to-bronze rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-charcoal">80%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mocha/70">Classic</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-sand/30 rounded-full">
                          <div className="w-14 h-2 bg-gradient-to-r from-bronze to-gold rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-charcoal">70%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mocha/70">Modern</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-sand/30 rounded-full">
                          <div className="w-12 h-2 bg-gradient-to-r from-gold to-sand rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-charcoal">60%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="luxury-card p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-bronze to-gold rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-cream" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal font-serif">Your Palette</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {['#191919', '#6F4E37', '#D2B48C', '#F5F5DC', '#FCFCFC', '#8B4513', '#DAA520', '#F8F6F0'].map((color, index) => (
                      <div key={index} className="aspect-square rounded-lg shadow-sm border border-sand/30" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="luxury-card p-8 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-sand rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-cream" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal font-serif">AI Insights</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-pearl/50 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-gold" />
                        <span className="font-semibold text-charcoal text-sm">Investment Piece</span>
                      </div>
                      <p className="text-xs text-mocha/70">Focus on quality blazers and tailored pieces for your wardrobe foundation</p>
                    </div>
                    <div className="p-4 bg-pearl/50 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-gold" />
                        <span className="font-semibold text-charcoal text-sm">Color Strategy</span>
                      </div>
                      <p className="text-xs text-mocha/70">Neutral base with strategic pops of warm earth tones</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-12 py-4 text-lg font-medium text-cream rounded-full shadow-luxury mr-4"
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  View Curated Pieces
                </Button>
                <Button
                  onClick={() => setActiveStep(1)}
                  size="lg"
                  variant="outline"
                  className="border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5 rounded-full px-12 py-4 text-lg font-medium"
                >
                  Start Over
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default AIStylist;
