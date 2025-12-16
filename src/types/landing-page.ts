/**
 * Type definitions for Landing Page UI components
 */

// Product Model
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  categoryId: string;
  inStock: boolean;
  featured?: boolean;
  trending?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Category Model
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  itemCount: number;
  parentId?: string;
  order: number;
}

// Banner Model
export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  active: boolean;
  order: number;
  startDate?: Date;
  endDate?: Date;
}

// Newsletter Subscription Model
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  active: boolean;
}

// Promotion Model
export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  validFrom: Date;
  validUntil: Date;
  ctaText: string;
  ctaLink: string;
  active: boolean;
}

// Component Props Interfaces

export interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  autoRotate?: boolean;
  banners?: Banner[];
}

export interface FeaturedCategoriesProps {
  categories: Category[];
}

export interface TrendingProductsProps {
  products: Product[];
  title?: string;
}

export interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
}

export interface NewsletterSubscriptionProps {
  title?: string;
  subtitle?: string;
}

export interface PromotionsProps {
  promotions: Promotion[];
}

export interface FooterProps {
  companyInfo: CompanyInfo;
  links: FooterLinks;
  socialMedia: SocialLink[];
}

export interface CompanyInfo {
  name: string;
  description: string;
  logo?: string;
}

export interface FooterLinks {
  shop: Link[];
  company: Link[];
  support: Link[];
  legal: Link[];
}

export interface Link {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
