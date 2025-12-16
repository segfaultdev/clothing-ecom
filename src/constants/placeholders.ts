/**
 * Placeholder images and constants for development
 */

// Placeholder image URLs using placeholder services
export const PLACEHOLDER_IMAGES = {
  // Product placeholders
  PRODUCT_DEFAULT: 'https://placehold.co/600x800/e5e7eb/6b7280?text=Product',
  PRODUCT_TSHIRT: 'https://placehold.co/600x800/dbeafe/3b82f6?text=T-Shirt',
  PRODUCT_JEANS: 'https://placehold.co/600x800/ddd6fe/8b5cf6?text=Jeans',
  PRODUCT_DRESS: 'https://placehold.co/600x800/fce7f3/ec4899?text=Dress',
  PRODUCT_JACKET: 'https://placehold.co/600x800/fed7aa/f97316?text=Jacket',
  PRODUCT_SHOES: 'https://placehold.co/600x800/fef3c7/eab308?text=Shoes',
  PRODUCT_ACCESSORIES: 'https://placehold.co/600x800/d1fae5/10b981?text=Accessories',

  // Category placeholders
  CATEGORY_MEN: 'https://placehold.co/800x600/dbeafe/3b82f6?text=Men',
  CATEGORY_WOMEN: 'https://placehold.co/800x600/fce7f3/ec4899?text=Women',
  CATEGORY_KIDS: 'https://placehold.co/800x600/fef3c7/eab308?text=Kids',
  CATEGORY_ACCESSORIES: 'https://placehold.co/800x600/d1fae5/10b981?text=Accessories',

  // Banner placeholders
  BANNER_HERO: 'https://placehold.co/1920x800/1e293b/f1f5f9?text=Hero+Banner',
  BANNER_SALE: 'https://placehold.co/1920x800/dc2626/fef2f2?text=Sale+Banner',
  BANNER_NEW: 'https://placehold.co/1920x800/7c3aed/f5f3ff?text=New+Arrivals',

  // Fallback image
  FALLBACK: 'https://placehold.co/600x600/e5e7eb/9ca3af?text=Image+Not+Found',
} as const;

// Image dimensions for Next.js Image component
export const IMAGE_SIZES = {
  PRODUCT_CARD: {
    width: 600,
    height: 800,
  },
  CATEGORY_CARD: {
    width: 800,
    height: 600,
  },
  HERO_BANNER: {
    width: 1920,
    height: 800,
  },
} as const;
