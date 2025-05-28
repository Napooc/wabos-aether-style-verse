
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import FloatingParticles from '@/components/Effects/FloatingParticles';

interface OrderDetails {
  orderNumber: string;
  items: any[];
  total: number;
  date: string;
  status: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const orderNumber = searchParams.get('order');

  useEffect(() => {
    const savedOrder = localStorage.getItem('wabos-last-order');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
  }, []);

  const getEstimatedDelivery = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5); // 5 business days
    return deliveryDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-cream to-beige relative">
      <FloatingParticles />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-16">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-serif gradient-text mb-6">
                Thank You!
              </h1>
              <p className="text-xl md:text-2xl text-mocha/80 max-w-2xl mx-auto leading-relaxed">
                Your order has been confirmed and will be shipped soon. We'll send you tracking information when your order is on its way.
              </p>
            </div>

            {orderDetails && (
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Order Details */}
                <div className="luxury-card p-8 rounded-2xl">
                  <h2 className="text-2xl font-semibold text-charcoal font-serif mb-6">Order Details</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-sand/20 rounded-lg">
                      <div>
                        <p className="text-sm text-mocha/70">Order Number</p>
                        <p className="text-lg font-bold text-charcoal font-mono">{orderDetails.orderNumber}</p>
                      </div>
                      <Package className="w-8 h-8 text-mocha" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-charcoal">Items Ordered</h3>
                      {orderDetails.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border border-sand/30 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-charcoal">{item.name}</h4>
                            <p className="text-sm text-mocha/60">Quantity: {item.quantity}</p>
                          </div>
                          <span className="font-semibold text-charcoal">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-sand/30 pt-4">
                      <div className="flex justify-between text-lg font-semibold text-charcoal">
                        <span>Total</span>
                        <span>${orderDetails.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping & Tracking */}
                <div className="space-y-8">
                  {/* Shipping Information */}
                  <div className="luxury-card p-8 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-charcoal font-serif mb-6 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-mocha" />
                      Shipping Address
                    </h2>
                    <div className="text-charcoal leading-relaxed">
                      <p className="font-medium">{orderDetails.shippingAddress.name}</p>
                      <p>{orderDetails.shippingAddress.address}</p>
                      <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.postalCode}</p>
                      <p>{orderDetails.shippingAddress.country}</p>
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="luxury-card p-8 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-charcoal font-serif mb-6 flex items-center">
                      <Truck className="w-6 h-6 mr-2 text-mocha" />
                      Delivery Information
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-sand/20 rounded-lg">
                        <Calendar className="w-6 h-6 text-mocha" />
                        <div>
                          <p className="font-medium text-charcoal">Estimated Delivery</p>
                          <p className="text-sm text-mocha/70">{getEstimatedDelivery()}</p>
                        </div>
                      </div>
                      <p className="text-sm text-mocha/70">
                        You'll receive an email with tracking information once your order ships. 
                        Premium delivery is included for orders over $500.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="text-center mt-16 space-y-4">
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/collection">
                  <Button className="bg-gradient-to-r from-mocha to-bronze hover:from-bronze hover:to-mocha text-cream rounded-full px-8 py-3">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" className="border-mocha/30 text-mocha hover:border-mocha hover:text-mocha hover:bg-mocha/5 rounded-full px-8 py-3">
                    View Orders
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-mocha/60 mt-8">
                Questions about your order? Contact our support team at support@wabos.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;
