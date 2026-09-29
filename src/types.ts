export interface ProductColor {
  name: string;
  hex: string;
}

export type MainCategory = 
  | 'clothing' 
  | 'footwear' 
  | 'accessories' 
  | 'beauty' 
  | 'bags' 
  | 'jewellery' 
  | 'selfcare' 
  | 'newarrivals';

export interface Product {
  id: string;
  name: string;
  category: MainCategory;
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  badge?: string;
  colors: ProductColor[];
  sizes: string[];
  description: string;
  details: string[];
  materials: string;
  styleCategory?: 'Everyday Girl' | 'College Chic' | 'Date Night' | 'Party Ready' | 'Minimal & Elegant' | 'Traditional Glow';
  inStock: boolean;
  trending?: boolean;
  isNew?: boolean;
  completeTheLookIds?: string[];
}

export interface CartItem {
  id: string; // unique cart item id (product.id + color + size)
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  trackingNumber: string;
  estimatedDelivery: string;
}

export interface FilterState {
  category: string;
  subcategory: string;
  minPrice: number;
  maxPrice: number;
  color: string;
  size: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  searchQuery: string;
  styleFilter?: string;
}
