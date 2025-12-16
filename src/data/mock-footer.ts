/**
 * Mock footer data for development
 */

import { CompanyInfo, FooterLinks, SocialLink } from '@/types/landing-page';

export const mockCompanyInfo: CompanyInfo = {
  name: 'StyleHub',
  description: 'Your destination for quality fashion and timeless style.',
};

export const mockFooterLinks: FooterLinks = {
  shop: [
    { label: 'New Arrivals', href: '/products?new=true' },
    { label: 'Best Sellers', href: '/products?bestsellers=true' },
    { label: 'Sale', href: '/products?sale=true' },
    { label: 'All Products', href: '/products' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '/press' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

export const mockSocialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/stylehub',
    icon: 'facebook',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/stylehub',
    icon: 'instagram',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/stylehub',
    icon: 'twitter',
  },
  {
    platform: 'Pinterest',
    url: 'https://pinterest.com/stylehub',
    icon: 'pinterest',
  },
];
