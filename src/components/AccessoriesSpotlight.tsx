import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ACCESSORIES_CATEGORY_IMG, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const AccessoriesSpotlight: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter } = useShop();

  const accessoriesProducts = PRODUCTS.filter(
    p => p.category === 'accessories' || p.category === 'jewellery' || p.category === 'bags'
  ).slice(0, 4);

  const handleExploreAccessories = () => {
    setSelectedCategory('jewellery');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F5] border-t border-[#F0EAE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#EBE3DF] rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 shadow-2xs">
          {/* Left Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xs border border-[#F0EAE7]">
              <img
                src={ACCESSORIES_CATEGORY_IMG}
                alt="Dainty gold vermeil jewellery, pearls and handbags"
                className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              The Finishing Touches
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2325] tracking-tight">
              Dainty Vermeil, Organic Pearls & Structured Shapes
            </h2>
            <p className="text-sm sm:text-base text-[#6E6366] leading-relaxed">
              Every outfit comes alive in the fine details: 18k thick gold dipped croissant rings, AAA baroque freshwater pearls, pure silk bow scrunchies, and architectural crescent handbags.
            </p>
            <div className="pt-2">
              <button
                onClick={handleExploreAccessories}
                className="px-6 py-3 bg-[#23201F] text-white text-xs font-semibold rounded-lg hover:bg-[#3B3635] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Shop Jewellery & Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Accessories Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {accessoriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
