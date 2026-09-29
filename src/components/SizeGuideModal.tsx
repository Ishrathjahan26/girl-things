import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SizeGuideModal: React.FC = () => {
  const { activeModal, setActiveModal } = useShop();
  const [tab, setTab] = useState<'apparel' | 'footwear' | 'rings'>('apparel');

  if (activeModal !== 'size-guide') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FCFBF9] rounded-2xl shadow-2xl border border-[#EDE4E0] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F0EAE7] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#C14D6F]" />
            <h3 className="font-serif text-xl font-medium text-[#23201F]">
              Girl Things Size Guide
            </h3>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-[#5A5452] hover:text-[#1F1D1D] hover:bg-[#F2ECE9] rounded-full transition-colors cursor-pointer"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="bg-[#FAF7F5] px-6 flex items-center border-b border-[#F0EAE7] text-xs font-semibold">
          <button
            onClick={() => setTab('apparel')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              tab === 'apparel'
                ? 'border-[#C14D6F] text-[#C14D6F]'
                : 'border-transparent text-[#6B6563] hover:text-[#23201F]'
            }`}
          >
            Clothing & Dresses
          </button>
          <button
            onClick={() => setTab('footwear')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              tab === 'footwear'
                ? 'border-[#C14D6F] text-[#C14D6F]'
                : 'border-transparent text-[#6B6563] hover:text-[#23201F]'
            }`}
          >
            Footwear
          </button>
          <button
            onClick={() => setTab('rings')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              tab === 'rings'
                ? 'border-[#C14D6F] text-[#C14D6F]'
                : 'border-transparent text-[#6B6563] hover:text-[#23201F]'
            }`}
          >
            Rings & Jewellery
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {tab === 'apparel' && (
            <div className="space-y-4">
              <p className="text-[#6B6563]">
                Measurements are in inches. Our silhouettes are tailored true-to-size with comfortable natural drape.
              </p>
              <div className="overflow-x-auto border border-[#EDE4E0] rounded-xl bg-white">
                <table className="w-full text-left divide-y divide-[#F2ECE9]">
                  <thead className="bg-[#FAF7F5] text-[#736C69]">
                    <tr>
                      <th className="p-3">Size</th>
                      <th className="p-3">US</th>
                      <th className="p-3">Bust (in)</th>
                      <th className="p-3">Waist (in)</th>
                      <th className="p-3">Hips (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F5F2EF] text-[#272322] tabular-nums">
                    <tr><td className="p-3 font-semibold">XS</td><td className="p-3">0-2</td><td className="p-3">31 - 33</td><td className="p-3">24 - 26</td><td className="p-3">34 - 36</td></tr>
                    <tr><td className="p-3 font-semibold">S</td><td className="p-3">4-6</td><td className="p-3">34 - 35</td><td className="p-3">27 - 28</td><td className="p-3">37 - 38</td></tr>
                    <tr><td className="p-3 font-semibold">M</td><td className="p-3">8-10</td><td className="p-3">36 - 37</td><td className="p-3">29 - 30</td><td className="p-3">39 - 40</td></tr>
                    <tr><td className="p-3 font-semibold">L</td><td className="p-3">12-14</td><td className="p-3">38 - 40</td><td className="p-3">31 - 33</td><td className="p-3">41 - 43</td></tr>
                    <tr><td className="p-3 font-semibold">XL</td><td className="p-3">16</td><td className="p-3">41 - 43</td><td className="p-3">34 - 36</td><td className="p-3">44 - 46</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'footwear' && (
            <div className="space-y-4">
              <p className="text-[#6B6563]">
                European sizes are our primary sizing standard for kitten heels, loafers, and ballet flats.
              </p>
              <div className="overflow-x-auto border border-[#EDE4E0] rounded-xl bg-white">
                <table className="w-full text-left divide-y divide-[#F2ECE9]">
                  <thead className="bg-[#FAF7F5] text-[#736C69]">
                    <tr>
                      <th className="p-3">EU</th>
                      <th className="p-3">US Women</th>
                      <th className="p-3">UK</th>
                      <th className="p-3">Foot Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F5F2EF] text-[#272322] tabular-nums">
                    <tr><td className="p-3 font-semibold">36</td><td className="p-3">5.5 - 6</td><td className="p-3">3.5</td><td className="p-3">23.0 cm</td></tr>
                    <tr><td className="p-3 font-semibold">37</td><td className="p-3">6.5</td><td className="p-3">4.0</td><td className="p-3">23.5 cm</td></tr>
                    <tr><td className="p-3 font-semibold">38</td><td className="p-3">7 - 7.5</td><td className="p-3">5.0</td><td className="p-3">24.2 cm</td></tr>
                    <tr><td className="p-3 font-semibold">39</td><td className="p-3">8 - 8.5</td><td className="p-3">6.0</td><td className="p-3">24.8 cm</td></tr>
                    <tr><td className="p-3 font-semibold">40</td><td className="p-3">9</td><td className="p-3">6.5</td><td className="p-3">25.5 cm</td></tr>
                    <tr><td className="p-3 font-semibold">41</td><td className="p-3">9.5 - 10</td><td className="p-3">7.5</td><td className="p-3">26.2 cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'rings' && (
            <div className="space-y-4">
              <p className="text-[#6B6563]">
                Wrap a narrow strip of paper snugly around your finger base and measure against a ruler.
              </p>
              <div className="overflow-x-auto border border-[#EDE4E0] rounded-xl bg-white">
                <table className="w-full text-left divide-y divide-[#F2ECE9]">
                  <thead className="bg-[#FAF7F5] text-[#736C69]">
                    <tr>
                      <th className="p-3">Ring Size (US)</th>
                      <th className="p-3">Circumference (mm)</th>
                      <th className="p-3">Inside Diameter (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F5F2EF] text-[#272322] tabular-nums">
                    <tr><td className="p-3 font-semibold">Size 6</td><td className="p-3">51.8 mm</td><td className="p-3">16.5 mm</td></tr>
                    <tr><td className="p-3 font-semibold">Size 7</td><td className="p-3">54.4 mm</td><td className="p-3">17.3 mm</td></tr>
                    <tr><td className="p-3 font-semibold">Size 8</td><td className="p-3">57.0 mm</td><td className="p-3">18.1 mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
