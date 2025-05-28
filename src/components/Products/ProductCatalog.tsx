
import { useState } from 'react';
import { Filter, Search, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: "Cashmere Elegance Coat",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 87,
      aiScore: 96,
      category: "Outerwear"
    },
    {
      id: 2,
      name: "Artisan Leather Loafers",
      price: 849,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 132,
      aiScore: 94,
      category: "Footwear"
    },
    {
      id: 3,
      name: "Silk Atelier Dress",
      price: 1599,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 203,
      aiScore: 98,
      category: "Dresses"
    },
    {
      id: 4,
      name: "Heritage Timepiece",
      price: 2299,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      aiScore: 92,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Tailored Wool Blazer",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 189,
      aiScore: 95,
      category: "Blazers"
    },
    {
      id: 6,
      name: "Italian Leather Handbag",
      price: 1199,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 278,
      aiScore: 97,
      category: "Accessories"
    }
  ];

  const filters = ['all', 'outerwear', 'footwear', 'dresses', 'accessories', 'blazers'];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pearl to-cream">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold font-serif gradient-text mb-8">
            Curated Collection
          </h2>
          <p className="text-xl md:text-2xl text-mocha/80 max-w-3xl mx-auto leading-relaxed font-light">
            Each piece thoughtfully selected by our AI curators to complement your refined taste and elevate your wardrobe
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`capitalize rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-mocha to-bronze text-cream shadow-luxury' 
                    : 'border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All Pieces' : filter}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by style, designer, or mood..."
                className="w-80 px-6 py-3 bg-white border border-sand/30 rounded-full text-charcoal placeholder-mocha/60 focus:outline-none focus:border-mocha/50 focus:ring-2 focus:ring-mocha/20 transition-all duration-300"
              />
              <Search className="absolute right-4 top-3.5 w-5 h-5 text-mocha/60" />
            </div>
            
            <Button variant="outline" className="border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5 rounded-full px-6 py-3">
              <Filter className="w-4 h-4 mr-2" />
              Refine
            </Button>
          </div>
        </div>

        {/* AI Curation Bar */}
        <div className="luxury-card mb-16 p-8 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center shadow-luxury">
                <Sparkles className="w-8 h-8 text-cream" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal font-serif mb-2">Personal Curation Active</h3>
                <p className="text-mocha/70">Showcasing pieces aligned with your sophisticated style profile and preferences</p>
              </div>
            </div>
            <Button variant="outline" className="border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5 rounded-full px-6 py-3">
              <TrendingUp className="w-4 h-4 mr-2" />
              Style Insights
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-20">
          <Button size="lg" className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha luxury-hover px-12 py-4 text-lg font-medium text-cream rounded-full shadow-luxury">
            Discover More Pieces
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
