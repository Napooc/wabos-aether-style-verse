
import { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  aiScore: number;
  category: string;
}

const ProductCard = ({ name, price, originalPrice, image, rating, reviews, aiScore, category }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="luxury-card group cursor-pointer relative overflow-hidden rounded-2xl luxury-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* AI Score Badge */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-mocha to-bronze px-4 py-2 rounded-full text-xs font-semibold text-cream shadow-luxury">
        {aiScore}% Match
      </div>

      {/* Favorite Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-charcoal hover:bg-white/30 rounded-full"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`w-5 h-5 ${isLiked ? 'fill-mocha text-mocha' : ''}`} />
      </Button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-6 h-80">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-105' : ''
          }`}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-charcoal/20 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } flex items-center justify-center space-x-4`}>
          <Button size="sm" className="bg-white/90 backdrop-blur-sm border-0 text-charcoal hover:bg-white rounded-full px-6">
            <Eye className="w-4 h-4 mr-2" />
            View
          </Button>
          <Button size="sm" className="bg-mocha hover:bg-bronze text-cream rounded-full px-6">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs text-mocha font-semibold uppercase tracking-widest">{category}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm text-charcoal font-medium">{rating}</span>
            <span className="text-xs text-mocha/60">({reviews})</span>
          </div>
        </div>

        <h3 className="text-charcoal font-serif font-semibold text-xl group-hover:text-mocha transition-colors leading-tight">
          {name}
        </h3>

        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-charcoal">${price}</span>
          {originalPrice && (
            <span className="text-lg text-mocha/60 line-through">${originalPrice}</span>
          )}
        </div>

        {/* AI Insights */}
        <div className="bg-sand/20 rounded-xl p-4 border border-sand/30">
          <p className="text-xs text-mocha/80 mb-2 font-medium">✨ Curator's Note:</p>
          <p className="text-xs text-mocha/70 leading-relaxed">Perfectly aligned with your refined aesthetic • Trending among connoisseurs</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
