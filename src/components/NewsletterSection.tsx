import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const NewsletterSection: React.FC = () => {
  const { showToast, applyCoupon } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'info');
      return;
    }
    setSubscribed(true);
    applyCoupon('GIRL10');
    showToast('Welcome to the Girl Things club! Use code GIRL10 for 10% off');
  };

  return (
    <section className="py-16 bg-[#FAF6F4] border-t border-[#F0EAE7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#FCE7EA] flex items-center justify-center text-[#C14D6F]">
          <Mail className="w-5 h-5 stroke-[1.75]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-wider text-[#A23A56] uppercase">
            Join Our Circle
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#23201F] tracking-tight">
            A Little Pink in Your Inbox
          </h2>
          <p className="text-sm sm:text-base text-[#6E6764] max-w-lg mx-auto">
            Be the first to receive secret seasonal drops, intimate styling lookbooks, and exclusive 15% subscriber-only treats.
          </p>
        </div>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="flex-1 px-4 py-3 bg-white border border-[#E0D7D3] rounded-lg text-sm text-[#2B2728] placeholder-[#9E9794] focus:outline-none focus:border-[#C14D6F] focus:ring-1 focus:ring-[#C14D6F]/30 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#C14D6F] hover:bg-[#A23A56] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto p-4 bg-[#FCE7EA] border border-[#F2CBD3] rounded-xl text-center space-y-1.5 animate-in fade-in">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8F2D44]">
              <Check className="w-4 h-4" />
              <span>You are subscribed!</span>
            </div>
            <p className="text-xs text-[#712F3F]">
              Enjoy 10% off your next purchase with code <strong className="font-mono font-bold">GIRL10</strong> (automatically saved for checkout).
            </p>
          </div>
        )}

        <p className="text-[11px] text-[#9E9794]">
          Zero spam. Only lovely things. Unsubscribe whenever you wish.
        </p>
      </div>
    </section>
  );
};
