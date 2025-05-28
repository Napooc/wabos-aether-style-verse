
import { useState } from 'react';
import { Filter, Search, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: "Cyberpunk Neon Jacket",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      aiScore: 96,
      category: "Outerwear"
    },
    {
      id: 2,
      name: "Future Tech Sneakers",
      price: 189,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      aiScore: 94,
      category: "Footwear"
    },
    {
      id: 3,
      name: "Holographic Dress",
      price: 259,
      originalPrice: 329,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 156,
      aiScore: 92,
      category: "Dresses"
    },
    {
      id: 4,
      name: "AI-Crafted Sunglasses",
      price: 149,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 78,
      aiScore: 89,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Matrix Style Coat",
      price: 449,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 203,
      aiScore: 98,
      category: "Outerwear"
    },
    {
      id: 6,
      name: "Quantum Pants",
      price: 179,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
      rating: 4.5,
      reviews: 92,
      aiScore: 87,
      category: "Bottoms"
    }
  ];

  const filters = ['all', 'outerwear', 'footwear', 'dresses', 'accessories', 'bottoms'];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] gradient-text mb-6">
            AI Curated Collection
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover fashion pieces selected by our advanced AI algorithms, perfectly matched to your style DNA
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`capitalize ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white' 
                    : 'border-white/30 text-white hover:border-neon-cyan hover:text-neon-cyan'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All Items' : filter}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by style, color, or mood..."
                className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            
            <Button variant="outline" className="border-white/30 text-white hover:border-neon-cyan hover:text-neon-cyan">
              <Filter className="w-4 h-4 mr-2" />
              AI Filter
            </Button>
          </div>
        </div>

        {/* AI Recommendations Bar */}
        <div className="cyber-card mb-12 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">AI Recommendations Active</h3>
                <p className="text-white/70">Showing personalized picks based on your style profile</p>
              </div>
            </div>
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:scale-105 transition-all duration-300 px-8 py-4">
            Load More AI Picks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
