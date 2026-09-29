import React, { useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, X, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { CATEGORIES_DATA } from '../data/products';

export const CategoryCatalogView: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    selectedStyleFilter,
    setSelectedStyleFilter,
    sortBy,
    setSortBy
  } = useShop();

  const currentCategoryData = CATEGORIES_DATA.find((c) => c.id === selectedCategory);

  // Available subcategories for the current category
  const availableSubcategories = currentCategoryData ? currentCategoryData.subcategories : [];

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'newarrivals') {
        result = result.filter((p) => p.isNew || p.badge === 'New Drop');
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      result = result.filter((p) => p.subcategory.toLowerCase() === selectedSubcategory.toLowerCase());
    }

    // Filter by style vibe
    if (selectedStyleFilter) {
      result = result.filter((p) => p.styleCategory === selectedStyleFilter);
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else {
      // Featured: trending first
      result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    }

    return result;
  }, [products, selectedCategory, selectedSubcategory, selectedStyleFilter, sortBy]);

  return (
    <section id="catalog-view-section" className="py-12 md:py-16 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#EDE4E0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A23A56] uppercase tracking-wider">
              <span>Girl Things Collection</span>
              {selectedCategory !== 'all' && (
                <>
                  <span>·</span>
                  <span className="capitalize">{selectedCategory}</span>
                </>
              )}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#23201F] mt-1 tracking-tight capitalize">
              {selectedCategory === 'all'
                ? 'Curated Catalog'
                : selectedCategory === 'newarrivals'
                ? 'New Season Drops'
                : currentCategoryData?.name || selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-[#736C69] mt-1 max-w-xl">
              {currentCategoryData?.subtitle || 'Explore our full boutique catalog of fashion, beauty, jewellery, and essentials.'}
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8A8481] whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-white border border-[#E0D7D3] rounded-lg text-xs font-medium text-[#2B2728] focus:outline-none focus:border-[#C14D6F] cursor-pointer"
            >
              <option value="featured">Featured & Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Subcategory Filter Tabs (Interactive filter buttons) */}
        {availableSubcategories.length > 0 && (
          <div className="pt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedSubcategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedSubcategory === 'all'
                  ? 'bg-[#23201F] text-white shadow-xs'
                  : 'bg-white border border-[#EDE4E0] text-[#5C5654] hover:border-[#C14D6F]'
              }`}
            >
              All {currentCategoryData?.name}
            </button>
            {availableSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedSubcategory.toLowerCase() === sub.toLowerCase()
                    ? 'bg-[#C14D6F] text-white shadow-xs'
                    : 'bg-white border border-[#EDE4E0] text-[#5C5654] hover:border-[#C14D6F]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Active Filter Pills (Removable) */}
        {(selectedSubcategory !== 'all' || selectedStyleFilter || selectedCategory !== 'all') && (
          <div className="pt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#8C8481]">Active Filters:</span>
            {selectedCategory !== 'all' && (
              <span className="bg-[#FAF2F4] text-[#8F2D44] border border-[#F2CBD3] px-2.5 py-1 rounded-md flex items-center gap-1">
                Category: <strong className="capitalize">{selectedCategory}</strong>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                  }}
                  className="hover:text-black cursor-pointer ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedSubcategory !== 'all' && (
              <span className="bg-[#FAF2F4] text-[#8F2D44] border border-[#F2CBD3] px-2.5 py-1 rounded-md flex items-center gap-1">
                Subcategory: <strong>{selectedSubcategory}</strong>
                <button
                  onClick={() => setSelectedSubcategory('all')}
                  className="hover:text-black cursor-pointer ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedStyleFilter && (
              <span className="bg-[#FAF2F4] text-[#8F2D44] border border-[#F2CBD3] px-2.5 py-1 rounded-md flex items-center gap-1">
                Style: <strong>{selectedStyleFilter}</strong>
                <button
                  onClick={() => setSelectedStyleFilter(null)}
                  className="hover:text-black cursor-pointer ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSelectedStyleFilter(null);
              }}
              className="text-[#C14D6F] hover:underline font-medium ml-2 cursor-pointer"
            >
              Reset all
            </button>
          </div>
        )}

        {/* Results Count Banner */}
        <div className="pt-4 pb-6 flex items-center justify-between text-xs text-[#8A8481]">
          <span>
            Showing <strong className="tabular-nums text-[#23201F]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#EDE4E0] p-8 space-y-3">
            <h3 className="font-serif text-lg text-[#272322]">No products found</h3>
            <p className="text-xs text-[#7A7471] max-w-sm mx-auto">
              We couldn't find items matching your current filters. Try changing or resetting your selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSelectedStyleFilter(null);
              }}
              className="px-5 py-2.5 bg-[#C14D6F] text-white text-xs font-semibold rounded-lg hover:bg-[#A23A56] transition-colors cursor-pointer"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
