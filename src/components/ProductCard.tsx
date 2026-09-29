import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { isWishlisted, toggleWishlist, addToCart, setSelectedProductForDetail } = useShop();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(product.images[0] || '');
  const [hasError, setHasError] = useState(false);

  const wishlisted = isWishlisted(product.id);
  const activeColor = product.colors[selectedColorIndex] || { name: 'Default', hex: '#EAE5DB' };

  const handleCardClick = () => {
    setSelectedProductForDetail(product);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(
      product,
      1,
      activeColor.name,
      product.sizes[0] || 'Standard'
    );
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-[#EFE8E5] hover:border-[#DEC5CB] hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Visual Image Slot (65%-75% of visual focus) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F7F4F2]">
        {!hasError ? (
          <img
            src={imgSrc}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
            onError={() => {
              // If image fails, switch to fallback image or fallback box
              if (product.images.length > 1 && imgSrc !== product.images[1]) {
                setImgSrc(product.images[1]);
              } else {
                setHasError(true);
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FCE7EA] to-[#F5ECE9] text-[#A23A56]">
            <ShoppingBag className="w-8 h-8 stroke-[1.25] mb-2 opacity-60" />
            <span className="font-serif text-sm font-medium text-center line-clamp-2">
              {product.name}
            </span>
          </div>
        )}

        {/* Badge (single subtle tag - anti-slop) */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#FCFBF9]/95 backdrop-blur-xs text-[#8F2D44] text-[11px] font-semibold px-2.5 py-1 rounded shadow-2xs">
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-xs flex items-center justify-center transition-all shadow-xs cursor-pointer ${
            wishlisted
              ? 'bg-[#C14D6F] text-white'
              : 'bg-white/90 text-[#4A4543] hover:text-[#C14D6F] hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : 'stroke-[1.75]'}`} />
        </button>

        {/* Quick Add Overlay Bar on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-2.5 px-3 bg-[#23201F]/90 hover:bg-[#C14D6F] text-white text-xs font-semibold rounded-lg backdrop-blur-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProductForDetail(product);
            }}
            className="p-2.5 bg-white/90 hover:bg-white text-[#23201F] rounded-lg backdrop-blur-sm transition-colors shadow-sm cursor-pointer"
            title="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white space-y-2">
        <div>
          {/* Category & Style metadata (unboxed text) */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#8C8481] uppercase tracking-wide">
            <span>{product.subcategory}</span>
            {product.styleCategory && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#A23A56] font-medium lowercase first-letter:capitalize">
                  {product.styleCategory}
                </span>
              </>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-sans text-[15px] font-semibold text-[#272322] group-hover:text-[#C14D6F] transition-colors line-clamp-1 mt-0.5">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className="flex items-center text-[#E29548]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-medium text-[#2E2A29] tabular-nums">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-[11px] text-[#8C8481] tabular-nums">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Colors Footer */}
        <div className="pt-2 border-t border-[#F7F3F1] flex items-center justify-between">
          <div className="flex items-baseline gap-2 tabular-nums">
            <span className="text-[15px] font-bold text-[#1E1C1B]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#9E9794] line-through font-normal">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((c, idx) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                    selectedColorIndex === idx
                      ? 'border-[#C14D6F] scale-115 ring-1 ring-[#C14D6F]/30'
                      : 'border-black/10 hover:border-black/30'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
