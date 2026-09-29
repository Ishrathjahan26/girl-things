import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles, Tag, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    cartCount,
    freeShippingThreshold,
    activeModal,
    setActiveModal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setSelectedProductForDetail
  } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (activeModal !== 'cart') return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponInput('');
    }
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FCFBF9] h-full shadow-2xl flex flex-col justify-between border-l border-[#EDE4E0] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#F0EAE7] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C14D6F]" />
            <h2 className="font-serif text-xl font-medium text-[#23201F]">
              Your Shopping Bag
            </h2>
            <span className="text-xs text-[#8A8481] tabular-nums">
              ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </span>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-[#FAF5F6] px-5 py-3 border-b border-[#F5E1E5]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            {amountNeededForFreeShipping > 0 ? (
              <span className="text-[#752D3E]">
                Add <strong className="tabular-nums font-semibold">${amountNeededForFreeShipping.toFixed(2)}</strong> more for free express shipping
              </span>
            ) : (
              <span className="text-[#1B8053] font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                You unlocked Complimentary Express Shipping!
              </span>
            )}
            <span className="text-[11px] text-[#A23A56] font-medium tabular-nums">
              ${freeShippingThreshold} Goal
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#EED8DC] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C14D6F] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FCE7EA] flex items-center justify-center text-[#C14D6F]">
                <ShoppingBag className="w-8 h-8 stroke-[1.25]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-medium text-[#2B2728]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#7A7471] max-w-xs">
                  Discover our new arrivals, silky slip dresses, and glowing beauty rituals to fill your bag.
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="mt-2 px-6 py-2.5 bg-[#C14D6F] text-white text-xs font-semibold rounded-lg hover:bg-[#A23A56] transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3 bg-white rounded-xl border border-[#EDE4E0] hover:border-[#DEC5CB] transition-all"
              >
                {/* Thumbnail */}
                <div
                  className="w-20 h-24 rounded-lg overflow-hidden bg-[#F7F4F2] shrink-0 cursor-pointer"
                  onClick={() => {
                    setActiveModal(null);
                    setSelectedProductForDetail(item.product);
                  }}
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        className="text-xs font-semibold text-[#272322] hover:text-[#C14D6F] cursor-pointer line-clamp-1"
                        onClick={() => {
                          setActiveModal(null);
                          setSelectedProductForDetail(item.product);
                        }}
                      >
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#9E9794] hover:text-[#C14D6F] p-0.5 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Variant meta */}
                    <div className="text-[11px] text-[#7A7471] mt-0.5 space-x-2">
                      <span>Color: <strong>{item.selectedColor}</strong></span>
                      <span>·</span>
                      <span>Size: <strong>{item.selectedSize}</strong></span>
                    </div>
                  </div>

                  {/* Quantity Stepper & Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#E0D7D3] rounded-md bg-[#FAF8F7]">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-[#6E6764] hover:bg-[#EFEAE7] transition-colors cursor-pointer"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold text-[#2B2728] tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-[#6E6764] hover:bg-[#EFEAE7] transition-colors cursor-pointer"
                        aria-label="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-bold text-[#1E1C1B] tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Coupon & Checkout CTA */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#EDE4E0] bg-white space-y-4">
            {/* Promo Code Input */}
            <div>
              {!appliedCoupon ? (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Promo code (e.g. BLOOM15)"
                    className="flex-1 px-3 py-2 bg-[#FAF8F7] border border-[#E0D7D3] rounded-lg text-xs uppercase placeholder:normal-case placeholder:text-[#A09996] focus:outline-none focus:border-[#C14D6F]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#23201F] text-white text-xs font-semibold rounded-lg hover:bg-[#3D3736] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between p-2.5 bg-[#FCE7EA] border border-[#F2CBD3] rounded-lg text-xs">
                  <div className="flex items-center gap-2 text-[#782A3C]">
                    <Tag className="w-3.5 h-3.5" />
                    <span className="font-semibold">{appliedCoupon.code}</span>
                    <span>({appliedCoupon.percentOff}% off applied)</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-[#9E4A5E] hover:text-[#521926] underline font-medium cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}
              {couponError && (
                <p className="text-[11px] text-[#A23A56] mt-1">{couponError}</p>
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#5C5654] border-t border-[#F2ECE9] pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-[#2B2728]">${cartSubtotal.toFixed(2)}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-[#A23A56]">
                  <span>Discount</span>
                  <span className="tabular-nums font-medium">-${cartDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="tabular-nums font-medium text-[#2B2728]">
                  {cartShipping === 0 ? 'Free' : `$${cartShipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1E1C1B] pt-2 border-t border-[#F2ECE9]">
                <span>Total</span>
                <span className="tabular-nums">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => setActiveModal('checkout')}
              className="w-full py-3.5 px-4 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-sm font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
