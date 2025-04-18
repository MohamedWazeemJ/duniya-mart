import React, { useState } from 'react';

export function Advertise() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Advertise with DuniyaMart</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach thousands of retailers and wholesalers across India. Promote your brand, products, or services to a highly targeted B2B audience on India's leading grocery marketplace.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Pan-India Reach</h3>
            <p className="text-gray-600">Showcase your business to buyers and sellers from every corner of India.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Targeted Audience</h3>
            <p className="text-gray-600">Advertise directly to decision-makers in the grocery and retail industry.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Flexible Campaigns</h3>
            <p className="text-gray-600">Choose from banner ads, sponsored listings, email campaigns, and more.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Enquire Now</h2>
          {submitted ? (
            <div className="text-green-700 text-lg font-semibold text-center py-8">
              Thank you for your interest! Our team will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input type="text" name="business" value={form.business} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 