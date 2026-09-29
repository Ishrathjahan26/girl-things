import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, ShippingAddress } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  updateCartQuantity: (cartItemId: string, newQty: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartShipping: number;
  cartCount: number;
  freeShippingThreshold: number;
  
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  wishlistCount: number;

  activeModal: 'cart' | 'wishlist' | 'search' | 'account' | 'checkout' | 'order-confirmation' | 'size-guide' | null;
  setActiveModal: (modal: 'cart' | 'wishlist' | 'search' | 'account' | 'checkout' | 'order-confirmation' | 'size-guide' | null) => void;
  
  selectedProductForDetail: Product | null;
  setSelectedProductForDetail: (product: Product | null) => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubcategory: string;
  setSelectedSubcategory: (subcat: string) => void;
  selectedStyleFilter: string | null;
  setSelectedStyleFilter: (style: string | null) => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  setSortBy: (sort: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest') => void;
  
  orders: Order[];
  lastOrder: Order | null;
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: string) => Order;
  
  savedAddresses: ShippingAddress[];
  addSavedAddress: (addr: ShippingAddress) => void;

  appliedCoupon: { code: string; percentOff: number } | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;

  toast: { message: string; type: 'success' | 'info' } | null;
  showToast: (message: string, type?: 'success' | 'info') => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 75;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved state from localStorage with safe defaults
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('gt_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gt_wishlist');
      return saved ? JSON.parse(saved) : ['prod-dress-01', 'prod-jewel-01'];
    } catch {
      return ['prod-dress-01', 'prod-jewel-01'];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('gt_orders');
      if (saved) return JSON.parse(saved);
      // Pre-seed 1 realistic past order for order history tab
      return [
        {
          id: 'GT-849102',
          date: 'Yesterday, 3:14 PM',
          items: [
            {
              id: 'prod-beauty-01-Rose Dew-30 ml',
              product: PRODUCTS.find(p => p.id === 'prod-beauty-01') || PRODUCTS[0],
              quantity: 1,
              selectedColor: 'Rose Dew',
              selectedSize: '30 ml'
            }
          ],
          subtotal: 36,
          discount: 5.4,
          shipping: 0,
          total: 30.6,
          status: 'Shipped',
          shippingAddress: {
            fullName: 'Chloe Bennett',
            email: 'chloe@example.com',
            phone: '+1 (555) 234-5678',
            addressLine: '742 Evergreen Terrace, Apt 4B',
            city: 'Los Angeles',
            state: 'CA',
            zipCode: '90028',
            country: 'United States'
          },
          paymentMethod: 'Apple Pay',
          trackingNumber: 'GT-FEDEX-992384',
          estimatedDelivery: 'Tomorrow by 5:00 PM'
        }
      ];
    } catch {
      return [];
    }
  });

  const [savedAddresses, setSavedAddresses] = useState<ShippingAddress[]>(() => {
    try {
      const saved = localStorage.getItem('gt_addresses');
      return saved ? JSON.parse(saved) : [
        {
          fullName: 'Chloe Bennett',
          email: 'chloe@example.com',
          phone: '+1 (555) 234-5678',
          addressLine: '742 Evergreen Terrace, Apt 4B',
          city: 'Los Angeles',
          state: 'CA',
          zipCode: '90028',
          country: 'United States'
        }
      ];
    } catch {
      return [];
    }
  });

  const [activeModal, setActiveModal] = useState<ShopContextType['activeModal']>(null);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedStyleFilter, setSelectedStyleFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percentOff: number } | null>({
    code: 'BLOOM15',
    percentOff: 15
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  // Sync to storage
  useEffect(() => {
    try {
      localStorage.setItem('gt_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('gt_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('gt_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('gt_addresses', JSON.stringify(savedAddresses));
    } catch (e) {
      console.warn(e);
    }
  }, [savedAddresses]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (
    product: Product,
    quantity: number = 1,
    color?: string,
    size?: string
  ) => {
    const chosenColor = color || (product.colors.length > 0 ? product.colors[0].name : 'Default');
    const chosenSize = size || (product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const cartItemId = `${product.id}-${chosenColor}-${chosenSize}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          quantity,
          selectedColor: chosenColor,
          selectedSize: chosenSize
        }
      ];
    });

    showToast(`Added "${product.name}" to your bag ✨`);
  };

  const updateCartQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Item removed from bag', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from your wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to your wishlist 🤍');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  // Cart calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartDiscount = appliedCoupon ? (cartSubtotal * appliedCoupon.percentOff) / 100 : 0;
  const cartShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : 8.5;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShipping);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BLOOM15') {
      setAppliedCoupon({ code: 'BLOOM15', percentOff: 15 });
      showToast('Code BLOOM15 applied! 15% discount');
      return { success: true, message: '15% discount applied successfully' };
    }
    if (clean === 'GIRL10' || clean === 'WELCOME10') {
      setAppliedCoupon({ code: clean, percentOff: 10 });
      showToast(`${clean} applied! 10% discount`);
      return { success: true, message: '10% discount applied successfully' };
    }
    if (clean === 'PINK20') {
      setAppliedCoupon({ code: 'PINK20', percentOff: 20 });
      showToast('Special code PINK20 applied! 20% discount');
      return { success: true, message: '20% discount applied successfully' };
    }
    return { success: false, message: 'Invalid coupon code. Try BLOOM15 or GIRL10' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  const placeOrder = (shippingAddress: ShippingAddress, paymentMethod: string): Order => {
    const orderNum = `GT-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const estDate = new Date();
    estDate.setDate(now.getDate() + 3);

    const newOrder: Order = {
      id: orderNum,
      date: 'Just now',
      items: [...cart],
      subtotal: cartSubtotal,
      discount: cartDiscount,
      shipping: cartShipping,
      total: cartTotal,
      status: 'Processing',
      shippingAddress,
      paymentMethod,
      trackingNumber: `GT-TRK-${Math.floor(1000000 + Math.random() * 9000000)}`,
      estimatedDelivery: estDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      })
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastOrder(newOrder);
    clearCart();
    setActiveModal('order-confirmation');
    showToast(`Order ${orderNum} confirmed! Thank you 🌸`);
    return newOrder;
  };

  const addSavedAddress = (addr: ShippingAddress) => {
    setSavedAddresses(prev => [addr, ...prev]);
  };

  return (
    <ShopContext.Provider
      value={{
        products: PRODUCTS,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartSubtotal,
        cartDiscount,
        cartShipping,
        cartCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        wishlist,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlist.length,
        activeModal,
        setActiveModal,
        selectedProductForDetail,
        setSelectedProductForDetail,
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
        selectedStyleFilter,
        setSelectedStyleFilter,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        orders,
        lastOrder,
        placeOrder,
        savedAddresses,
        addSavedAddress,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        toast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
