import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { MainCategory } from '../types';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlistCount,
    setActiveModal,
    selectedCategory,
    setSelectedCategory,
    setSelectedSubcategory,
    setSelectedStyleFilter
  } = useShop();

  const [promoDismissed, setPromoDismissed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'all' },
    { label: 'Clothing', id: 'clothing' },
    { label: 'Footwear', id: 'footwear' },
    { label: 'Accessories', id: 'accessories' },
    { label: 'Beauty', id: 'beauty' },
    { label: 'Bags', id: 'bags' },
    { label: 'Jewellery', id: 'jewellery' },
    { label: 'Self Care', id: 'selfcare' },
    { label: 'New Arrivals', id: 'newarrivals' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FCFBF9]/95 backdrop-blur-md border-b border-[#F2ECE9] transition-all">
      {/* Top Promotional Announcement Banner */}
      {!promoDismissed && (
        <div className="bg-[#F8E7EA] text-[#863349] px-4 py-1.5 text-xs font-medium flex items-center justify-between transition-colors">
          <div className="flex-1 text-center truncate">
            <span>Complimentary gift box on orders over $75</span>
            <span className="mx-2 text-[#C98997]">·</span>
            <span className="hidden sm:inline">Use code</span>
            <span className="font-semibold ml-1 underline underline-offset-2">BLOOM15</span>
            <span className="hidden sm:inline text-xs ml-1 font-normal opacity-85">for 15% off</span>
          </div>
          <button
            onClick={() => setPromoDismissed(true)}
            className="text-[#863349] hover:text-[#5B1E2E] p-0.5 rounded transition-colors ml-2"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navigation Bar - adhering to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#4A4543] hover:text-[#2B2728] focus:outline-none"
          aria-label="Open menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Zone 1: Brand Wordmark with elegant feminine icon */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('all');
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="w-8 h-8 rounded-full bg-[#FCE7EA] flex items-center justify-center text-[#C14D6F] group-hover:bg-[#F9D2D9] transition-colors shadow-xs">
            <svg
              className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Elegant floral blossom icon */}
              <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V12m4.5 0a4.5 4.5 0 1 1-4.5 4.5M16.5 12H12m0 4.5a4.5 4.5 0 1 1-4.5-4.5M12 16.5V12m-4.5 0H12" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <span className="font-serif text-2xl sm:text-[26px] tracking-tight font-normal text-[#2B2728]">
            Girl Things
          </span>
        </a>

        {/* Zone 2: Navigation Links (Text with subtle hover state) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] font-medium text-[#5E5956]">
          {navItems.map((item) => {
            const isActive = selectedCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 cursor-pointer relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#C14D6F] font-semibold'
                    : 'hover:text-[#1F1D1D]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C14D6F] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Functional Action Icons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Search */}
          <button
            onClick={() => setActiveModal('search')}
            className="p-2 text-[#4A4543] hover:text-[#C14D6F] hover:bg-[#FBF1F3] rounded-full transition-colors cursor-pointer"
            aria-label="Search products"
            title="Search"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => setActiveModal('wishlist')}
            className="p-2 text-[#4A4543] hover:text-[#C14D6F] hover:bg-[#FBF1F3] rounded-full transition-colors relative cursor-pointer"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 stroke-[1.75]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#C14D6F] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag / Cart */}
          <button
            onClick={() => setActiveModal('cart')}
            className="p-2 text-[#4A4543] hover:text-[#C14D6F] hover:bg-[#FBF1F3] rounded-full transition-colors relative cursor-pointer"
            aria-label="Shopping bag"
            title="Bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#C14D6F] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-75">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Account */}
          <button
            onClick={() => setActiveModal('account')}
            className="p-2 text-[#4A4543] hover:text-[#C14D6F] hover:bg-[#FBF1F3] rounded-full transition-colors cursor-pointer"
            aria-label="Account"
            title="My Profile & Orders"
          >
            <User className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#F2ECE9] bg-[#FCFBF9] px-5 py-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  selectedCategory === item.id
                    ? 'bg-[#FBF1F3] text-[#C14D6F] font-semibold'
                    : 'text-[#4A4543] hover:bg-[#F5F2EF]'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'newarrivals' && (
                  <span className="text-[11px] font-normal text-[#C14D6F] bg-[#FDE8EC] px-2 py-0.5 rounded">
                    New Drop
                  </span>
                )}
              </button>
            ))}
            
            <div className="pt-3 border-t border-[#F0EAE7] flex items-center justify-between text-xs text-[#8A8481]">
              <span>Customer Care: hi@girlthings.shop</span>
              <span>USD ($)</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
