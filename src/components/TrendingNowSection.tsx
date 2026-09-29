import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const TrendingNowSection: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter } = useShop();

  const trendingProducts = PRODUCTS.filter((p) => p.trending).slice(0, 8);

  const handleViewAllTrending = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    const catalog = document.getElementById('catalog-view-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trending-section" className="py-16 md:py-20 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#F0EAE7] gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              <Flame className="w-3.5 h-3.5 fill-[#C14D6F] text-[#C14D6F]" />
              <span>Most Loved This Week</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#23201F] mt-1 tracking-tight">
              Trending Now
            </h2>
          </div>

          <button
            onClick={handleViewAllTrending}
            className="text-xs font-semibold text-[#C14D6F] hover:text-[#8F2D44] flex items-center gap-1.5 cursor-pointer group"
          >
            <span>View All Curations</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 8 Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
