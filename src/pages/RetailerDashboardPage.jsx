import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Package, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Star, 
  AlertCircle,
  Menu,
  X,
  Search,
  Filter
} from 'lucide-react';

export function RetailerDashboardPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Placeholder data - replace with actual API calls
  const stats = [
    {
      title: 'Total Orders',
      value: '156',
      change: '+12%',
      icon: ShoppingCart,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Orders',
      value: '23',
      change: '+5',
      icon: Package,
      color: 'bg-green-500',
    },
    {
      title: 'Monthly Revenue',
      value: '₹2,45,678',
      change: '+15%',
      icon: DollarSign,
      color: 'bg-yellow-500',
    },
    {
      title: 'Total Customers',
      value: '89',
      change: '+8%',
      icon: Users,
      color: 'bg-purple-500',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      items: '3 items',
      amount: '₹2,500',
      status: 'Delivered',
      date: '2024-02-20',
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      items: '2 items',
      amount: '₹1,800',
      status: 'Processing',
      date: '2024-02-19',
    },
    {
      id: 'ORD003',
      customer: 'Mike Johnson',
      items: '5 items',
      amount: '₹4,200',
      status: 'Shipped',
      date: '2024-02-18',
    },
  ];

  const topProducts = [
    {
      name: 'Premium Basmati Rice',
      sales: '234 kg',
      revenue: '₹11,700',
      rating: 4.8,
    },
    {
      name: 'Organic Toor Dal',
      sales: '156 kg',
      revenue: '₹9,360',
      rating: 4.6,
    },
    {
      name: 'Premium Turmeric Powder',
      sales: '132 kg',
      revenue: '₹10,560',
      rating: 4.7,
    },
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Low stock alert: Premium Basmati Rice (50 kg remaining)',
      time: '2 hours ago',
    },
    {
      type: 'info',
      message: 'New bulk order inquiry from Wholesale Mart',
      time: '5 hours ago',
    },
    {
      type: 'success',
      message: 'Order #ORD001 has been delivered successfully',
      time: '1 day ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Retailer Dashboard</h1>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders, products, or customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-600" />
            <span>Filter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500 ml-1">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <Link
                to="/retailer/orders"
                className="text-sm text-green-600 hover:text-green-700"
              >
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b">
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Items</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="py-3 text-sm">{order.id}</td>
                      <td className="py-3 text-sm">{order.customer}</td>
                      <td className="py-3 text-sm">{order.items}</td>
                      <td className="py-3 text-sm">{order.amount}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'Processing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6">Top Products</h2>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{product.revenue}</p>
                    <p className="text-xs text-gray-500">{product.sales}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6">Alerts</h2>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 p-3 rounded-lg ${
                    alert.type === 'warning'
                      ? 'bg-yellow-50'
                      : alert.type === 'info'
                      ? 'bg-blue-50'
                      : 'bg-green-50'
                  }`}
                >
                  <AlertCircle
                    className={`h-5 w-5 ${
                      alert.type === 'warning'
                        ? 'text-yellow-500'
                        : alert.type === 'info'
                        ? 'text-blue-500'
                        : 'text-green-500'
                    }`}
                  />
                  <div>
                    <p className="text-sm text-gray-700">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 