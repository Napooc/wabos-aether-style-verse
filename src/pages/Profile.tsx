
import { useState } from 'react';
import { User, Heart, ShoppingBag, Settings, Crown, Sparkles, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import AIAssistant from '@/components/AI/AIAssistant';
import FloatingParticles from '@/components/Effects/FloatingParticles';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const orderHistory = [
    {
      id: "WB-2024-001",
      date: "March 15, 2024",
      items: ["Silk Evening Gown", "Diamond Necklace"],
      total: 8199,
      status: "Delivered"
    },
    {
      id: "WB-2024-002",
      date: "February 28, 2024",
      items: ["Cashmere Coat", "Leather Boots"],
      total: 3298,
      status: "Delivered"
    },
    {
      id: "WB-2024-003",
      date: "February 10, 2024",
      items: ["Custom Blazer"],
      total: 1899,
      status: "In Progress"
    }
  ];

  const wishlistItems = [
    {
      name: "Artisan Leather Handbag",
      price: 2299,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
    },
    {
      name: "Pearl Drop Earrings",
      price: 1599,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop"
    },
    {
      name: "Vintage Watch",
      price: 3499,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-cream to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Profile Header */}
          <div className="luxury-card p-12 rounded-2xl mb-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-mocha to-bronze rounded-full flex items-center justify-center shadow-luxury-lg">
                  <User className="w-16 h-16 text-cream" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-gold to-sand rounded-full flex items-center justify-center shadow-luxury">
                  <Crown className="w-5 h-5 text-cream" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold font-serif text-charcoal mb-2">Sophia Blackwell</h1>
                <p className="text-lg text-mocha/70 mb-4">Connoisseur Member since 2023</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-gradient-to-r from-mocha/10 to-bronze/10 px-4 py-2 rounded-full border border-mocha/20">
                    <span className="text-sm text-mocha font-medium">Style DNA: Minimalist Luxury</span>
                  </div>
                  <div className="bg-gradient-to-r from-bronze/10 to-gold/10 px-4 py-2 rounded-full border border-bronze/20">
                    <span className="text-sm text-bronze font-medium">VIP Tier: Platinum</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full px-8 mb-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <p className="text-sm text-mocha/60">Member ID: WB-23-7891</p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {[
              { id: 'overview', label: 'Overview', icon: Sparkles },
              { id: 'orders', label: 'Order History', icon: ShoppingBag },
              { id: 'wishlist', label: 'Wishlist', icon: Heart },
              { id: 'achievements', label: 'Achievements', icon: Award }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-mocha to-bronze text-cream shadow-luxury' 
                    : 'border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Style Profile */}
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold font-serif text-charcoal mb-6">Your Style Profile</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-mocha mb-3">Aesthetic Preferences</h4>
                      <div className="space-y-2">
                        {['Minimalist', 'Classic', 'Sustainable'].map((style) => (
                          <div key={style} className="flex justify-between">
                            <span className="text-mocha/70">{style}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-2 bg-sand/30 rounded-full">
                                <div className="h-2 bg-gradient-to-r from-mocha to-bronze rounded-full" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mocha mb-3">Favorite Categories</h4>
                      <div className="space-y-2">
                        {['Outerwear', 'Accessories', 'Footwear'].map((category) => (
                          <div key={category} className="bg-pearl/50 px-3 py-2 rounded-lg">
                            <span className="text-sm text-charcoal">{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold font-serif text-charcoal mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: "Added to wishlist", item: "Pearl Drop Earrings", time: "2 hours ago" },
                      { action: "Completed order", item: "Silk Evening Gown", time: "3 days ago" },
                      { action: "Style consultation", item: "Personal AI Session", time: "1 week ago" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-pearl/30 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-mocha to-bronze rounded-full flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-cream" />
                          </div>
                          <div>
                            <p className="text-charcoal font-medium">{activity.action}</p>
                            <p className="text-sm text-mocha/70">{activity.item}</p>
                          </div>
                        </div>
                        <span className="text-xs text-mocha/60">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Stats */}
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold font-serif text-charcoal mb-6">Your Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-mocha/70">Total Orders</span>
                      <span className="font-bold text-charcoal">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mocha/70">Wishlist Items</span>
                      <span className="font-bold text-charcoal">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mocha/70">Style Score</span>
                      <span className="font-bold text-charcoal">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mocha/70">Member Since</span>
                      <span className="font-bold text-charcoal">2023</span>
                    </div>
                  </div>
                </div>

                {/* Loyalty Status */}
                <div className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold font-serif text-charcoal mb-6">Loyalty Status</h3>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-gold to-sand rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury">
                      <Crown className="w-10 h-10 text-cream" />
                    </div>
                    <h4 className="text-lg font-semibold text-charcoal mb-2">Platinum Connoisseur</h4>
                    <p className="text-sm text-mocha/70 mb-4">Exclusive access to limited collections</p>
                    <div className="bg-pearl/50 rounded-xl p-4">
                      <p className="text-xs text-mocha/60 mb-2">Progress to Diamond</p>
                      <div className="w-full h-2 bg-sand/30 rounded-full">
                        <div className="w-3/4 h-2 bg-gradient-to-r from-gold to-sand rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="luxury-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-serif text-charcoal mb-8">Order History</h3>
              <div className="space-y-6">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border border-sand/30 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">Order {order.id}</h4>
                        <p className="text-sm text-mocha/70 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {order.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-charcoal">${order.total.toLocaleString()}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {order.items.map((item, index) => (
                        <span key={index} className="bg-pearl/50 px-3 py-1 rounded-full text-sm text-charcoal">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wishlistItems.map((item, index) => (
                <div key={index} className="luxury-card rounded-2xl overflow-hidden luxury-hover">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-2 font-serif">{item.name}</h3>
                    <p className="text-2xl font-bold text-mocha mb-4">${item.price.toLocaleString()}</p>
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full">
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-mocha/30 text-mocha hover:border-mocha">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "First Purchase", desc: "Welcome to WABOS", icon: "🎉", earned: true },
                { title: "Style Curator", desc: "10 orders completed", icon: "👑", earned: true },
                { title: "Trend Setter", desc: "Early adopter", icon: "⭐", earned: true },
                { title: "Loyalty Master", desc: "Platinum status", icon: "💎", earned: true },
                { title: "Connoisseur", desc: "$50k+ lifetime", icon: "🏆", earned: false },
                { title: "Style Icon", desc: "100 orders", icon: "✨", earned: false }
              ].map((achievement, index) => (
                <div key={index} className={`luxury-card p-6 rounded-2xl text-center ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-gold/10 to-sand/10 border-gold/30' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className={`text-lg font-semibold mb-2 font-serif ${
                    achievement.earned ? 'text-charcoal' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    achievement.earned ? 'text-mocha/70' : 'text-gray-400'
                  }`}>
                    {achievement.desc}
                  </p>
                  {achievement.earned && (
                    <div className="mt-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-gold to-sand text-cream text-xs font-medium rounded-full">
                        Earned
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Profile;
