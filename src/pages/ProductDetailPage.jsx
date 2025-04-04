import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Star, Package, Truck, Info, MessageCircle } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { ChatWindow } from '../components/chat/ChatWindow';

export function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(100);
  const [showChat, setShowChat] = useState(false);

  // Placeholder data - in production, this would be fetched based on the product ID
  const product = {
    id: '1',
    name: 'Premium Basmati Rice',
    description: 'High-quality aged basmati rice with long grains and aromatic flavor. Perfect for restaurants and bulk buyers.',
    price: 2500,
    moq: 100,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
    category: 'Staples',
    seller: {
      id: 1,
      name: 'Royal Foods Wholesale',
      rating: 4.8,
      verified: true,
      totalOrders: 1500,
    },
    specifications: {
      brand: 'Royal Foods',
      packaging: 'HDPE Bags',
      shelfLife: '24 months',
      origin: 'Punjab, India',
      certification: 'FSSAI, ISO 22000',
    },
    bulkPricing: [
      { minQuantity: 100, price: 2500 },
      { minQuantity: 500, price: 2300 },
      { minQuantity: 1000, price: 2100 },
      { minQuantity: 5000, price: 1900 },
    ],
    shipping: {
      estimatedDays: '2-3',
      freeAbove: 5000,
      locations: 'Pan India',
    }
  };

  const getCurrentPrice = () => {
    const applicableTier = product.bulkPricing
      .slice()
      .reverse()
      .find(tier => quantity >= tier.minQuantity);
    return applicableTier ? applicableTier.price : product.price;
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= product.moq) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-green-600">
                {formatPrice(getCurrentPrice())}/kg
              </div>
              <div className="text-sm text-gray-600">
                MOQ: {product.moq} kg
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (kg)
                </label>
                <input
                  type="number"
                  min={product.moq}
                  step={10}
                  value={quantity}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow empty value for editing
                    if (value === '') {
                      setQuantity('');
                      return;
                    }
                    // Convert to number and validate
                    const numValue = parseInt(value);
                    if (!isNaN(numValue)) {
                      setQuantity(numValue);
                    }
                  }}
                  onBlur={(e) => {
                    // Ensure a valid value is set when input loses focus
                    const value = e.target.value;
                    if (value === '') {
                      setQuantity(product.moq);
                    } else {
                      const numValue = parseInt(value);
                      if (numValue < product.moq) {
                        setQuantity(product.moq);
                      }
                    }
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                  Add to Cart
                </button>
                <button 
                  onClick={() => setShowChat(true)}
                  className="flex-1 border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50"
                >
                  Contact Seller
                </button>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <Link 
            to={`/seller/${product.seller.id}`}
            className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{product.seller.name}</h3>
                  {product.seller.verified && (
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {product.seller.rating}
                  </div>
                  <span>{product.seller.totalOrders}+ orders</span>
                </div>
              </div>
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
          </Link>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Specifications */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>
          <div className="space-y-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-gray-600">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bulk Pricing */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Bulk Pricing</h2>
          <div className="space-y-3">
            {product.bulkPricing.map((tier, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-2 rounded ${
                  quantity >= tier.minQuantity ? 'bg-green-50' : ''
                }`}
              >
                <span>
                  {tier.minQuantity}+ kg
                </span>
                <span className="font-medium">
                  {formatPrice(tier.price)}/kg
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Shipping Information</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <p className="font-medium">Estimated Delivery Time</p>
                <p className="text-gray-600">{product.shipping.estimatedDays} business days</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Package className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-gray-600">On orders above {formatPrice(product.shipping.freeAbove)}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <p className="font-medium">Shipping Coverage</p>
                <p className="text-gray-600">{product.shipping.locations}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="flex justify-end p-2">
              <button 
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <ChatWindow sellerId={product.seller.id} sellerName={product.seller.name} />
          </div>
        </div>
      )}
    </div>
  );
}