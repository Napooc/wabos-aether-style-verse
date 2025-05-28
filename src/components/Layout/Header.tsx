
import { useState } from 'react';
import { Search, User, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import CartSidebar from '@/components/Cart/CartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-sand/20 shadow-luxury">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-mocha to-bronze rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-cream font-bold text-xl font-serif">W</span>
              </div>
              <span className="text-3xl font-bold gradient-text font-serif tracking-wide">WABOS</span>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-12">
              <Link to="/" className={`transition-colors duration-300 font-medium ${isActive('/') ? 'text-mocha' : 'text-charcoal hover:text-mocha'}`}>Home</Link>
              <Link to="/collection" className={`transition-colors duration-300 font-medium ${isActive('/collection') ? 'text-mocha' : 'text-charcoal hover:text-mocha'}`}>Collection</Link>
              <Link to="/ai-stylist" className={`transition-colors duration-300 font-medium ${isActive('/ai-stylist') ? 'text-mocha' : 'text-charcoal hover:text-mocha'}`}>AI Stylist</Link>
              <Link to="/trends" className={`transition-colors duration-300 font-medium ${isActive('/trends') ? 'text-mocha' : 'text-charcoal hover:text-mocha'}`}>Trends</Link>
              <Link to="/atelier" className={`transition-colors duration-300 font-medium ${isActive('/atelier') ? 'text-mocha' : 'text-charcoal hover:text-mocha'}`}>Atelier</Link>
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-charcoal hover:bg-sand/20 hover:text-mocha transition-all duration-300 rounded-full relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-mocha text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="text-charcoal hover:bg-sand/20 hover:text-mocha transition-all duration-300 rounded-full">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
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
                <Link to="/" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Home</Link>
                <Link to="/collection" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Collection</Link>
                <Link to="/ai-stylist" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">AI Stylist</Link>
                <Link to="/trends" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Trends</Link>
                <Link to="/atelier" className="text-charcoal hover:text-mocha transition-colors duration-300 font-medium">Atelier</Link>
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

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
    </>
  );
};

export default Header;
