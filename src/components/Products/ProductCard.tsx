
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
      className="cyber-card group cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* AI Score Badge */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-neon-purple to-neon-cyan px-3 py-1 rounded-full text-xs font-semibold text-white">
        AI Match: {aiScore}%
      </div>

      {/* Favorite Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`w-5 h-5 ${isLiked ? 'fill-neon-rose text-neon-rose' : ''}`} />
      </Button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 h-64">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 brightness-110' : ''
          }`}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } flex items-center justify-center space-x-4`}>
          <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black">
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
          <Button size="sm" className="bg-neon-purple hover:bg-neon-purple/80 text-white">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-neon-cyan font-semibold uppercase tracking-wider">{category}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-white">{rating}</span>
            <span className="text-xs text-white/60">({reviews})</span>
          </div>
        </div>

        <h3 className="text-white font-semibold text-lg group-hover:text-neon-cyan transition-colors">
          {name}
        </h3>

        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">${price}</span>
          {originalPrice && (
            <span className="text-sm text-white/60 line-through">${originalPrice}</span>
          )}
        </div>

        {/* AI Insights */}
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
          <p className="text-xs text-white/80 mb-2">🤖 AI Insights:</p>
          <p className="text-xs text-neon-cyan">Perfect for your style profile • Trending in your area</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
