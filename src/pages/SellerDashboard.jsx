import React, { useState } from 'react';
import {
  BarChart2,
  Package,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  ArrowDown,
  ArrowUp,
  DollarSign,
  Truck,
  Star,
  Bell,
  Settings,
  Calendar,
  Plus,
  Edit,
  Trash2,
  FileText,
  ShoppingBag,
  Tag
} from 'lucide-react';

export function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [orderFilter, setOrderFilter] = useState('all');
  const [dateRange, setDateRange] = useState('week');
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder data - in production, this would come from an API
  const dashboardData = {
    stats: {
      totalRevenue: 450000,
      totalOrders: 128,
      activeOrders: 12,
      totalCustomers: 45,
      revenueGrowth: 15.8,
      orderGrowth: 8.5,
      customerGrowth: 12.3,
      averageRating: 4.7
    },
    recentOrders: [
      {
        id: 'ORD-2024-001',
        customer: 'Green Mart Retail',
        items: [
          { name: 'Premium Basmati Rice', quantity: '500 kg', price: 75000 },
          { name: 'Organic Turmeric Powder', quantity: '100 kg', price: 25000 }
        ],
        total: 100000,
        status: 'processing',
        date: '2024-03-15',
        paymentStatus: 'paid'
      },
      {
        id: 'ORD-2024-002',
        customer: 'Fresh Foods Store',
        items: [
          { name: 'Yellow Toor Dal', quantity: '300 kg', price: 45000 }
        ],
        total: 45000,
        status: 'shipped',
        date: '2024-03-14',
        paymentStatus: 'pending'
      }
    ],
    topProducts: [
      {
        id: 1,
        name: 'Premium Basmati Rice',
        totalSales: 185000,
        quantity: '2500 kg',
        growth: 12.5
      },
      {
        id: 2,
        name: 'Organic Turmeric Powder',
        totalSales: 95000,
        quantity: '800 kg',
        growth: 8.3
      },
      {
        id: 3,
        name: 'Yellow Toor Dal',
        totalSales: 78000,
        quantity: '1200 kg',
        growth: -2.1
      }
    ],
    notifications: [
      {
        id: 1,
        type: 'order',
        message: 'New order received from Green Mart Retail',
        time: '5 minutes ago'
      },
      {
        id: 2,
        type: 'payment',
        message: 'Payment received for order #ORD-2024-001',
        time: '1 hour ago'
      },
      {
        id: 3,
        type: 'alert',
        message: 'Low stock alert: Premium Basmati Rice',
        time: '2 hours ago'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-green-100 text-green-800';
      case 'delivered':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getGrowthIndicator = (value) => {
    if (value > 0) {
      return (
        <span className="flex items-center text-green-600">
          <ArrowUp className="w-4 h-4 mr-1" />
          {value}%
        </span>
      );
    }
    return (
      <span className="flex items-center text-red-600">
        <ArrowDown className="w-4 h-4 mr-1" />
        {Math.abs(value)}%
      </span>
    );
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            {getGrowthIndicator(dashboardData.stats.revenueGrowth)}
          </div>
          <h3 className="text-2xl font-bold">₹{dashboardData.stats.totalRevenue.toLocaleString()}</h3>
          <p className="text-gray-600">Total Revenue</p>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            {getGrowthIndicator(dashboardData.stats.orderGrowth)}
          </div>
          <h3 className="text-2xl font-bold">{dashboardData.stats.totalOrders}</h3>
          <p className="text-gray-600">Total Orders</p>
        </div>

        {/* Customers Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            {getGrowthIndicator(dashboardData.stats.customerGrowth)}
          </div>
          <h3 className="text-2xl font-bold">{dashboardData.stats.totalCustomers}</h3>
          <p className="text-gray-600">Total Customers</p>
        </div>

        {/* Rating Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold">{dashboardData.stats.averageRating}</h3>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>

      {/* Recent Orders and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <select
                className="bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={orderFilter}
                onChange={(e) => setOrderFilter(e.target.value)}
              >
                <option value="all">All Orders</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {dashboardData.recentOrders.map((order) => (
                <div key={order.id} className="border-b last:border-0 pb-4 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{order.customer}</h3>
                      <p className="text-sm text-gray-500">{order.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <div key={index} className="text-sm text-gray-600 flex justify-between">
                        <span>{item.name} × {item.quantity}</span>
                        <span>₹{item.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className={getPaymentStatusColor(order.paymentStatus)}>
                      {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                    </span>
                    <span className="font-medium">Total: ₹{order.total.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Top Products</h2>
              <select
                className="bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {dashboardData.topProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">Sold: {product.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{product.totalSales.toLocaleString()}</p>
                    {getGrowthIndicator(product.growth)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Recent Notifications</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {dashboardData.notifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${
                  notification.type === 'order' ? 'bg-blue-100' :
                  notification.type === 'payment' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  {notification.type === 'order' ? (
                    <Package className={`h-5 w-5 ${
                      notification.type === 'order' ? 'text-blue-600' :
                      notification.type === 'payment' ? 'text-green-600' : 'text-yellow-600'
                    }`} />
                  ) : notification.type === 'payment' ? (
                    <DollarSign className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <select
            className="border rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={orderFilter}
            onChange={(e) => setOrderFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
          <FileText className="w-4 h-4" />
          <span>Export Orders</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dashboardData.recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {order.items.map((item, index) => (
                    <div key={index}>{item.name} × {item.quantity}</div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{order.total.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProductsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <select
            className="border rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="rice">Rice</option>
            <option value="pulses">Pulses</option>
            <option value="spices">Spices</option>
          </select>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardData.topProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">SKU: PRD-{product.id}</p>
              </div>
              <Tag className="text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Total Sales</span>
                <span className="font-medium text-gray-900">₹{product.totalSales.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <span>Quantity Sold</span>
                <span className="font-medium text-gray-900">{product.quantity}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <span>Growth</span>
                {getGrowthIndicator(product.growth)}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end space-x-3">
              <button className="text-gray-600 hover:text-gray-900">
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCustomersTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
          <FileText className="w-4 h-4" />
          <span>Export Customers</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: 1,
            name: 'Green Mart Retail',
            orders: 45,
            totalSpent: 350000,
            lastOrder: '2024-03-15',
            status: 'active'
          },
          {
            id: 2,
            name: 'Fresh Foods Store',
            orders: 32,
            totalSpent: 280000,
            lastOrder: '2024-03-14',
            status: 'active'
          }
        ].map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{customer.name}</h3>
                <p className="text-sm text-gray-500">Customer ID: CUST-{customer.id}</p>
              </div>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                {customer.status}
              </span>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Total Orders</span>
                <span className="font-medium text-gray-900">{customer.orders}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <span>Total Spent</span>
                <span className="font-medium text-gray-900">₹{customer.totalSpent.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <span>Last Order</span>
                <span className="font-medium text-gray-900">{customer.lastOrder}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end space-x-3">
              <button className="text-blue-600 hover:text-blue-800">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <select
            className="border rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
          <FileText className="w-4 h-4" />
          <span>Download Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Overview</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            {/* Placeholder for sales chart */}
            <p className="text-gray-500">Sales Chart Coming Soon</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Order Trends</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            {/* Placeholder for order trends chart */}
            <p className="text-gray-500">Order Trends Chart Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8 border-b">
        <nav className="flex space-x-8">
          <button
            className={`pb-4 px-2 font-medium text-sm transition-colors relative ${
              activeTab === 'overview'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            <div className="flex items-center space-x-2">
              <BarChart2 className="w-4 h-4" />
              <span>Overview</span>
            </div>
          </button>
          <button
            className={`pb-4 px-2 font-medium text-sm transition-colors relative ${
              activeTab === 'orders'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('orders')}
          >
            <div className="flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Orders</span>
            </div>
          </button>
          <button
            className={`pb-4 px-2 font-medium text-sm transition-colors relative ${
              activeTab === 'products'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('products')}
          >
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Products</span>
            </div>
          </button>
          <button
            className={`pb-4 px-2 font-medium text-sm transition-colors relative ${
              activeTab === 'customers'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('customers')}
          >
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Customers</span>
            </div>
          </button>
          <button
            className={`pb-4 px-2 font-medium text-sm transition-colors relative ${
              activeTab === 'analytics'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('analytics')}
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </div>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverviewTab()}
      {activeTab === 'orders' && renderOrdersTab()}
      {activeTab === 'products' && renderProductsTab()}
      {activeTab === 'customers' && renderCustomersTab()}
      {activeTab === 'analytics' && renderAnalyticsTab()}
    </div>
  );
} 