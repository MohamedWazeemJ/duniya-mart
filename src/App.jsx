import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
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
import { NotificationsPage } from './pages/NotificationsPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminOverview } from './pages/admin/AdminOverview';
import { SellerManagement } from './pages/admin/SellerManagement';
import { scrollToTop } from './utils/scrollToTop';

function ScrollToTop() {
  const location = useLocation();
  const [previousPath, setPreviousPath] = React.useState('');

  useEffect(() => {
    // Only scroll to top if the path has changed significantly
    // (e.g., not just query parameters or hash changes)
    const currentPath = location.pathname;
    if (currentPath !== previousPath) {
      // Don't scroll to top for admin routes
      if (!currentPath.startsWith('/admin')) {
        scrollToTop();
      }
      setPreviousPath(currentPath);
    }
  }, [location.pathname, previousPath]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes - Without Header and Footer */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminOverview />} />
          <Route path="sellers" element={<SellerManagement />} />
          {/* Add more admin routes here */}
        </Route>

        {/* Public and User Routes - With Header and Footer */}
        <Route
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 pb-16 pt-16">
                <Outlet />
              </main>
              <Footer />
            </div>
          }
        >
          {/* Public Routes */}
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          {/* User Dashboard Routes */}
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/retailer/dashboard" element={<RetailerDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;