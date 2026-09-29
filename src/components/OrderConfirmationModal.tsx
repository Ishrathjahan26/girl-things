import React from 'react';
import { CheckCircle2, PackageCheck, Printer, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const OrderConfirmationModal: React.FC = () => {
  const { activeModal, setActiveModal, lastOrder } = useShop();

  if (activeModal !== 'order-confirmation' || !lastOrder) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleContinueShopping = () => {
    setActiveModal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FCFBF9] rounded-2xl shadow-2xl border border-[#EDE4E0] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with floral accent */}
        <div className="bg-[#FAF2F4] p-6 sm:p-8 text-center border-b border-[#F0E1E5] space-y-2">
          <div className="w-14 h-14 rounded-full bg-[#FCE7EA] text-[#C14D6F] flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
            Order Confirmed & Preparing Shipment
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#23201F] tracking-tight">
            Thank you, {lastOrder.shippingAddress.fullName.split(' ')[0]}! 🌸
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6466] max-w-md mx-auto">
            We’ve sent a full confirmation receipt and live tracking updates to <strong>{lastOrder.shippingAddress.email}</strong>.
          </p>
        </div>

        {/* Receipt Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Status tracking banner */}
          <div className="p-4 bg-white rounded-xl border border-[#EDE4E0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[#8C8481] block">Order Number</span>
              <strong className="font-mono text-[#23201F] text-sm">{lastOrder.id}</strong>
            </div>
            <div>
              <span className="text-[#8C8481] block">Estimated Delivery</span>
              <strong className="text-[#1B8053] font-semibold">{lastOrder.estimatedDelivery}</strong>
            </div>
            <div>
              <span className="text-[#8C8481] block">Tracking ID</span>
              <strong className="font-mono text-[#23201F]">{lastOrder.trackingNumber}</strong>
            </div>
            <div>
              <span className="text-[#8C8481] block">Payment Method</span>
              <strong className="text-[#23201F]">{lastOrder.paymentMethod}</strong>
            </div>
          </div>

          {/* Purchased Items list */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#736C69]">
              Items In This Package
            </h4>
            <div className="divide-y divide-[#F2ECE9] border border-[#EDE4E0] rounded-xl bg-white overflow-hidden">
              {lastOrder.items.map((item, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-14 object-cover rounded bg-[#F7F4F2] shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-semibold text-[#272322]">{item.product.name}</h5>
                      <span className="text-[11px] text-[#8C8481]">
                        Color: {item.selectedColor} · Size: {item.selectedSize} · Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#1E1C1B] tabular-nums">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Address & Pricing breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-[#EDE4E0] text-xs space-y-1">
              <span className="text-[#8C8481] block font-medium">Delivering To:</span>
              <p className="font-semibold text-[#272322]">{lastOrder.shippingAddress.fullName}</p>
              <p className="text-[#5C5654]">{lastOrder.shippingAddress.addressLine}</p>
              <p className="text-[#5C5654]">
                {lastOrder.shippingAddress.city}, {lastOrder.shippingAddress.state} {lastOrder.shippingAddress.zipCode}
              </p>
              <p className="text-[#7A7471]">{lastOrder.shippingAddress.phone}</p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#EDE4E0] text-xs space-y-1.5 text-[#5C5654]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-[#2B2728]">${lastOrder.subtotal.toFixed(2)}</span>
              </div>
              {lastOrder.discount > 0 && (
                <div className="flex justify-between text-[#A23A56]">
                  <span>Discount</span>
                  <span className="tabular-nums font-medium">-${lastOrder.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="tabular-nums font-medium text-[#2B2728]">
                  {lastOrder.shipping === 0 ? 'Complimentary' : `$${lastOrder.shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1E1C1B] pt-2 border-t border-[#F2ECE9]">
                <span>Total Paid</span>
                <span className="tabular-nums">${lastOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-[#EDE4E0] bg-white flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="py-2.5 px-4 border border-[#E0D7D3] hover:bg-[#F8F5F3] text-[#5C5654] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Receipt</span>
          </button>

          <button
            onClick={handleContinueShopping}
            className="py-3 px-6 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-xs font-semibold rounded-lg transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
