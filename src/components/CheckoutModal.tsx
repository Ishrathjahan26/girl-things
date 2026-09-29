import React, { useState } from 'react';
import {
  X,
  CreditCard,
  Truck,
  ShieldCheck,
  Lock,
  ArrowRight,
  Check,
  ShoppingBag,
  MapPin,
  Sparkles,
  Phone
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ShippingAddress } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    activeModal,
    setActiveModal,
    appliedCoupon,
    placeOrder,
    savedAddresses,
    addSavedAddress
  } = useShop();

  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [isUsingNewAddress, setIsUsingNewAddress] = useState(false);

  // Address form
  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: savedAddresses[0]?.fullName || 'Chloe Bennett',
    email: savedAddresses[0]?.email || 'chloe@example.com',
    phone: savedAddresses[0]?.phone || '+1 (555) 234-5678',
    addressLine: savedAddresses[0]?.addressLine || '742 Evergreen Terrace, Apt 4B',
    city: savedAddresses[0]?.city || 'Los Angeles',
    state: savedAddresses[0]?.state || 'CA',
    zipCode: savedAddresses[0]?.zipCode || '90028',
    country: 'United States'
  });

  // Shipping & Payment selection
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'priority'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('884');
  const [codConfirmed, setCodConfirmed] = useState(false);

  if (activeModal !== 'checkout') return null;

  const currentAddress = isUsingNewAddress
    ? formData
    : savedAddresses[selectedAddressIndex] || formData;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (isUsingNewAddress) {
      addSavedAddress(formData);
    }
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    const finalMethodName =
      paymentMethod === 'card'
        ? 'Credit Card (ending in 4242)'
        : paymentMethod === 'applepay'
        ? 'Apple Pay'
        : 'Cash on Delivery (Verified)';

    placeOrder(currentAddress, finalMethodName);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#FCFBF9] rounded-2xl shadow-2xl border border-[#EDE4E0] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#F0EAE7]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl sm:text-2xl text-[#23201F]">Girl Things Checkout</span>
            <span className="hidden sm:inline-block text-xs bg-[#FCE7EA] text-[#8F2D44] px-2.5 py-0.5 rounded font-medium">
              Encrypted 256-bit SSL
            </span>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Tabs indicator */}
        <div className="bg-[#FAF7F5] px-6 py-2.5 border-b border-[#F0EAE7] flex items-center gap-4 text-xs font-medium">
          <div className={`flex items-center gap-1.5 ${step === 'shipping' ? 'text-[#C14D6F] font-bold' : 'text-[#5E5956]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'shipping' ? 'bg-[#C14D6F] text-white' : 'bg-[#E5DCD8] text-[#333]'}`}>
              1
            </span>
            <span>Delivery & Shipping</span>
          </div>
          <span className="text-[#C9BFBC]">/</span>
          <div className={`flex items-center gap-1.5 ${step === 'payment' ? 'text-[#C14D6F] font-bold' : 'text-[#8A8481]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'payment' ? 'bg-[#C14D6F] text-white' : 'bg-[#E5DCD8] text-[#777]'}`}>
              2
            </span>
            <span>Payment & Review</span>
          </div>
        </div>

        {/* Checkout Content Grid */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Left Form (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {step === 'shipping' ? (
              <form onSubmit={handleNextToPayment} className="space-y-5">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#23201F] mb-1">
                    Shipping Address
                  </h3>
                  <p className="text-xs text-[#736C69]">
                    Where should we send your lovely pieces?
                  </p>
                </div>

                {/* Saved Address Selection */}
                {savedAddresses.length > 0 && !isUsingNewAddress && (
                  <div className="space-y-3">
                    {savedAddresses.map((addr, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedAddressIndex(idx)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between ${
                          selectedAddressIndex === idx
                            ? 'border-[#C14D6F] bg-[#FDF5F7] shadow-xs'
                            : 'border-[#EDE4E0] bg-white hover:border-[#D6CAC4]'
                        }`}
                      >
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-[#272322]">
                              {addr.fullName}
                            </span>
                            {idx === 0 && (
                              <span className="text-[10px] bg-[#E8DFDB] text-[#4A4543] px-2 py-0.5 rounded">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-[#5C5654]">{addr.addressLine}, {addr.city}, {addr.state} {addr.zipCode}</p>
                          <p className="text-[#7A7471]">{addr.phone} · {addr.email}</p>
                        </div>

                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedAddressIndex === idx
                            ? 'border-[#C14D6F] bg-[#C14D6F] text-white'
                            : 'border-[#D0C7C3]'
                        }`}>
                          {selectedAddressIndex === idx && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => setIsUsingNewAddress(true)}
                      className="text-xs text-[#C14D6F] hover:underline font-semibold cursor-pointer block pt-1"
                    >
                      + Ship to a different address
                    </button>
                  </div>
                )}

                {/* New Address Form */}
                {isUsingNewAddress && (
                  <div className="space-y-3 p-4 bg-white rounded-xl border border-[#EDE4E0]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F5F2EF]">
                      <span className="text-xs font-semibold text-[#272322]">New Shipping Details</span>
                      <button
                        type="button"
                        onClick={() => setIsUsingNewAddress(false)}
                        className="text-xs text-[#7A7471] hover:underline"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Street Address</label>
                      <input
                        type="text"
                        required
                        value={formData.addressLine}
                        onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">City</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">State / Province</label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">ZIP / Postal Code</label>
                        <input
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg bg-[#FAF8F7]"
                      />
                    </div>
                  </div>
                )}

                {/* Shipping Method */}
                <div className="space-y-3 pt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#736C69]">
                    Shipping Method
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      onClick={() => setShippingMethod('standard')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        shippingMethod === 'standard'
                          ? 'border-[#C14D6F] bg-[#FDF5F7]'
                          : 'border-[#EDE4E0] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#272322]">Standard Express</span>
                        <span className="tabular-nums font-bold text-[#1E1C1B]">
                          {cartShipping === 0 ? 'FREE' : `$${cartShipping.toFixed(2)}`}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#7A7471] block mt-1">
                        3-5 business days · Signature tracking
                      </span>
                    </div>

                    <div
                      onClick={() => setShippingMethod('priority')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        shippingMethod === 'priority'
                          ? 'border-[#C14D6F] bg-[#FDF5F7]'
                          : 'border-[#EDE4E0] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#272322]">Priority Overnight</span>
                        <span className="tabular-nums font-bold text-[#1E1C1B]">$14.00</span>
                      </div>
                      <span className="text-[11px] text-[#7A7471] block mt-1">
                        Next business day delivery
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-sm font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              /* Payment step */
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#23201F] mb-1">
                    Select Payment Method
                  </h3>
                  <p className="text-xs text-[#736C69]">
                    All transactions are safe and encrypted.
                  </p>
                </div>

                {/* Payment Option Tabs */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#C14D6F] bg-[#FDF5F7] text-[#C14D6F]'
                        : 'border-[#EDE4E0] bg-white text-[#5C5654]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'applepay'
                        ? 'border-[#C14D6F] bg-[#FDF5F7] text-[#C14D6F]'
                        : 'border-[#EDE4E0] bg-white text-[#5C5654]'
                    }`}
                  >
                    <Lock className="w-4 h-4" />
                    <span>Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`py-3 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'border-[#C14D6F] bg-[#FDF5F7] text-[#C14D6F]'
                        : 'border-[#EDE4E0] bg-white text-[#5C5654]'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>Cash on Delivery</span>
                  </button>
                </div>

                {/* Card input mockup */}
                {paymentMethod === 'card' && (
                  <div className="p-4 bg-white rounded-xl border border-[#EDE4E0] space-y-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg font-mono bg-[#FAF8F7]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Expiry Date</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg font-mono bg-[#FAF8F7]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#4A4543] mb-1">Security Code (CVC)</label>
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-[#E0D7D3] rounded-lg font-mono bg-[#FAF8F7]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Cash on Delivery verification form */}
                {paymentMethod === 'cod' && (
                  <div className="p-4 bg-[#FFFBF0] rounded-xl border border-[#F3E2B8] space-y-2 text-xs text-[#7A6129]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#8C6D25]">
                      <Phone className="w-4 h-4" />
                      <span>Cash on Delivery (COD) Confirmation</span>
                    </div>
                    <p>
                      You will pay exactly <strong className="font-mono">${cartTotal.toFixed(2)}</strong> in cash to the courier upon delivery.
                    </p>
                    <label className="flex items-center gap-2 pt-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={codConfirmed}
                        onChange={(e) => setCodConfirmed(e.target.checked)}
                        className="rounded text-[#C14D6F]"
                      />
                      <span>I confirm I will have exact cash ready at delivery</span>
                    </label>
                  </div>
                )}

                {paymentMethod === 'applepay' && (
                  <div className="p-6 bg-white rounded-xl border border-[#EDE4E0] text-center space-y-2">
                    <p className="text-xs text-[#5C5654]">
                      Fast, seamless payment with Touch ID or Face ID.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('shipping')}
                    className="py-3 px-5 border border-[#E0D7D3] text-[#5C5654] hover:bg-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleCompleteOrder}
                    className="flex-1 py-3.5 px-4 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-sm font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Place Order · ${cartTotal.toFixed(2)}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Order Summary Column (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#EDE4E0] space-y-4 h-fit">
            <h4 className="font-serif text-base font-semibold text-[#272322] pb-2 border-b border-[#F2ECE9]">
              Order Summary ({cart.length})
            </h4>

            {/* Item list */}
            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 text-xs">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-12 h-14 object-cover rounded bg-[#F7F4F2] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 justify-between flex flex-col">
                    <div>
                      <p className="font-medium text-[#272322] line-clamp-1">{item.product.name}</p>
                      <p className="text-[11px] text-[#8C8481]">{item.selectedColor} · {item.selectedSize} · Qty {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-[#1E1C1B] tabular-nums">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Breakdown */}
            <div className="border-t border-[#F2ECE9] pt-3 space-y-1.5 text-xs text-[#5C5654]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-[#2B2728]">${cartSubtotal.toFixed(2)}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-[#A23A56]">
                  <span>Discount ({appliedCoupon?.code})</span>
                  <span className="tabular-nums font-medium">-${cartDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="tabular-nums font-medium text-[#2B2728]">
                  {cartShipping === 0 ? 'Free' : `$${cartShipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1E1C1B] pt-2 border-t border-[#F2ECE9]">
                <span>Total Due</span>
                <span className="tabular-nums">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
