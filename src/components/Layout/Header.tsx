
import { useState } from 'react';
import { Search, User, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-morphism border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-['Orbitron']">W</span>
            </div>
            <span className="text-xl font-bold gradient-text font-['Orbitron']">WABOS</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Home</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Catalog</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">AI Studio</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Trends</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Virtual Try-On</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search with AI..."
                className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-neon-cyan transition-colors">Home</a>
              <a href="#" className="text-white hover:text-neon-cyan transition-colors">Catalog</a>
              <a href="#" className="text-white hover:text-neon-cyan transition-colors">AI Studio</a>
              <a href="#" className="text-white hover:text-neon-cyan transition-colors">Trends</a>
              <a href="#" className="text-white hover:text-neon-cyan transition-colors">Virtual Try-On</a>
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Search with AI..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple"
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
