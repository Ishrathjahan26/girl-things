import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const NewArrivalsSection: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter } = useShop();

  const newProducts = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  const handleViewAllNew = () => {
    setSelectedCategory('newarrivals');
    setSelectedSubcategory('all');
    setSelectedStyleFilter(null);
    const catalog = document.getElementById('catalog-view-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="new-arrivals-section" className="py-16 md:py-20 bg-[#FAF7F5] border-t border-[#F0EAE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EDE4E0] gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C14D6F]" />
              <span>Fresh Off The Runway & Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#23201F] mt-1 tracking-tight">
              New Arrivals
            </h2>
          </div>

          <button
            onClick={handleViewAllNew}
            className="text-xs font-semibold text-[#C14D6F] hover:text-[#8F2D44] flex items-center gap-1.5 cursor-pointer group"
          >
            <span>Explore All New Drops</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 New Drops */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
