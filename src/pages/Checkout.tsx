
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, User, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Layout/Header';
import FloatingParticles from '@/components/Effects/FloatingParticles';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrderNumber = () => {
    return 'WB' + Date.now() + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderNumber = generateOrderNumber();
      
      // Store order details in localStorage for tracking
      const orderDetails = {
        orderNumber,
        items: [...items],
        total: getTotalPrice(),
        date: new Date().toISOString(),
        status: 'confirmed',
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
        },
      };
      
      localStorage.setItem('wabos-last-order', JSON.stringify(orderDetails));
      
      // Clear cart and redirect to success page
      clearCart();
      navigate(`/order-success?order=${orderNumber}`);
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-cream to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-serif gradient-text text-center mb-16">
            Secure Checkout
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Checkout Form */}
            <div className="luxury-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-charcoal font-serif mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-mocha" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="text-xl font-semibold text-charcoal font-serif mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-mocha" />
                    Shipping Address
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                      />
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal code"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                      />
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="IT">Italy</option>
                    </select>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h3 className="text-xl font-semibold text-charcoal font-serif mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-mocha" />
                    Payment Information
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="nameOnCard"
                      placeholder="Name on card"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                    />
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 border border-sand/30 rounded-lg focus:outline-none focus:border-mocha/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full py-4 text-lg font-medium"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cream mr-2"></div>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      Complete Purchase ${total.toFixed(2)}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="luxury-card p-8 rounded-2xl h-fit">
              <h3 className="text-xl font-semibold text-charcoal font-serif mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-charcoal text-sm">{item.name}</h4>
                      <p className="text-xs text-mocha/60">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-charcoal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-sand/30 pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-mocha/70">Subtotal</span>
                  <span className="text-charcoal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mocha/70">Shipping</span>
                  <span className="text-charcoal">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mocha/70">Tax</span>
                  <span className="text-charcoal">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-sand/30 pt-3 flex justify-between">
                  <span className="text-lg font-semibold text-charcoal">Total</span>
                  <span className="text-2xl font-bold text-charcoal">${total.toFixed(2)}</span>
                </div>
              </div>

              {subtotal > 500 && (
                <div className="mt-4 p-4 bg-sand/20 rounded-lg">
                  <p className="text-sm text-mocha/80 text-center">
                    🎉 You qualify for free shipping!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
