import React, { useState } from 'react';
import { X, User, Package, MapPin, Heart, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const UserAccountModal: React.FC = () => {
  const {
    activeModal,
    setActiveModal,
    orders,
    savedAddresses,
    wishlistCount,
    setSelectedProductForDetail
  } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'profile'>('orders');

  if (activeModal !== 'account') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FCFBF9] rounded-2xl shadow-2xl border border-[#EDE4E0] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F0EAE7] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE7EA] text-[#C14D6F] flex items-center justify-center font-serif text-lg font-semibold">
              CB
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#23201F]">
                Chloe Bennett
              </h3>
              <span className="text-xs text-[#8A8481]">
                chloe@example.com · VIP Club Member
              </span>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close account"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#FAF7F5] px-6 flex items-center border-b border-[#F0EAE7] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'border-[#C14D6F] text-[#C14D6F]'
                : 'border-transparent text-[#6B6563] hover:text-[#23201F]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Order History ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'addresses'
                ? 'border-[#C14D6F] text-[#C14D6F]'
                : 'border-transparent text-[#6B6563] hover:text-[#23201F]'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Saved Addresses ({savedAddresses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-[#C14D6F] text-[#C14D6F]'
                : 'border-transparent text-[#6B6563] hover:text-[#23201F]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Preferences</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Order History */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="py-12 text-center text-xs text-[#7A7471]">
                  You have placed no orders yet.
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-5 bg-white rounded-xl border border-[#EDE4E0] shadow-2xs space-y-4 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F5F2EF]">
                      <div>
                        <span className="text-[#8C8481]">Order ID: </span>
                        <strong className="font-mono text-[#23201F]">{order.id}</strong>
                        <span className="mx-2 text-[#C9BFBC]">·</span>
                        <span className="text-[#8C8481]">{order.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                          order.status === 'Delivered'
                            ? 'bg-[#E7F6EE] text-[#1B8053]'
                            : 'bg-[#FCE7EA] text-[#A23A56]'
                        }`}>
                          {order.status}
                        </span>
                        <span className="font-bold text-sm text-[#1E1C1B] tabular-nums">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-10 h-12 object-cover rounded bg-[#F7F4F2]"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="font-semibold text-[#272322]">{item.product.name}</p>
                              <span className="text-[11px] text-[#8C8481]">
                                {item.selectedColor} · {item.selectedSize} · Qty {item.quantity}
                              </span>
                            </div>
                          </div>
                          <span className="font-medium text-[#1E1C1B] tabular-nums">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline status & tracking */}
                    <div className="pt-3 border-t border-[#F5F2EF] flex flex-wrap items-center justify-between text-[11px] text-[#7A7471] gap-2">
                      <span>Tracking: <strong className="font-mono text-[#272322]">{order.trackingNumber}</strong></span>
                      <span>Delivery: <strong className="text-[#1B8053]">{order.estimatedDelivery}</strong></span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Addresses */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedAddresses.map((addr, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-[#EDE4E0] text-xs space-y-1 relative"
                  >
                    {idx === 0 && (
                      <span className="absolute top-3 right-3 text-[10px] bg-[#FCE7EA] text-[#8F2D44] font-semibold px-2 py-0.5 rounded">
                        Default
                      </span>
                    )}
                    <h4 className="font-semibold text-sm text-[#272322]">{addr.fullName}</h4>
                    <p className="text-[#5C5654]">{addr.addressLine}</p>
                    <p className="text-[#5C5654]">{addr.city}, {addr.state} {addr.zipCode}</p>
                    <p className="text-[#5C5654]">{addr.country}</p>
                    <p className="text-[#7A7471] pt-1">{addr.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile */}
          {activeTab === 'profile' && (
            <div className="bg-white p-5 rounded-xl border border-[#EDE4E0] space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#8C8481] block">Full Name</span>
                  <span className="font-semibold text-sm text-[#272322]">Chloe Bennett</span>
                </div>
                <div>
                  <span className="text-[#8C8481] block">Email</span>
                  <span className="font-semibold text-sm text-[#272322]">chloe@example.com</span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#F5F2EF] flex items-center justify-between">
                <span>Items in Wishlist</span>
                <span className="font-bold text-sm text-[#C14D6F]">{wishlistCount} saved</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Member Tier</span>
                <span className="font-semibold text-[#8F2D44] bg-[#FCE7EA] px-2.5 py-0.5 rounded">
                  Rose Gold Tier · 15% VIP Access
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
