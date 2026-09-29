import React, { useState } from 'react';
import {
  X,
  Star,
  Heart,
  ShoppingBag,
  Zap,
  Truck,
  RotateCcw,
  ShieldCheck,
  Ruler,
  Check,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProductForDetail,
    setSelectedProductForDetail,
    addToCart,
    isWishlisted,
    toggleWishlist,
    setActiveModal
  } = useShop();

  if (!selectedProductForDetail) return null;

  const product = selectedProductForDetail;
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || 'Standard'
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0] || 'One Size'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'materials' | 'shipping'>('details');

  const wishlisted = isWishlisted(product.id);

  const handleClose = () => {
    setSelectedProductForDetail(null);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setSelectedProductForDetail(null);
    setActiveModal('checkout');
  };

  // Find "Complete the Look" products
  const completeTheLookProducts = (product.completeTheLookIds || [])
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => !!p);

  // Recommended products
  const recommendedProducts = PRODUCTS.filter(
    p => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#FCFBF9] rounded-2xl shadow-2xl border border-[#EDE4E0] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#FCFBF9]/95 backdrop-blur-md border-b border-[#F0EAE7]">
          <div className="flex items-center gap-2 text-xs text-[#7A7471]">
            <span className="font-medium text-[#2B2728]">Girl Things</span>
            <span>/</span>
            <span className="capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-[#C14D6F] font-medium">{product.subcategory}</span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Gallery Left Column (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Active Image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F5F2EF] border border-[#EDE4E0]">
                <img
                  src={product.images[selectedImgIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#8F2D44] text-xs font-semibold px-3 py-1 rounded shadow-2xs">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Thumbnails Strip */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-18 h-22 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        selectedImgIndex === idx
                          ? 'border-[#C14D6F] shadow-xs'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contiguous Purchase Module Right Column (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Title & Reviews */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
                      {product.subcategory}
                    </span>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        wishlisted
                          ? 'bg-[#FCE7EA] text-[#C14D6F] border-[#F2A7B6]'
                          : 'bg-white text-[#5E5956] border-[#E8DFDB] hover:border-[#C14D6F]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-current' : ''}`} />
                      <span>{wishlisted ? 'Saved' : 'Save to Wishlist'}</span>
                    </button>
                  </div>

                  <h1 className="font-serif text-2xl sm:text-3xl text-[#23201F] mt-1 tracking-tight font-medium">
                    {product.name}
                  </h1>

                  {/* Rating breakdown */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center text-[#E29548]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#2B2728] tabular-nums">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-[#8A8481] tabular-nums">
                      · {product.reviewsCount} customer reviews
                    </span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 pt-1 tabular-nums">
                  <span className="text-2xl sm:text-3xl font-bold text-[#1E1C1B]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-base text-[#9C9491] line-through font-normal">
                        ${product.originalPrice}
                      </span>
                      <span className="text-xs font-semibold text-[#1B8053] bg-[#E7F6EE] px-2 py-0.5 rounded">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-sm text-[#5C5654] leading-relaxed">
                  {product.description}
                </p>

                {/* Color Selector */}
                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#2B2728]">
                        Color: <span className="font-normal text-[#6B6563]">{selectedColor}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`relative w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                            selectedColor === c.name
                              ? 'border-[#C14D6F] scale-110 shadow-xs'
                              : 'border-white hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {selectedColor === c.name && (
                            <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#2B2728]">
                        Size: <span className="font-normal text-[#6B6563]">{selectedSize}</span>
                      </span>
                      <button
                        onClick={() => setActiveModal('size-guide')}
                        className="text-[#C14D6F] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                      >
                        <Ruler className="w-3.5 h-3.5" />
                        <span>Size Guide</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                            selectedSize === s
                              ? 'bg-[#23201F] text-white border-[#23201F] shadow-xs'
                              : 'bg-white text-[#3D3837] border-[#E8DFDB] hover:border-[#C14D6F]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & CTAs */}
                <div className="space-y-3 pt-4 border-t border-[#EDE4E0]">
                  <div className="flex items-center gap-3">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-[#E0D7D3] rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="p-2.5 text-[#5C5654] hover:bg-[#F8F5F3] disabled:opacity-40 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-xs font-semibold text-[#2B2728] tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2.5 text-[#5C5654] hover:bg-[#F8F5F3] transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Bag CTA */}
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-3 px-5 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  {/* Buy Now Direct Button */}
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3 px-5 bg-[#23201F] hover:bg-[#383332] text-white text-sm font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-[#FDE8EC]" />
                    <span>Buy Now · Direct Checkout</span>
                  </button>
                </div>

                {/* Trust perks list */}
                <div className="pt-3 grid grid-cols-2 gap-2 text-xs text-[#6B6563]">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#C14D6F]" />
                    <span>Free express shipping on $75+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-[#C14D6F]" />
                    <span>30-Day Hassle-Free Returns</span>
                  </div>
                </div>
              </div>

              {/* Informational Tabs (Details / Materials / Shipping) */}
              <div className="pt-4 border-t border-[#EDE4E0]">
                <div className="flex items-center border-b border-[#EDE4E0] text-xs font-medium text-[#736C69]">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'details'
                        ? 'border-[#C14D6F] text-[#C14D6F] font-semibold'
                        : 'border-transparent hover:text-[#23201F]'
                    }`}
                  >
                    Product Details
                  </button>
                  <button
                    onClick={() => setActiveTab('materials')}
                    className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'materials'
                        ? 'border-[#C14D6F] text-[#C14D6F] font-semibold'
                        : 'border-transparent hover:text-[#23201F]'
                    }`}
                  >
                    Materials & Care
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`py-2 px-3 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'shipping'
                        ? 'border-[#C14D6F] text-[#C14D6F] font-semibold'
                        : 'border-transparent hover:text-[#23201F]'
                    }`}
                  >
                    Delivery & Returns
                  </button>
                </div>

                <div className="py-3 text-xs text-[#5C5654] leading-relaxed">
                  {activeTab === 'details' && (
                    <ul className="space-y-1.5 list-disc list-inside">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'materials' && <p>{product.materials}</p>}
                  {activeTab === 'shipping' && (
                    <div className="space-y-2">
                      <p>
                        <strong>Standard Shipping:</strong> 3-5 business days (Free on orders $75+, otherwise $8.50).
                      </p>
                      <p>
                        <strong>Returns:</strong> We offer 30-day returns on unworn items with original tags and packaging intact.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* "Complete the Look" section */}
          {completeTheLookProducts.length > 0 && (
            <div className="pt-8 border-t border-[#EDE4E0]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#A23A56] uppercase tracking-wide">
                    Stylist Recommendation
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#23201F]">
                    Complete the Look
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {completeTheLookProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedProductForDetail(item);
                      setSelectedImgIndex(0);
                    }}
                    className="p-3 bg-white rounded-xl border border-[#EDE4E0] hover:border-[#C14D6F] cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden bg-[#F7F4F2] mb-2.5">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8C8481] uppercase">{item.subcategory}</span>
                      <h4 className="text-xs font-semibold text-[#272322] line-clamp-1">{item.name}</h4>
                      <span className="text-xs font-bold text-[#1E1C1B] tabular-nums mt-0.5 block">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <div className="pt-8 border-t border-[#EDE4E0]">
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#A23A56] uppercase tracking-wide">
                  More in {product.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#23201F]">
                  You Might Also Adore
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {recommendedProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedProductForDetail(item);
                      setSelectedImgIndex(0);
                    }}
                    className="p-3 bg-white rounded-xl border border-[#EDE4E0] hover:border-[#C14D6F] cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#F7F4F2] mb-2.5">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8C8481] uppercase">{item.subcategory}</span>
                      <h4 className="text-xs font-semibold text-[#272322] line-clamp-1">{item.name}</h4>
                      <span className="text-xs font-bold text-[#1E1C1B] tabular-nums mt-0.5 block">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
