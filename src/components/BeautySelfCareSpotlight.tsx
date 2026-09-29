import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BEAUTY_CATEGORY_IMG, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const BeautySelfCareSpotlight: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter } = useShop();

  const beautyProducts = PRODUCTS.filter(
    p => p.category === 'beauty' || p.category === 'selfcare'
  ).slice(0, 4);

  const handleExploreBeauty = () => {
    setSelectedCategory('beauty');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FDF5F6] border border-[#F6DEE2] rounded-2xl p-6 sm:p-8 lg:p-10 mb-12">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              Rituals & Self Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2325] tracking-tight">
              Dewy Glows, Signature Scents & Mindful Moments
            </h2>
            <p className="text-sm sm:text-base text-[#6E6366] leading-relaxed">
              Formulated with clean multi-peptides, pure plant squalane, and hand-poured botanical aromas. Experience the calming pleasure of gentle daily beauty rituals.
            </p>
            <div className="pt-2">
              <button
                onClick={handleExploreBeauty}
                className="px-6 py-3 bg-[#C14D6F] text-white text-xs font-semibold rounded-lg hover:bg-[#A23A56] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Discover All Beauty & Self Care</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xs border border-white">
              <img
                src={BEAUTY_CATEGORY_IMG}
                alt="Clean luxury skincare and fragrance collection"
                className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </div>

        {/* Featured Beauty Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {beautyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
