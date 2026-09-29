import React, { useState } from 'react';
import { Heart, Instagram, Sparkles, HelpCircle, Shield, ArrowUp, Mail, Phone } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter, showToast } = useShop();
  const [activeInfoModal, setActiveInfoModal] = useState<string | null>(null);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#23201F] text-[#E0D8D6] pt-16 pb-24 md:pb-16 border-t border-[#383332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3D3736]">
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#C14D6F] flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V12m4.5 0a4.5 4.5 0 1 1-4.5 4.5M16.5 12H12m0 4.5a4.5 4.5 0 1 1-4.5-4.5M12 16.5V12m-4.5 0H12" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <span className="font-serif text-2xl text-white font-normal tracking-tight">
                Girl Things
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#A89F9D] leading-relaxed max-w-sm">
              Girl Things is a modern, aesthetic sanctuary for girls everywhere. We curate everyday elegance across timeless clothing, clean beauty rituals, handcrafted jewellery, and calming lifestyle treasures.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('Follow @GirlThingsShop on Instagram for daily aesthetic inspiration!');
                }}
                className="w-8 h-8 rounded-full bg-[#35302F] hover:bg-[#C14D6F] text-[#D8CECC] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#pinterest"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('Explore our moodboards on Pinterest @GirlThingsCurations');
                }}
                className="w-8 h-8 rounded-full bg-[#35302F] hover:bg-[#C14D6F] text-[#D8CECC] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Pinterest"
              >
                <span className="font-serif text-sm font-bold">P</span>
              </a>
              <a
                href="#youtube"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('Watch our styling lookbooks on YouTube!');
                }}
                className="w-8 h-8 rounded-full bg-[#35302F] hover:bg-[#C14D6F] text-[#D8CECC] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="YouTube"
              >
                <span className="font-serif text-xs font-bold">YT</span>
              </a>
            </div>
          </div>

          {/* Col 3: Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Departments
            </h4>
            <ul className="space-y-2 text-xs text-[#A89F9D]">
              {['Clothing', 'Footwear', 'Bags', 'Jewellery', 'Beauty', 'Self Care'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleCategoryClick(item.toLowerCase().replace(' ', ''))}
                    className="hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Customer Care & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#A89F9D]">
              <li>
                <button
                  onClick={() => setActiveInfoModal('shipping')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfoModal('returns')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfoModal('faq')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  FAQ & Ordering Help
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfoModal('contact')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfoModal('privacy')}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  Privacy Policy & Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Support & Concierge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Girl Things Concierge
            </h4>
            <div className="space-y-2 text-xs text-[#A89F9D]">
              <p>Mon – Sat: 9:00 AM – 7:00 PM EST</p>
              <p className="flex items-center gap-1.5 text-white">
                <Mail className="w-3.5 h-3.5 text-[#C14D6F]" />
                <span>concierge@girlthings.com</span>
              </p>
              <p className="flex items-center gap-1.5 text-white">
                <Phone className="w-3.5 h-3.5 text-[#C14D6F]" />
                <span>+1 (800) 447-5844</span>
              </p>
              <div className="pt-2">
                <span className="text-[11px] text-[#8C8280] block">Complimentary worldwide tracking & insured delivery.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A817F]">
          <div>
            © {new Date().getFullYear()} Girl Things Inc. All rights reserved. Designed with love & elegance.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#C98997] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Info Modals (FAQ, Shipping, Returns, Contact, Privacy) */}
      {activeInfoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveInfoModal(null)}
        >
          <div
            className="bg-[#FCFBF9] text-[#2B2728] max-w-lg w-full rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl border border-[#EDE4E0] max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#F0EAE7] pb-3">
              <h3 className="font-serif text-xl font-medium text-[#23201F]">
                {activeInfoModal === 'shipping' && 'Shipping & Delivery'}
                {activeInfoModal === 'returns' && 'Returns & Refunds'}
                {activeInfoModal === 'faq' && 'Frequently Asked Questions'}
                {activeInfoModal === 'contact' && 'Contact Customer Support'}
                {activeInfoModal === 'privacy' && 'Privacy Policy & Terms'}
              </h3>
              <button
                onClick={() => setActiveInfoModal(null)}
                className="text-[#6E6764] hover:text-[#23201F] text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#5C5654] space-y-3 leading-relaxed">
              {activeInfoModal === 'shipping' && (
                <>
                  <p><strong>Complimentary Express Shipping:</strong> Available on all domestic orders over $75. Standard shipping is $8.50.</p>
                  <p><strong>Delivery Timelines:</strong> Domestic orders arrive within 2–4 business days. Priority Overnight arrives next business day if ordered before 2:00 PM.</p>
                  <p><strong>Gift Packaging:</strong> Every piece arrives encased in our signature soft blush recyclable gift box tied with cotton ribbon.</p>
                </>
              )}

              {activeInfoModal === 'returns' && (
                <>
                  <p><strong>30-Day Hassle-Free Window:</strong> If you are not completely enchanted with your purchase, return unworn items with tags attached within 30 days of delivery.</p>
                  <p><strong>Prepaid Return Label:</strong> Generate a prepaid return label instantly from your account dashboard.</p>
                  <p><strong>Refunds:</strong> Processed back to your original payment method within 3 business days of receipt.</p>
                </>
              )}

              {activeInfoModal === 'faq' && (
                <>
                  <p><strong>Q: Are your skincare and beauty products clean?</strong><br />A: Yes! 100% cruelty-free, vegan certified, paraben-free, and formulated with clinical botanical peptides.</p>
                  <p><strong>Q: Is your jewellery tarnish-resistant?</strong><br />A: Our pieces are crafted with 18k thick gold vermeil over 925 sterling silver with a protective anti-tarnish coating suitable for sensitive skin.</p>
                  <p><strong>Q: Can I apply promo codes on sale items?</strong><br />A: Yes, codes like BLOOM15 and GIRL10 apply sitewide!</p>
                </>
              )}

              {activeInfoModal === 'contact' && (
                <>
                  <p>Our dedicated care stylists are here to assist with sizing advice, gifting questions, or order inquiries.</p>
                  <p><strong>Email:</strong> concierge@girlthings.com (Response within 2 hours)</p>
                  <p><strong>Toll-Free Phone:</strong> +1 (800) 447-5844</p>
                  <p><strong>Live Chat:</strong> Available Mon–Sat 9am–7pm EST.</p>
                </>
              )}

              {activeInfoModal === 'privacy' && (
                <>
                  <p>Your privacy is sacred to us. We never sell, rent, or lease your personal data. All payment details are processed with bank-level 256-bit SSL encryption.</p>
                  <p>We strictly comply with GDPR, CCPA, and global consumer privacy standards.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
