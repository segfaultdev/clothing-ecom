/**
 * Mock banner data for development
 */

import { Banner } from '@/types/landing-page';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

export const mockBanners: Banner[] = [
  {
    id: 'banner-1',
    title: 'Summer Collection 2024',
    subtitle: 'Discover the latest trends in summer fashion',
    ctaText: 'Shop Now',
    ctaLink: '/products?collection=summer-2024',
    backgroundImage: PLACEHOLDER_IMAGES.BANNER_HERO,
    active: true,
    order: 1,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-31'),
  },
  {
    id: 'banner-2',
    title: 'Up to 50% Off',
    subtitle: 'End of season sale - Limited time only',
    ctaText: 'View Deals',
    ctaLink: '/products?sale=true',
    backgroundImage: PLACEHOLDER_IMAGES.BANNER_SALE,
    active: true,
    order: 2,
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
  },
  {
    id: 'banner-3',
    title: 'New Arrivals',
    subtitle: 'Fresh styles just landed',
    ctaText: 'Explore New',
    ctaLink: '/products?new=true',
    backgroundImage: PLACEHOLDER_IMAGES.BANNER_NEW,
    active: true,
    order: 3,
  },
];

// Helper function to get active banners
export function getActiveBanners(): Banner[] {
  const now = new Date();
  return mockBanners
    .filter(banner => {
      if (!banner.active) return false;
      if (banner.startDate && banner.startDate > now) return false;
      if (banner.endDate && banner.endDate < now) return false;
      return true;
    })
    .sort((a, b) => a.order - b.order);
}

// Helper function to get primary banner
export function getPrimaryBanner(): Banner | undefined {
  const activeBanners = getActiveBanners();
  return activeBanners.length > 0 ? activeBanners[0] : undefined;
}
