import React from 'react';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const MobileBottomNav: React.FC = () => {
  const {
    cartCount,
    wishlistCount,
    setActiveModal,
    setSelectedCategory,
    setSelectedSubcategory,
    setSelectedStyleFilter
  } = useShop();

  const handleHomeClick = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FCFBF9]/95 backdrop-blur-md border-t border-[#EDE4E0] px-4 py-2 flex items-center justify-around shadow-lg">
      {/* Home */}
      <button
        onClick={handleHomeClick}
        className="flex flex-col items-center gap-0.5 text-[#5C5654] hover:text-[#C14D6F] py-1 px-2 cursor-pointer"
      >
        <Home className="w-5 h-5 stroke-[1.75]" />
        <span className="text-[10px] font-medium">Home</span>
      </button>

      {/* Search */}
      <button
        onClick={() => setActiveModal('search')}
        className="flex flex-col items-center gap-0.5 text-[#5C5654] hover:text-[#C14D6F] py-1 px-2 cursor-pointer"
      >
        <Search className="w-5 h-5 stroke-[1.75]" />
        <span className="text-[10px] font-medium">Search</span>
      </button>

      {/* Wishlist */}
      <button
        onClick={() => setActiveModal('wishlist')}
        className="flex flex-col items-center gap-0.5 text-[#5C5654] hover:text-[#C14D6F] py-1 px-2 relative cursor-pointer"
      >
        <Heart className="w-5 h-5 stroke-[1.75]" />
        {wishlistCount > 0 && (
          <span className="absolute top-0 right-1 w-3.5 h-3.5 bg-[#C14D6F] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
        <span className="text-[10px] font-medium">Wishlist</span>
      </button>

      {/* Cart */}
      <button
        onClick={() => setActiveModal('cart')}
        className="flex flex-col items-center gap-0.5 text-[#5C5654] hover:text-[#C14D6F] py-1 px-2 relative cursor-pointer"
      >
        <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
        {cartCount > 0 && (
          <span className="absolute top-0 right-1 w-3.5 h-3.5 bg-[#C14D6F] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
        <span className="text-[10px] font-medium">Bag</span>
      </button>

      {/* Account */}
      <button
        onClick={() => setActiveModal('account')}
        className="flex flex-col items-center gap-0.5 text-[#5C5654] hover:text-[#C14D6F] py-1 px-2 cursor-pointer"
      >
        <User className="w-5 h-5 stroke-[1.75]" />
        <span className="text-[10px] font-medium">Account</span>
      </button>
    </nav>
  );
};
