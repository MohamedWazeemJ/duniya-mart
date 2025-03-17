import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { CartPage } from './pages/CartPage';
import { SellerProfilePage } from './pages/SellerProfilePage';
import { SellerListingPage } from './pages/SellerListingPage';
import { ChatPage } from './pages/ChatPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SellerDashboard } from './pages/SellerDashboard';
import { RetailerDashboard } from './pages/RetailerDashboard';
import { FAQPage } from './pages/FAQPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { ChatsPage } from './pages/ChatsPage';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="min-h-screen pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/sellers" element={<SellerListingPage />} />
            <Route path="/seller/:id" element={<SellerProfilePage />} />
            <Route path="/chat/:sellerId" element={<ChatPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/seller/dashboard" element={<SellerDashboard />} />
            <Route path="/retailer/dashboard" element={<RetailerDashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;