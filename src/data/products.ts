import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_girl_things_aesthetic_1790657558764.jpg';
export const FASHION_CATEGORY_IMG = '/src/assets/images/category_fashion_editorial_1790657571572.jpg';
export const BEAUTY_CATEGORY_IMG = '/src/assets/images/category_beauty_skincare_1790657582131.jpg';
export const ACCESSORIES_CATEGORY_IMG = '/src/assets/images/category_accessories_jewellery_1790657594717.jpg';

export const PRODUCTS: Product[] = [
  // --- CLOTHING ---
  {
    id: 'prod-dress-01',
    name: 'Ethereal Silk Slip Midi Dress',
    category: 'clothing',
    subcategory: 'Dresses',
    price: 88,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 142,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
      FASHION_CATEGORY_IMG
    ],
    badge: 'Bestseller',
    colors: [
      { name: 'Dusty Rose', hex: '#D89FA9' },
      { name: 'Champagne Silk', hex: '#F0E2D0' },
      { name: 'Midnight Black', hex: '#232323' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'An effortlessly fluid midi dress crafted from luminous heavyweight mulberry silk blend. Features a flattering cowl neckline, adjustable delicate straps, and a gentle bias cut that glides naturally with your movement.',
    details: [
      'Bias-cut silhouette draping comfortably against curves',
      'Delicate adjustable criss-cross straps',
      'Subtle side leg slit for ease of movement',
      'Concealed invisible side zipper closure'
    ],
    materials: '70% Mulberry Silk, 30% Lyocell. Dry clean or hand wash cold with silk detergent.',
    styleCategory: 'Date Night',
    inStock: true,
    trending: true,
    isNew: false,
    completeTheLookIds: ['prod-jewel-01', 'prod-shoe-01', 'prod-bag-01']
  },
  {
    id: 'prod-coord-01',
    name: 'Tailored Linen Co-ord Vest & Trouser Set',
    category: 'clothing',
    subcategory: 'Co-ords',
    price: 124,
    originalPrice: 145,
    rating: 4.8,
    reviewsCount: 88,
    images: [
      FASHION_CATEGORY_IMG,
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Staff Pick',
    colors: [
      { name: 'Soft Oatmeal', hex: '#EAE5DB' },
      { name: 'Blush Sand', hex: '#E8D2CF' },
      { name: 'Olive Sage', hex: '#B8C1AC' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Chic European linen set featuring a tailored button-front vest paired with relaxed high-waisted pleated wide-leg trousers. The ultimate summer power suit for modern effortless elegance.',
    details: [
      'Two-piece matching set: fitted waistcoat + wide-leg trousers',
      'Natural horn buttons with notched lapel detailing',
      'Deep functional side pockets and elasticated back waistband',
      'Breathable pre-washed Belgian linen weave'
    ],
    materials: '100% Certified Sustainable Belgian Linen. Machine wash gentle on cold, hang to dry.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: true,
    isNew: true,
    completeTheLookIds: ['prod-jewel-02', 'prod-shoe-03', 'prod-bag-02']
  },
  {
    id: 'prod-top-01',
    name: 'Fluted Sleeve Floral Chiffon Blouse',
    category: 'clothing',
    subcategory: 'Tops & T-Shirts',
    price: 52,
    originalPrice: 65,
    rating: 4.7,
    reviewsCount: 64,
    images: [
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Popular',
    colors: [
      { name: 'Blush Blossom', hex: '#F7D7DD' },
      { name: 'Ivory Cream', hex: '#FDFCF7' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Romantic sheer chiffon blouse lined with soft jersey, accented with micro-pleats, delicate fluted sleeves, and mother-of-pearl front buttons.',
    details: [
      'Fluted angel cuff sleeves with dainty scalloped trim',
      'Keyhole neckline with tie ribbon',
      'Opaque inner camisole lining included'
    ],
    materials: '100% Recycled Poly Chiffon. Hand wash cold.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: false,
    isNew: true,
    completeTheLookIds: ['prod-bottom-01', 'prod-jewel-01']
  },
  {
    id: 'prod-bottom-01',
    name: 'Pleated High-Waisted Wide Leg Trousers',
    category: 'clothing',
    subcategory: 'Bottoms',
    price: 68,
    rating: 4.8,
    reviewsCount: 95,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Rose Taupe', hex: '#CDB4B5' },
      { name: 'Vanilla Cream', hex: '#F5EFEB' },
      { name: 'Charcoal', hex: '#3B3B3B' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Impeccably tailored trousers with gentle front knife pleats and an ultra-flattering high-rise silhouette that elongates the leg.',
    details: [
      'High-rise waist with clean waistband and belt loops',
      'Front tuck pleats with straight fluid drape',
      'Concealed zip fly and hook-and-bar closure'
    ],
    materials: 'Rayon & Tencel blend with wrinkle-resistant finish.',
    styleCategory: 'College Chic',
    inStock: true,
    trending: true,
    isNew: false
  },
  {
    id: 'prod-ethnic-01',
    name: 'Embroidered Organza Anarkali Kurta & Dupatta',
    category: 'clothing',
    subcategory: 'Ethnic Wear',
    price: 135,
    originalPrice: 165,
    rating: 4.9,
    reviewsCount: 78,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Festive Drop',
    colors: [
      { name: 'Soft Rose & Zari', hex: '#EAB8C1' },
      { name: 'Pistachio Mint', hex: '#D2E3D0' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A breathtaking traditional ensemble featuring artisanal floral resham embroidery on sheer rose organza with scalloped zari borders and matching soft silk churidar.',
    details: [
      'Includes 3 pieces: Anarkali Kurta, Churidar, and Scalloped Dupatta',
      'Handcrafted zari thread embroidery with micro pearl drops',
      'Pure butter-crepe breathable inner lining'
    ],
    materials: 'Pure Sheer Organza with silk lining. Dry clean recommended.',
    styleCategory: 'Traditional Glow',
    inStock: true,
    trending: false,
    isNew: true
  },
  {
    id: 'prod-knit-01',
    name: 'Cashmere-Touch Oversized Bow Cardigan',
    category: 'clothing',
    subcategory: 'Tops & T-Shirts',
    price: 76,
    rating: 4.9,
    reviewsCount: 112,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Cozy Pick',
    colors: [
      { name: 'Powder Pink', hex: '#F7DBE1' },
      { name: 'Cloud White', hex: '#FAF9F6' }
    ],
    sizes: ['XS/S', 'M/L'],
    description: 'Cloud-soft knit cardigan detailed with dainty satin bow ties in place of standard buttons. Cozy, feminine, and perfect for layering over slip dresses.',
    details: [
      'Three front satin tie bow fastenings',
      'Drop shoulders with gently ribbed cuffs',
      'Ultra-soft brushed wool and cashmere blend'
    ],
    materials: 'Wool, Cashmere & Cotton blend.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: true,
    isNew: true
  },

  // --- FOOTWEAR ---
  {
    id: 'prod-shoe-01',
    name: 'Kitten Heel Strappy Sandals',
    category: 'footwear',
    subcategory: 'Heels',
    price: 72,
    originalPrice: 90,
    rating: 4.8,
    reviewsCount: 104,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Trending',
    colors: [
      { name: 'Nude Blush', hex: '#E7CBC9' },
      { name: 'Gilded Gold', hex: '#D6C09A' },
      { name: 'Glossy Black', hex: '#1C1C1C' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    description: 'Delicate 50mm kitten heel sandals with whisper-thin cross straps and an ultra-cushioned memory foam insole for all-day comfort.',
    details: [
      'Comfortable 2-inch (50mm) architectural kitten heel',
      'Triple-density padded memory foam footbed',
      'Adjustable ankle strap with subtle golden buckle'
    ],
    materials: 'Supple vegan nappa leather with non-slip rubberized sole.',
    styleCategory: 'Date Night',
    inStock: true,
    trending: true,
    isNew: false
  },
  {
    id: 'prod-shoe-02',
    name: 'Ballet Square-Toe Bow Flats',
    category: 'footwear',
    subcategory: 'Flats',
    price: 58,
    rating: 4.9,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'New Season',
    colors: [
      { name: 'Dusty Rose Nappa', hex: '#DEB2B7' },
      { name: 'Pearl Cream', hex: '#F7F3EE' },
      { name: 'Patent Cherry', hex: '#871E2D' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    description: 'A contemporary spin on the Parisian ballerina flat, featuring a soft square toe, elastic bridge strap, and a miniature satin ribbon bow.',
    details: [
      'Modern square toe box with flexible construction',
      'Arch supporting inner sole',
      'Dainty center cord bow'
    ],
    materials: 'Buttery soft vegan lambskin leather.',
    styleCategory: 'College Chic',
    inStock: true,
    trending: true,
    isNew: true
  },
  {
    id: 'prod-shoe-03',
    name: 'Chunky Minimalist Platform Sneakers',
    category: 'footwear',
    subcategory: 'Sneakers',
    price: 84,
    rating: 4.7,
    reviewsCount: 167,
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Chalk White & Rose Gold', hex: '#F4EAE6' },
      { name: 'Monochrome Off-White', hex: '#ECE8E1' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    description: 'Cloud-light platform sneakers crafted with clean lines, soft blush suede accents, and durable recycled rubber outsoles.',
    details: [
      '1.5-inch lightweight platform lift',
      'Orthopedic shock-absorbing foam insole',
      'Organic cotton laces and breathable perforated toe'
    ],
    materials: 'Microfiber vegan leather with genuine suede heel tab.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: false,
    isNew: false
  },

  // --- BAGS ---
  {
    id: 'prod-bag-01',
    name: 'The Structured Crescent Shoulder Bag',
    category: 'bags',
    subcategory: 'Shoulder bags',
    price: 94,
    originalPrice: 115,
    rating: 4.9,
    reviewsCount: 210,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
      ACCESSORIES_CATEGORY_IMG
    ],
    badge: 'Iconic',
    colors: [
      { name: 'Petal Pink', hex: '#ECC4CA' },
      { name: 'Caramel Latte', hex: '#BF8A69' },
      { name: 'Noir Black', hex: '#1E1E1E' }
    ],
    sizes: ['One Size'],
    description: 'Sleek architectural crescent shape with a smooth semi-rigid curve that tucks perfectly under the shoulder. Designed to hold your smartphone, cardholder, gloss, and keys.',
    details: [
      'Magnetic flap closure with custom brushed gold hardware',
      'Interior slip card pocket and zippered coin section',
      'Detachable second extender strap for crossbody wear'
    ],
    materials: 'Smooth Italian split calfskin alternative with wipe-clean micro-suede lining.',
    styleCategory: 'Party Ready',
    inStock: true,
    trending: true,
    isNew: false,
    completeTheLookIds: ['prod-jewel-01', 'prod-shoe-01']
  },
  {
    id: 'prod-bag-02',
    name: 'Woven Vegan Leather Everyday Tote',
    category: 'bags',
    subcategory: 'Tote bags',
    price: 86,
    rating: 4.8,
    reviewsCount: 130,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Work & College Favorite',
    colors: [
      { name: 'Warm Sand', hex: '#DBC9B5' },
      { name: 'Rose Taupe', hex: '#C2A3A6' }
    ],
    sizes: ['One Size'],
    description: 'Spacious hand-woven tote designed to fit a 14-inch laptop, water bottle, cosmetic pouch, and daily planner with supreme effortless style.',
    details: [
      'Fits up to 14-inch MacBook or laptop',
      'Removable zippered interior organizer pouch',
      'Reinforced comfort flat shoulder straps'
    ],
    materials: 'Interwoven eco-polyurethane leather.',
    styleCategory: 'College Chic',
    inStock: true,
    trending: true,
    isNew: false
  },
  {
    id: 'prod-bag-03',
    name: 'Soft Ruched Cloud Pouch Crossbody',
    category: 'bags',
    subcategory: 'Crossbody bags',
    price: 64,
    rating: 4.7,
    reviewsCount: 76,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Pearl Cream', hex: '#F9F5EE' },
      { name: 'Pastel Blush', hex: '#F7D6DB' }
    ],
    sizes: ['One Size'],
    description: 'Plump and pillowy soft clutch bag with gathered ruched top and a slim gold snake chain strap for effortless transition from day to dinner.',
    details: [
      'Spring-frame snap closure',
      'Removable chain link strap (22-inch drop)',
      'Soft gathers creating sculptural volume'
    ],
    materials: 'Ultra-supple vegan lambskin.',
    styleCategory: 'Date Night',
    inStock: true,
    trending: false,
    isNew: true
  },

  // --- JEWELLERY & ACCESSORIES ---
  {
    id: 'prod-jewel-01',
    name: '18k Gold Vermeil Freshwater Pearl Choker',
    category: 'jewellery',
    subcategory: 'Necklaces',
    price: 62,
    originalPrice: 78,
    rating: 5.0,
    reviewsCount: 184,
    images: [
      ACCESSORIES_CATEGORY_IMG,
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Top Rated',
    colors: [
      { name: '18k Gold & Pearl', hex: '#E5C158' },
      { name: 'Sterling Silver & Pearl', hex: '#D2D2D2' }
    ],
    sizes: ['Adjustable 14"-16"'],
    description: 'Hand-selected genuine organic baroque freshwater pearls strung on durable silk and finished with an 18k thick gold vermeil lobster clasp with 2-inch extender chain.',
    details: [
      'Grade AAA natural baroque freshwater pearls',
      'Thick 2.5 micron 18k gold over 925 sterling silver',
      'Hypoallergenic, nickel-free and water resistant'
    ],
    materials: 'Freshwater Pearls, 18k Gold Vermeil, 925 Sterling Silver.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: true,
    isNew: false,
    completeTheLookIds: ['prod-jewel-02', 'prod-bag-01']
  },
  {
    id: 'prod-jewel-02',
    name: 'Croissant Dome & Pavé Ring Trio Stack',
    category: 'jewellery',
    subcategory: 'Rings',
    price: 48,
    rating: 4.8,
    reviewsCount: 119,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Customer Love',
    colors: [
      { name: '18k Warm Gold', hex: '#E2B855' },
      { name: 'Rose Gold', hex: '#DB9B8E' }
    ],
    sizes: ['6', '7', '8'],
    description: 'Trio of complementary stackable rings including a sculpted ribbed croissant ring, a micro-pavé cubic zirconia band, and a minimal polished dome ring.',
    details: [
      'Set of 3 stackable rings wear together or solo',
      'Anti-tarnish protective e-coating',
      'Flawless handset 5A cubic zirconia stones'
    ],
    materials: '18k Gold Dip on surgical grade stainless steel. Tarnish resistant.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: true,
    isNew: false
  },
  {
    id: 'prod-jewel-03',
    name: 'Sparkling Tennis Bracelet with Safety Clasp',
    category: 'jewellery',
    subcategory: 'Bracelets',
    price: 54,
    rating: 4.9,
    reviewsCount: 92,
    images: [
      'https://images.unsplash.com/photo-1611591475102-457317e089d7?auto=format&fit=crop&w=800&q=80',
      ACCESSORIES_CATEGORY_IMG
    ],
    colors: [
      { name: 'Silver Rhodium', hex: '#D8D8D8' },
      { name: 'Rose Gold', hex: '#DE9E91' }
    ],
    sizes: ['6.5 inch', '7.0 inch'],
    description: 'A timeless continuous line of round-cut lab crystals set in four-prong baskets that catch the light from every direction.',
    details: [
      '3mm brilliant-cut lab created stones',
      'Double safety box clasp closure',
      'Smooth links that lay flat without pinching'
    ],
    materials: 'Rhodium dipped sterling silver, 5A Cubic Zirconia.',
    styleCategory: 'Party Ready',
    inStock: true,
    trending: false,
    isNew: true
  },
  {
    id: 'prod-acc-01',
    name: 'Mulberry Silk Oversized Bow Hair Clip',
    category: 'accessories',
    subcategory: 'Hair Accessories',
    price: 24,
    rating: 4.9,
    reviewsCount: 165,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Viral',
    colors: [
      { name: 'Blush Rose', hex: '#E8B6BF' },
      { name: 'Champagne Silk', hex: '#EFE5D7' },
      { name: 'Midnight Velvet', hex: '#1F1F1F' }
    ],
    sizes: ['One Size'],
    description: 'A statement romantic hair bow crafted from lustrous 22-momme pure mulberry silk with flowing tails and a secure French barrette clip.',
    details: [
      '100% 22-Momme Mulberry Silk ribbon',
      'Heavy-duty French barrette clasp that holds thick and fine hair alike',
      'Prevents hair crimping and breakage'
    ],
    materials: 'Pure Mulberry Silk.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: true,
    isNew: false
  },
  {
    id: 'prod-acc-02',
    name: 'Tortoiseshell Cat-Eye Sunglasses in Rose Quartz',
    category: 'accessories',
    subcategory: 'Sunglasses',
    price: 45,
    rating: 4.8,
    reviewsCount: 88,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Rose Quartz Tint', hex: '#DEC1C3' },
      { name: 'Classic Amber Tortoise', hex: '#875128' }
    ],
    sizes: ['One Size'],
    description: 'Vintage 90s inspired subtle cat-eye silhouette sculpted from hand-polished cellulose acetate with UV400 protective gradient lenses.',
    details: [
      '100% UV400 Protection (UVA & UVB)',
      'Durable 5-barrel metal hinges',
      'Includes faux-leather protective case and microfiber cloth'
    ],
    materials: 'Handcrafted Acetate frame.',
    styleCategory: 'College Chic',
    inStock: true,
    trending: true,
    isNew: true
  },
  {
    id: 'prod-acc-03',
    name: 'Classic Minimalist Rose Gold Mesh Watch',
    category: 'accessories',
    subcategory: 'Watches',
    price: 89,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 97,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Gift Pick',
    colors: [
      { name: 'Rose Gold', hex: '#D69992' },
      { name: 'Silver Sunray', hex: '#CDCDCD' }
    ],
    sizes: ['28mm Dial'],
    description: 'An ultra-slim 28mm timepiece featuring a mother-of-pearl dial, subtle crystal indices, and an easily adjustable magnetic stainless steel mesh strap.',
    details: [
      'Japanese Quartz Movement with 3-year battery life',
      'Scratch-resistant mineral crystal glass',
      '3ATM water resistance (splash proof)'
    ],
    materials: '316L Stainless steel mesh and case.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: false,
    isNew: false
  },

  // --- BEAUTY & SKINCARE ---
  {
    id: 'prod-beauty-01',
    name: 'Dew Drops Peptidic Glow Serum (30ml)',
    category: 'beauty',
    subcategory: 'Skincare',
    price: 36,
    originalPrice: 42,
    rating: 4.9,
    reviewsCount: 320,
    images: [
      BEAUTY_CATEGORY_IMG,
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-05244510b641?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Cult Favorite',
    colors: [
      { name: 'Rose Dew', hex: '#FADEE2' }
    ],
    sizes: ['30 ml / 1.0 fl oz'],
    description: 'A clinically tested highlighting serum enriched with 5 Multi-Peptides, Niacinamide, and Botanical Hyaluronic Acid. Gives glass skin without sparkle, pore clogging, or greasy finish.',
    details: [
      'Multipurpose: wear under makeup, mix into foundation, or use as skincare',
      'Dermatologist tested, fragrance-free, vegan & cruelty-free',
      'Boosts skin barrier hydration by 140% in one application'
    ],
    materials: 'Key Ingredients: Multi-Peptide Complex, Niacinamide 5%, Centella Asiatica, Watermelon Extract.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: true,
    isNew: false,
    completeTheLookIds: ['prod-beauty-02', 'prod-self-04']
  },
  {
    id: 'prod-beauty-02',
    name: 'Tinted Peptide Glaze Lip Oil',
    category: 'beauty',
    subcategory: 'Lip products',
    price: 22,
    rating: 4.9,
    reviewsCount: 290,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
      BEAUTY_CATEGORY_IMG
    ],
    badge: 'Viral Sensation',
    colors: [
      { name: 'Strawberry Glaze', hex: '#E75874' },
      { name: 'Petal Pink', hex: '#F08A9E' },
      { name: 'Honey Nude', hex: '#D2916F' }
    ],
    sizes: ['10 ml'],
    description: 'A cushiony, non-sticky hybrid lip treatment that drenches lips in high-shine gloss while clinically plumping and nourishing with botanical oils.',
    details: [
      'Jumbo doe-foot applicator hugs lips in one swipe',
      'Infused with Shea Butter, Vitamin E, and Tri-Peptide',
      'Gentle sweet vanilla and strawberry scent'
    ],
    materials: 'Vegan squalane, jojoba seed oil, shea butter, tri-peptide complex.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: true,
    isNew: true
  },
  {
    id: 'prod-beauty-03',
    name: 'Fleur de Pivoine Eau de Parfum (50ml)',
    category: 'beauty',
    subcategory: 'Fragrances',
    price: 78,
    rating: 4.8,
    reviewsCount: 145,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
      BEAUTY_CATEGORY_IMG
    ],
    badge: 'Signature Scent',
    colors: [
      { name: 'Blush Glass', hex: '#F5D7DC' }
    ],
    sizes: ['50 ml / 1.7 oz'],
    description: 'An airy, romantic floral perfume capturing pink peony blossoms, sparkling lychee fruit, morning white tea, and warm amber cedarwood.',
    details: [
      'Top Notes: Sparkling Pink Lychee, Bergamot',
      'Heart Notes: French Peony, Damask Rose Petals, White Tea',
      'Base Notes: Cashmere Woods, Soft White Musk',
      'Concentration: Eau de Parfum with 8+ hour longevity'
    ],
    materials: 'Clean perfumery formulation, phthalate-free, sustainably harvested French botanicals.',
    styleCategory: 'Date Night',
    inStock: true,
    trending: false,
    isNew: true
  },
  {
    id: 'prod-beauty-04',
    name: 'Petal Velvet Whipped Cream Blush',
    category: 'beauty',
    subcategory: 'Face products',
    price: 26,
    rating: 4.8,
    reviewsCount: 110,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Soft Peony', hex: '#EE889F' },
      { name: 'Apricot Sunset', hex: '#F69F80' },
      { name: 'Berry Flush', hex: '#BD4865' }
    ],
    sizes: ['6 g'],
    description: 'Weightless cream-to-powder blush that melts effortlessly into skin with fingers or brush, delivering a natural, lit-from-within wash of color.',
    details: [
      'Buildable soft-focus natural satin finish',
      'Formulated with blurring rice starch and nourishing camellia oil',
      'Sweat and transfer resistant'
    ],
    materials: 'Camellia seed oil, squalane, natural mineral pigments.',
    styleCategory: 'College Chic',
    inStock: true,
    trending: true,
    isNew: false
  },

  // --- SELF CARE & LIFESTYLE ---
  {
    id: 'prod-self-01',
    name: 'Linen Bound Daily Reflection & Manifest Journal',
    category: 'selfcare',
    subcategory: 'Journals',
    price: 32,
    rating: 4.9,
    reviewsCount: 178,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Bestseller',
    colors: [
      { name: 'Dusty Rose Linen', hex: '#DDB6BC' },
      { name: 'Sage Green', hex: '#CAD2C5' },
      { name: 'Champagne Sand', hex: '#EAE3D2' }
    ],
    sizes: ['Standard A5 (180 pages)'],
    description: 'An undated guided daily journal designed to build mindful habits, celebrate daily gratitude, and map out your goals with intention and calm.',
    details: [
      '180 undated daily pages with inspiring morning & evening prompts',
      'Heavyweight 120gsm bleed-proof bamboo paper',
      'Hardcover woven Belgian linen with gold foil embossed title',
      'Two silk ribbon page markers and expandable back pocket'
    ],
    materials: 'FSC-certified acid-free paper, 100% natural linen cover.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: true,
    isNew: false,
    completeTheLookIds: ['prod-self-02', 'prod-self-03']
  },
  {
    id: 'prod-self-02',
    name: 'Wild Rose & Santal Hand-Poured Soy Candle',
    category: 'selfcare',
    subcategory: 'Candles',
    price: 34,
    rating: 4.9,
    reviewsCount: 154,
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Cozy Room',
    colors: [
      { name: 'Blush Ceramic', hex: '#F1D6DC' }
    ],
    sizes: ['8.5 oz (50+ hr burn)'],
    description: 'Clean-burning 100% soy wax candle housed in a reusable artisan matte blush ceramic vessel. Crackling FSC-certified natural wooden wick.',
    details: [
      'Fragrance notes: English garden rose, sandalwood, pink peppercorn, and warm amber',
      'Phthalate-free, non-toxic essential oil fragrance blends',
      'Clean 50+ hours continuous burn time'
    ],
    materials: '100% Natural US-grown Soy Wax with crackling wood wick.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: false,
    isNew: false
  },
  {
    id: 'prod-self-03',
    name: 'Rotating 360 Acrylic Vanity Organizer',
    category: 'selfcare',
    subcategory: 'Makeup organizers',
    price: 38,
    originalPrice: 48,
    rating: 4.8,
    reviewsCount: 134,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Crystal Clear', hex: '#F0F0F0' },
      { name: 'Rose Tinted', hex: '#F9E2E6' }
    ],
    sizes: ['12" H x 9" W'],
    description: 'A whisper-quiet 360-degree rotating cosmetic tower with 6 adjustable tray tiers that instantly declutters perfumes, serums, lipsticks, and brushes.',
    details: [
      'Smooth 360-degree silent ball-bearing rotation',
      '6 customizable adjustable tier heights',
      'High-impact shatterproof BPA-free acrylic'
    ],
    materials: 'Shatter-resistant crystal acrylic.',
    styleCategory: 'Everyday Girl',
    inStock: true,
    trending: true,
    isNew: true
  },
  {
    id: 'prod-self-04',
    name: 'Genuine Rose Quartz Sculpting Facial Gua Sha',
    category: 'selfcare',
    subcategory: 'Self-care products',
    price: 24,
    rating: 4.9,
    reviewsCount: 220,
    images: [
      BEAUTY_CATEGORY_IMG,
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Beauty Tool',
    colors: [
      { name: 'Natural Rose Quartz', hex: '#F3CAD1' }
    ],
    sizes: ['Standard Palm Cut'],
    description: 'Carved from 100% genuine Madagascar rose quartz gemstone. Specifically shaped with ergonomic curves to sculpt jawlines, relieve facial tension, and boost lymphatic drainage.',
    details: [
      'Sustainably sourced natural grade-A rose quartz',
      'Comfort-grip ergonomic heart-shaped edges',
      'Comes with soft travel pouch and guided massage illustration card'
    ],
    materials: '100% Natural Brazilian Rose Quartz.',
    styleCategory: 'Minimal & Elegant',
    inStock: true,
    trending: false,
    isNew: false
  },
  {
    id: 'prod-self-05',
    name: 'Pastel Aesthetic Gel Pen Set (6-Pack)',
    category: 'selfcare',
    subcategory: 'Stationery',
    price: 18,
    rating: 4.8,
    reviewsCount: 84,
    images: [
      'https://images.unsplash.com/photo-1585336261026-6950269f8263?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Rose & Pastel Palette', hex: '#EAC3C9' }
    ],
    sizes: ['0.5mm Quick-Dry'],
    description: 'Velvety matte-finish gel ink pens with quick-drying smudge-free black ink and a silent retractable click mechanism.',
    details: [
      '6 aesthetic muted pastel barrel tones',
      'Smooth 0.5mm fine tip Japanese gel ink',
      'Comfort-grip silicone barrel for fatigue-free writing'
    ],
    materials: 'Soft-touch silicone barrel, archival fade-resistant ink.',
    styleCategory: 'College Chic',
    inStock: true,
    trending: false,
    isNew: true
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'clothing',
    name: 'Clothing',
    subtitle: 'Dresses, Co-ords & Everyday Chic',
    itemCount: '480+ styles',
    image: FASHION_CATEGORY_IMG,
    subcategories: ['Dresses', 'Tops & T-Shirts', 'Bottoms', 'Co-ords', 'Ethnic Wear', 'Loungewear']
  },
  {
    id: 'footwear',
    name: 'Footwear',
    subtitle: 'Kitten Heels, Ballet Flats & Sneakers',
    itemCount: '190+ pairs',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Sneakers', 'Heels', 'Flats', 'Sandals', 'Boots', 'Loafers']
  },
  {
    id: 'bags',
    name: 'Bags',
    subtitle: 'Crescent Shoulder, Totes & Crossbody',
    itemCount: '140+ designs',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Handbags', 'Shoulder bags', 'Crossbody bags', 'Tote bags', 'Mini bags']
  },
  {
    id: 'jewellery',
    name: 'Jewellery',
    subtitle: 'Freshwater Pearls & 18k Vermeil',
    itemCount: '260+ pieces',
    image: ACCESSORIES_CATEGORY_IMG,
    subcategories: ['Earrings', 'Necklaces', 'Bracelets', 'Rings', 'Anklets']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    subtitle: 'Hair Bows, Silk Scrunchies & Watches',
    itemCount: '210+ finds',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Hair Accessories', 'Watches', 'Sunglasses', 'Hair clips', 'Headbands']
  },
  {
    id: 'beauty',
    name: 'Beauty',
    subtitle: 'Peptide Glow, Lip Oils & Parfums',
    itemCount: '175+ formulations',
    image: BEAUTY_CATEGORY_IMG,
    subcategories: ['Skincare', 'Lip products', 'Face products', 'Fragrances', 'Haircare']
  },
  {
    id: 'selfcare',
    name: 'Self Care',
    subtitle: 'Mindful Journals, Candles & Lifestyle',
    itemCount: '120+ rituals',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Journals', 'Candles', 'Makeup organizers', 'Self-care products', 'Stationery']
  }
];

export const STYLE_MOODBOARDS = [
  {
    id: 'Everyday Girl',
    title: 'Everyday Girl',
    subtitle: 'Effortless daytime neutrals, cozy knits & comfortable flats',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'College Chic',
    title: 'College Chic',
    subtitle: 'Structured totes, oversized shirts & clean court sneakers',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Date Night',
    title: 'Date Night',
    subtitle: 'Silky slip silhouettes, kitten heels & romantic rose scents',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Party Ready',
    title: 'Party Ready',
    subtitle: 'Gleaming tennis stones, mini clutches & dewy cheeks',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Minimal & Elegant',
    title: 'Minimal & Elegant',
    subtitle: 'Architectural linen, pearl chokers & clean monochrome tones',
    image: FASHION_CATEGORY_IMG
  },
  {
    id: 'Traditional Glow',
    title: 'Traditional Glow',
    subtitle: 'Artisanal resham embroidery, soft organza & festive grace',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  }
];
