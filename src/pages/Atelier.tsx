
import { Crown, Scissors, Palette, Calendar, Clock, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import AIAssistant from '@/components/AI/AIAssistant';
import FloatingParticles from '@/components/Effects/FloatingParticles';

const Atelier = () => {
  const services = [
    {
      icon: Crown,
      title: "Bespoke Couture",
      description: "One-of-a-kind pieces crafted exclusively for you by master artisans",
      price: "From $5,000",
      duration: "8-12 weeks",
      color: "from-mocha to-bronze"
    },
    {
      icon: Scissors,
      title: "Custom Tailoring",
      description: "Perfect fit guaranteed with precision measurements and expert craftsmanship",
      price: "From $800",
      duration: "3-4 weeks",
      color: "from-bronze to-gold"
    },
    {
      icon: Palette,
      title: "Personal Styling",
      description: "Complete wardrobe curation with our expert stylists and AI assistance",
      price: "From $500",
      duration: "2-3 days",
      color: "from-gold to-sand"
    }
  ];

  const artisans = [
    {
      name: "Isabella Rossini",
      specialty: "Couture Dressmaking",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1594736797933-d0811ba2fe65?w=300&h=300&fit=crop&crop=face",
      achievements: ["Milan Fashion Week", "Royal Commissions", "Heritage Techniques Master"]
    },
    {
      name: "Alexandre Dubois",
      specialty: "Master Tailor",
      experience: "22 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      achievements: ["Savile Row Trained", "Bespoke Guild Member", "Award-Winning Craftsman"]
    },
    {
      name: "Elena Volkov",
      specialty: "Luxury Accessories",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b176?w=300&h=300&fit=crop&crop=face",
      achievements: ["Hermès Alumni", "Leather Artisan Master", "European Craft Award"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pearl to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold font-serif gradient-text mb-8">
              The Atelier
            </h1>
            <p className="text-xl md:text-2xl text-mocha/80 max-w-3xl mx-auto leading-relaxed font-light">
              Where artistry meets luxury. Experience the pinnacle of bespoke fashion through our master craftspeople and time-honored techniques
            </p>
          </div>

          {/* Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">Bespoke Services</h2>
              <p className="text-lg text-mocha/70">Crafted to perfection, designed for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="luxury-card p-8 rounded-2xl luxury-hover group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 text-center font-serif">{service.title}</h3>
                  <p className="text-mocha/70 text-center mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-mocha/60 flex items-center">
                        <span className="mr-2">💰</span>
                        Price
                      </span>
                      <span className="font-semibold text-charcoal">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mocha/60 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Timeline
                      </span>
                      <span className="font-semibold text-charcoal">{service.duration}</span>
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 text-cream rounded-full transition-all duration-300`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Master Artisans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">Master Artisans</h2>
              <p className="text-lg text-mocha/70">Meet the craftspeople behind your bespoke pieces</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artisans.map((artisan, index) => (
                <div key={index} className="luxury-card p-8 rounded-2xl luxury-hover text-center">
                  <div className="relative mb-6">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-luxury"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-mocha to-bronze rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-cream" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-charcoal mb-2 font-serif">{artisan.name}</h3>
                  <p className="text-mocha font-medium mb-2">{artisan.specialty}</p>
                  <p className="text-mocha/60 text-sm mb-4">{artisan.experience} experience</p>
                  
                  <div className="space-y-2">
                    {artisan.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-center justify-center space-x-2">
                        <Star className="w-3 h-3 text-gold" />
                        <span className="text-xs text-mocha/70">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="luxury-card p-12 rounded-2xl mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif text-charcoal mb-6">The Bespoke Journey</h2>
              <p className="text-lg text-mocha/70">From vision to reality in five refined steps</p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-mocha via-bronze via-gold to-sand transform -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  { step: 1, title: "Consultation", desc: "Discover your vision" },
                  { step: 2, title: "Design", desc: "Create your blueprint" },
                  { step: 3, title: "Measurements", desc: "Perfect fit precision" },
                  { step: 4, title: "Crafting", desc: "Artisan creation" },
                  { step: 5, title: "Delivery", desc: "Your masterpiece" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-mocha to-bronze rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury text-cream font-bold text-xl relative z-10">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2 font-serif">{item.title}</h3>
                    <p className="text-sm text-mocha/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Virtual Atelier Tour */}
          <div className="luxury-card p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold font-serif text-charcoal mb-6">Experience Our Atelier</h2>
            <p className="text-lg text-mocha/70 mb-8 max-w-2xl mx-auto">
              Take a virtual tour of our luxury workshop and witness the artistry that goes into every bespoke piece
            </p>
            
            <div className="bg-gradient-to-br from-mocha/5 to-bronze/5 rounded-2xl p-8 mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury-lg animate-gentle-float">
                <Crown className="w-16 h-16 text-cream" />
              </div>
              <p className="text-mocha/70 mb-6">360° Virtual Workshop Experience</p>
              <Button size="lg" className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-12 py-4 text-lg font-medium text-cream rounded-full shadow-luxury">
                Begin Virtual Tour
              </Button>
            </div>
            
            <p className="text-sm text-mocha/60">Available Monday - Friday, 9 AM - 6 PM EST</p>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Atelier;
