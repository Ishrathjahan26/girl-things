import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Truck } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';
import { useShop } from '../context/ShopContext';

export const HeroSection: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter } = useShop();

  const handleShopNow = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    const trendingSection = document.getElementById('trending-section');
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreNew = () => {
    setSelectedCategory('newarrivals');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    const newSection = document.getElementById('new-arrivals-section');
    if (newSection) {
      newSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Editorial CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
            {/* Clean unboxed text kicker (Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              <span>Curated Autumn & Spring Wardrobe</span>
              <span aria-hidden="true" className="text-[#C98997]">·</span>
              <span>2026 Collection</span>
            </div>

            {/* Headline - with text-wrap: balance */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#23201F] leading-[1.12] [text-wrap:balance]">
              Everything She Loves, All in One Place.
            </h1>

            {/* Short subtitle */}
            <p className="text-base sm:text-lg text-[#6B6563] leading-relaxed max-w-xl font-normal">
              A thoughtfully curated world of romantic fashion silhouettes, skin-plumping peptide beauty, dainty 18k vermeil jewellery, and calming everyday self-care essentials.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleShopNow}
                className="px-7 py-3.5 bg-[#C14D6F] text-white text-sm font-semibold rounded-lg hover:bg-[#A23A56] transition-all shadow-sm hover:shadow flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleExploreNew}
                className="px-7 py-3.5 bg-white border border-[#E8DFDB] text-[#3D3837] text-sm font-medium rounded-lg hover:bg-[#FDF9F8] hover:border-[#D6CAC4] transition-all cursor-pointer whitespace-nowrap shadow-2xs"
              >
                Explore New Arrivals
              </button>
            </div>

            {/* Trust Markers - Quiet inline text layout */}
            <div className="pt-6 border-t border-[#EDE4E0] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs font-semibold text-[#2B2728]">Complimentary Shipping</span>
                <span className="text-[11px] text-[#7E7774]">On orders over $75</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#2B2728]">Clean & Cruelty-Free</span>
                <span className="text-[11px] text-[#7E7774]">100% verified beauty</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#2B2728]">30-Day Easy Returns</span>
                <span className="text-[11px] text-[#7E7774]">Hassle-free exchanges</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle back decorative frame (soft pink tint) */}
              <div className="absolute -inset-3 bg-[#F6E1E5]/60 rounded-2xl transform rotate-1 transition-transform" />
              
              {/* Main Image container with Zero-Broken-Image Policy fallback */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden shadow-sm bg-[#EFECE8]">
                <img
                  src={HERO_IMAGE}
                  alt="Girl Things aesthetic fashion and lifestyle collection"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to high quality fashion visual
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80';
                  }}
                />

                {/* Subtle scrim & photo highlight tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/60 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C14D6F]" />
                    <span className="text-xs font-medium text-[#2E2A29]">The Blossom Edit</span>
                  </div>
                  <span className="text-xs text-[#7A7370] font-normal">Silk slips, pearls & glazed lips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
