import React, { useState } from 'react';
import { Copy, Check, Sparkles, Tag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SpecialOfferBanner: React.FC = () => {
  const { applyCoupon } = useShop();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    applyCoupon('BLOOM15');
    setCopied(true);
    navigator.clipboard?.writeText('BLOOM15');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-8 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#FCE7EA] via-[#FDF2F4] to-[#FAF0ED] p-6 sm:p-8 md:p-10 border border-[#F5D5DB] shadow-2xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A23A56]">
                <Tag className="w-3.5 h-3.5" />
                <span>Seasonal Celebration</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2325] tracking-tight">
                The Blossom Season Drop · Extra 15% Off
              </h3>
              <p className="text-xs sm:text-sm text-[#736568] max-w-xl">
                Enjoy 15% off your entire order with complimentary silk gift packaging and free shipping on orders over $75.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#F2CBD3] shadow-xs">
              <div className="px-3">
                <span className="block text-[10px] text-[#8C8083] uppercase tracking-wider">Coupon Code</span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#A23A56] tracking-wider">BLOOM15</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="py-2 px-4 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Applied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Apply & Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
