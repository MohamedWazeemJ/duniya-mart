import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function MarketInsightsPage() {
  // Placeholder data - in production, this would come from an API
  const priceData = [
    { month: 'Jan', rice: 2500, wheat: 2200, pulses: 9000 },
    { month: 'Feb', rice: 2550, wheat: 2300, pulses: 8800 },
    { month: 'Mar', rice: 2600, wheat: 2250, pulses: 8900 },
    { month: 'Apr', rice: 2650, wheat: 2400, pulses: 9200 },
    { month: 'May', rice: 2700, wheat: 2450, pulses: 9400 },
    { month: 'Jun', rice: 2680, wheat: 2400, pulses: 9300 },
  ];

  const trends = [
    {
      category: 'Rice',
      currentPrice: 2680,
      change: 3.2,
      increasing: true,
    },
    {
      category: 'Wheat',
      currentPrice: 2400,
      change: -1.2,
      increasing: false,
    },
    {
      category: 'Pulses',
      currentPrice: 9300,
      change: 2.8,
      increasing: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Market Insights</h1>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-IN')}
        </div>
      </div>

      {/* Price Trends */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Price Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rice" stroke="#10B981" name="Rice (₹/kg)" />
              <Line type="monotone" dataKey="wheat" stroke="#6366F1" name="Wheat (₹/kg)" />
              <Line type="monotone" dataKey="pulses" stroke="#F59E0B" name="Pulses (₹/kg)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Trends */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {trends.map((trend) => (
          <div key={trend.category} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{trend.category}</h3>
              <TrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">₹{trend.currentPrice}</p>
                <p className="text-sm text-gray-600">per kg</p>
              </div>
              <div className={`flex items-center ${trend.increasing ? 'text-green-600' : 'text-red-600'}`}>
                {trend.increasing ? (
                  <ArrowUpRight className="h-5 w-5" />
                ) : (
                  <ArrowDownRight className="h-5 w-5" />
                )}
                <span className="font-semibold">{trend.change}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Market Analysis */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Market Analysis</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Supply Chain Updates</h3>
            <p className="text-gray-600">
              Recent weather conditions have affected crop yields in major growing regions, leading to slight price increases in staple commodities. Transportation costs remain stable with fuel prices holding steady.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Demand Forecast</h3>
            <p className="text-gray-600">
              Expected increase in demand for pulses and rice in the coming months due to festival season. Wheat demand projected to remain stable with adequate stock levels maintained by major suppliers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Price Outlook</h3>
            <p className="text-gray-600">
              Prices are expected to stabilize in the next quarter as new harvest arrives in the market. Government policies supporting stable food prices likely to continue influencing market dynamics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}