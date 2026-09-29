import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CategoryShowcase: React.FC = () => {
  const { setSelectedCategory, setSelectedSubcategory, setSelectedStyleFilter } = useShop();

  const handleSelectCategory = (catId: string, subcat?: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory(subcat || 'all');
    setSelectedStyleFilter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#F0EAE7] gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              Curated Departments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#23201F] mt-1 tracking-tight">
              Shop by Category
            </h2>
          </div>
          <p className="text-sm text-[#736C69] max-w-md">
            Explore our thoughtfully gathered collections designed to elevate your everyday routines and statement occasions.
          </p>
        </div>

        {/* Grid of Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className="group relative cursor-pointer flex flex-col rounded-xl overflow-hidden bg-white border border-[#EFE8E5] hover:border-[#DEC5CB] hover:shadow-md transition-all duration-300"
            >
              {/* Category Image with fallback */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F2EF]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Micro Action Button on Hover */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2B2728] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4 text-[#C14D6F]" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-[#272322] group-hover:text-[#C14D6F] transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] font-normal text-[#8A8481] tabular-nums">
                      {cat.itemCount}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A7471] mt-1 line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Subcategories tags */}
                <div className="mt-3 pt-2.5 border-t border-[#F7F3F1] flex flex-wrap gap-1.5">
                  {cat.subcategories.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectCategory(cat.id, sub);
                      }}
                      className="text-[11px] text-[#635D5B] hover:text-[#C14D6F] hover:underline"
                    >
                      {sub}{i < Math.min(cat.subcategories.length, 3) - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
