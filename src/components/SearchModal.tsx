import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { activeModal, setActiveModal, setSelectedProductForDetail, setSelectedCategory } = useShop();
  const [query, setQuery] = useState('');

  if (activeModal !== 'search') return null;

  const popularSearches = [
    'Silk Slip Dress',
    'Pearl Choker',
    'Peptide Glow Serum',
    'Ballet Flats',
    'Woven Tote',
    'Linen Co-ord',
    'Lip Oil'
  ];

  const filteredProducts = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.styleCategory && p.styleCategory.toLowerCase().includes(q))
        );
      })
    : [];

  const handleSelectProduct = (p: typeof PRODUCTS[0]) => {
    setActiveModal(null);
    setSelectedProductForDetail(p);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-20 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FCFBF9] rounded-2xl shadow-2xl border border-[#EDE4E0] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#F0EAE7] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C14D6F] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fashion, beauty, jewellery, bags & self-care..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#23201F] placeholder-[#9E9794] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#9E9794] hover:text-[#23201F] p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Quick Popular Searches Tags */}
          {!query && (
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8481]">
                Popular Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-white hover:bg-[#FCE7EA] text-[#4A4543] hover:text-[#C14D6F] text-xs rounded-lg border border-[#EDE4E0] hover:border-[#F2A7B6] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8A8481]">
                <span>Search Results for "{query}"</span>
                <span className="tabular-nums font-medium">{filteredProducts.length} items found</span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-xs text-[#7A7471] space-y-2">
                  <p>No products match your search.</p>
                  <p className="text-[11px] text-[#A09996]">Try keywords like "dress", "gold", "pearl", "serum", or "bag".</p>
                </div>
              ) : (
                <div className="divide-y divide-[#F2ECE9] border border-[#EDE4E0] rounded-xl bg-white overflow-hidden">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectProduct(p)}
                      className="p-3.5 flex items-center justify-between gap-4 hover:bg-[#FDF8F9] transition-colors cursor-pointer text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-12 h-14 object-cover rounded bg-[#F7F4F2] shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="text-[11px] text-[#8C8481] uppercase">{p.subcategory}</span>
                          <h4 className="font-semibold text-[#272322] line-clamp-1">{p.name}</h4>
                          <span className="text-[11px] text-[#A23A56]">{p.styleCategory}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-bold text-[#1E1C1B] tabular-nums">${p.price}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#9E9794]" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
