import React, { useState } from 'react';

export function BusinessSupport() {
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
          <h1 className="text-4xl font-bold text-green-700 mb-4">Business Support</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need help with your business on DuniyaMart? Our support team is here for you 24/7. Get answers, resolve issues, and grow your business with confidence.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">FAQs</h3>
            <p className="text-gray-600">Find answers to common business questions in our <a href="/faqs" className="text-green-600 hover:underline">FAQ section</a>.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Live Chat</h3>
            <p className="text-gray-600">Chat with our support team for instant help (9am-9pm IST).</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Phone Support</h3>
            <p className="text-gray-600">Call us at <span className="font-semibold">+91-XXXXXXXXXX</span> for urgent business queries.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Email Support</h3>
            <p className="text-gray-600">Email us at <a href="mailto:support@duniyamart.com" className="text-green-600 hover:underline">support@duniyamart.com</a> and we'll get back within 24 hours.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Business Support</h2>
          {submitted ? (
            <div className="text-green-700 text-lg font-semibold text-center py-8">
              Thank you for reaching out! Our support team will contact you soon.
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
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 