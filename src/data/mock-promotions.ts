import { Promotion } from '@/types/landing-page';

/**
 * Mock promotions data for development and testing
 */
export const mockPromotions: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Summer Sale',
    description: 'Get 30% off on all summer collection items',
    discountType: 'percentage',
    discountValue: 30,
    validFrom: new Date('2024-06-01'),
    validUntil: new Date('2024-08-31'),
    ctaText: 'Shop Summer Sale',
    ctaLink: '/products?promotion=summer-sale',
    active: true,
  },
  {
    id: 'promo-2',
    title: 'New Customer Offer',
    description: 'Save $20 on your first order over $100',
    discountType: 'fixed',
    discountValue: 20,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2024-12-31'),
    ctaText: 'Claim Your Discount',
    ctaLink: '/products?promotion=new-customer',
    active: true,
  },
  {
    id: 'promo-3',
    title: 'Flash Sale',
    description: 'Limited time: 50% off selected items',
    discountType: 'percentage',
    discountValue: 50,
    validFrom: new Date('2024-07-15'),
    validUntil: new Date('2024-07-17'),
    ctaText: 'Shop Flash Sale',
    ctaLink: '/products?promotion=flash-sale',
    active: true,
  },
];

/**
 * Get active promotions
 */
export function getActivePromotions(): Promotion[] {
  const now = new Date();
  return mockPromotions.filter(
    (promo) =>
      promo.active &&
      promo.validFrom <= now &&
      promo.validUntil >= now
  );
}
