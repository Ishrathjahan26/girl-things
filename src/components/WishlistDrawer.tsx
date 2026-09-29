import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    toggleWishlist,
    activeModal,
    setActiveModal,
    addToCart,
    setSelectedProductForDetail
  } = useShop();

  if (activeModal !== 'wishlist') return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleMoveToBag = (product: typeof PRODUCTS[0]) => {
    addToCart(product, 1, product.colors[0]?.name, product.sizes[0]);
    toggleWishlist(product.id);
  };

  const handleAddAllToBag = () => {
    wishlistedProducts.forEach((p) => {
      addToCart(p, 1, p.colors[0]?.name, p.sizes[0]);
    });
    setActiveModal('cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FCFBF9] h-full shadow-2xl flex flex-col justify-between border-l border-[#EDE4E0] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#F0EAE7] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C14D6F] fill-current" />
            <h2 className="font-serif text-xl font-medium text-[#23201F]">
              Your Wishlist
            </h2>
            <span className="text-xs text-[#8A8481] tabular-nums">
              ({wishlist.length})
            </span>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#FCE7EA] flex items-center justify-center text-[#C14D6F]">
                <Heart className="w-8 h-8 stroke-[1.25]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#2B2728]">
                Your wishlist is empty
              </h3>
              <p className="text-xs text-[#7A7471] max-w-xs">
                Save pieces you love by tapping the heart icon on any product card or detail page.
              </p>
              <button
                onClick={() => setActiveModal(null)}
                className="mt-2 px-6 py-2.5 bg-[#C14D6F] text-white text-xs font-semibold rounded-lg hover:bg-[#A23A56] transition-colors cursor-pointer"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3.5 p-3 bg-white rounded-xl border border-[#EDE4E0] hover:border-[#DEC5CB] transition-all"
              >
                <div
                  className="w-20 h-24 rounded-lg overflow-hidden bg-[#F7F4F2] shrink-0 cursor-pointer"
                  onClick={() => {
                    setActiveModal(null);
                    setSelectedProductForDetail(product);
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        className="text-xs font-semibold text-[#272322] hover:text-[#C14D6F] cursor-pointer line-clamp-1"
                        onClick={() => {
                          setActiveModal(null);
                          setSelectedProductForDetail(product);
                        }}
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-[#9E9794] hover:text-[#C14D6F] p-0.5 transition-colors cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-[11px] text-[#8C8481] uppercase block mt-0.5">
                      {product.subcategory}
                    </span>
                    <span className="text-sm font-bold text-[#1E1C1B] tabular-nums mt-1 block">
                      ${product.price}
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleMoveToBag(product)}
                      className="w-full py-2 px-3 bg-[#FAF5F6] hover:bg-[#C14D6F] text-[#8F2D44] hover:text-white text-xs font-semibold rounded-lg border border-[#F2CBD3] hover:border-[#C14D6F] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#EDE4E0] bg-white">
            <button
              onClick={handleAddAllToBag}
              className="w-full py-3.5 px-4 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-sm font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Add All to Bag</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
