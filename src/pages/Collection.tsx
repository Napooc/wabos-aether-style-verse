
import { useState } from 'react';
import { Filter, Grid, List, SlidersHorizontal, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import AIAssistant from '@/components/AI/AIAssistant';
import FloatingParticles from '@/components/Effects/FloatingParticles';
import { useCart } from '@/contexts/CartContext';

const Collection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = ['all', 'dresses', 'outerwear', 'accessories', 'footwear', 'jewelry'];

  const products = [
    {
      id: 1,
      name: "Ethereal Silk Evening Gown",
      price: 2899,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 127,
      category: "dresses",
      description: "Hand-crafted silk evening gown with intricate beadwork and flowing silhouette."
    },
    {
      id: 2,
      name: "Artisan Leather Trench Coat",
      price: 1899,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 89,
      category: "outerwear",
      description: "Luxurious leather trench coat with hand-stitched details and timeless design."
    },
    {
      id: 3,
      name: "Diamond Constellation Necklace",
      price: 5299,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop",
      rating: 5.0,
      reviews: 43,
      category: "jewelry",
      description: "Exquisite diamond necklace inspired by celestial constellations."
    },
    {
      id: 4,
      name: "Italian Suede Ankle Boots",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "footwear",
      description: "Handcrafted Italian suede boots with architectural heel design."
    },
    {
      id: 5,
      name: "Vintage Inspired Clutch",
      price: 899,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
      rating: 4.6,
      reviews: 78,
      category: "accessories",
      description: "Vintage-inspired clutch with Art Deco motifs and gold hardware."
    },
    {
      id: 6,
      name: "Cashmere Blend Sweater",
      price: 799,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 234,
      category: "outerwear",
      description: "Ultra-soft cashmere blend sweater with ribbed texture and elegant drape."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-cream to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold font-serif gradient-text mb-8">
              The Collection
            </h1>
            <p className="text-xl md:text-2xl text-mocha/80 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our meticulously curated selection of luxury fashion pieces, each chosen for its exceptional craftsmanship and timeless appeal
            </p>
          </div>

          {/* Filters & Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`capitalize rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-mocha to-bronze text-cream shadow-luxury' 
                      : 'border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Items' : category}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-mocha/30 text-mocha hover:border-mocha rounded-full">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <div className="flex bg-white rounded-full p-1 border border-sand/30">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-full"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-full"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`luxury-card group cursor-pointer relative overflow-hidden rounded-2xl luxury-hover ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-80 h-64 flex-shrink-0' : 'h-96 mb-6'
                } rounded-xl`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
                    <Button size="sm" className="bg-white/90 backdrop-blur-sm border-0 text-charcoal hover:bg-white rounded-full px-6">
                      Quick View
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white hover:bg-white/30 rounded-full"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>

                <div className={`${viewMode === 'list' ? 'flex-1 p-8' : 'p-6'} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-mocha font-semibold uppercase tracking-widest">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm text-charcoal font-medium">{product.rating}</span>
                      <span className="text-xs text-mocha/60">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-charcoal font-serif font-semibold text-xl group-hover:text-mocha transition-colors leading-tight">
                    {product.name}
                  </h3>

                  {viewMode === 'list' && (
                    <p className="text-mocha/70 leading-relaxed">{product.description}</p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-charcoal">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-mocha/60 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    
                    <Button 
                      className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full px-6"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-20">
            <Button size="lg" className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-12 py-4 text-lg font-medium text-cream rounded-full shadow-luxury">
              Discover More Treasures
            </Button>
          </div>
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Collection;
