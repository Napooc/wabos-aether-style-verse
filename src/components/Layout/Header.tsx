
import { useState } from 'react';
import { Search, User, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-sand/20 shadow-luxury">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-mocha to-bronze rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-cream font-bold text-xl font-serif">W</span>
            </div>
            <span className="text-3xl font-bold gradient-text font-serif tracking-wide">WABOS</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Home</a>
            <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Collection</a>
            <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">AI Stylist</a>
            <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Trends</a>
            <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Atelier</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Discover your style..."
                className="w-80 px-6 py-3 bg-pearl border border-sand/30 rounded-full text-charcoal placeholder-mocha/60 focus:outline-none focus:border-mocha/50 focus:ring-2 focus:ring-mocha/20 transition-all duration-300"
              />
              <Search className="absolute right-4 top-3.5 w-5 h-5 text-mocha/60" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-charcoal hover:bg-sand/20 hover:text-mocha transition-all duration-300 rounded-full">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-charcoal hover:bg-sand/20 hover:text-mocha transition-all duration-300 rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-charcoal hover:bg-sand/20 hover:text-mocha transition-all duration-300 rounded-full">
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-charcoal hover:bg-sand/20 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-sand/20 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-6">
              <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Home</a>
              <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Collection</a>
              <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">AI Stylist</a>
              <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Trends</a>
              <a href="#" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Atelier</a>
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Discover your style..."
                  className="w-full px-6 py-3 bg-pearl border border-sand/30 rounded-full text-charcoal placeholder-mocha/60 focus:outline-none focus:border-mocha/50 transition-all duration-300"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
