import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { TrendingNowSection } from './components/TrendingNowSection';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { StyleInspirationSection } from './components/StyleInspirationSection';
import { BeautySelfCareSpotlight } from './components/BeautySelfCareSpotlight';
import { AccessoriesSpotlight } from './components/AccessoriesSpotlight';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CategoryCatalogView } from './components/CategoryCatalogView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { UserAccountModal } from './components/UserAccountModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ArrowLeft, Sparkles, CheckCircle2, Info } from 'lucide-react';

const MainContent: React.FC = () => {
  const { selectedCategory, setSelectedCategory, selectedStyleFilter, setSelectedStyleFilter, toast } = useShop();

  const isSpecificView = selectedCategory !== 'all' || selectedStyleFilter !== null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF9] text-[#2B2728]">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="bg-[#23201F] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-xs border border-[#3D3736]">
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-[#F4A7B7]" />
            ) : (
              <Info className="w-4 h-4 text-[#E2C799]" />
            )}
            <span className="font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* If viewing a specific category or style filter, show back banner */}
        {isSpecificView && (
          <div className="bg-[#F8F2F4] border-b border-[#F0E4E7] py-3 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedStyleFilter(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-xs font-semibold text-[#8F2D44] hover:text-[#5E1A29] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home Showcase</span>
              </button>

              <span className="text-xs text-[#8A8183]">
                {selectedCategory !== 'all' ? `Category: ${selectedCategory}` : `Style: ${selectedStyleFilter}`}
              </span>
            </div>
          </div>
        )}

        {/* Home Overview Sections */}
        {!isSpecificView ? (
          <>
            <HeroSection />
            <CategoryShowcase />
            <TrendingNowSection />
            <SpecialOfferBanner />
            <NewArrivalsSection />
            <StyleInspirationSection />
            <BeautySelfCareSpotlight />
            <AccessoriesSpotlight />
            <CategoryCatalogView />
            <NewsletterSection />
          </>
        ) : (
          <>
            <CategoryCatalogView />
            <SpecialOfferBanner />
            <NewsletterSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <WishlistDrawer />
      <SearchModal />
      <UserAccountModal />
      <SizeGuideModal />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
