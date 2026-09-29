import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { STYLE_MOODBOARDS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const StyleInspirationSection: React.FC = () => {
  const { setSelectedStyleFilter, setSelectedCategory, selectedStyleFilter } = useShop();

  const handleSelectStyle = (styleTitle: string) => {
    if (selectedStyleFilter === styleTitle) {
      setSelectedStyleFilter(null);
    } else {
      setSelectedStyleFilter(styleTitle);
      setSelectedCategory('all');
      // Scroll to product catalog or trending section to view the filtered looks
      const section = document.getElementById('catalog-view-section') || document.getElementById('trending-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F5] border-y border-[#F0EAE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#EDE5E2] gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
              Curated Aesthetics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#23201F] mt-1 tracking-tight">
              Style Inspiration
            </h2>
          </div>
          <p className="text-sm text-[#6E6764] max-w-md">
            Click any moodboard to discover cohesive outfit pairings, matching accessories, and signature beauty accents.
          </p>
        </div>

        {/* 6 Editorial Moodboard Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {STYLE_MOODBOARDS.map((mood) => {
            const isSelected = selectedStyleFilter === mood.id;
            return (
              <div
                key={mood.id}
                onClick={() => handleSelectStyle(mood.id)}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] cursor-pointer border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#C14D6F] ring-2 ring-[#C14D6F]/40 shadow-lg'
                    : 'border-[#EDE4E0] hover:border-[#DEC5CB] hover:shadow-md'
                }`}
              >
                {/* Background Image with Fallback */}
                <img
                  src={mood.image}
                  alt={mood.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80';
                  }}
                />

                {/* Measured Scrim for contrast readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity" />

                {/* Top Badge if Active */}
                {isSelected && (
                  <div className="absolute top-4 left-4 bg-[#C14D6F] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs">
                    Viewing Curated Look
                  </div>
                )}

                {/* Card Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight group-hover:text-[#FCE7EA] transition-colors">
                    {mood.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {mood.subtitle}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#FBE4E8] group-hover:translate-x-1 transition-transform">
                    <span>{isSelected ? 'Reset Filter' : 'Shop this vibe'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
