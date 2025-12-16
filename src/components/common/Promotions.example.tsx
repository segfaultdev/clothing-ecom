import Promotions from './Promotions';
import { Promotion } from '@/types/landing-page';

/**
 * Example usage of the Promotions component
 * This file demonstrates how to use the component with sample data
 */

// Example 1: Active promotions
const activePromotions: Promotion[] = [
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
];

// Example 2: No promotions (component should not render)
const noPromotions: Promotion[] = [];

export default function PromotionsExample() {
  return (
    <div className="space-y-8">
      {/* Example with active promotions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">With Active Promotions</h2>
        <Promotions promotions={activePromotions} />
      </div>

      {/* Example with no promotions (should render nothing) */}
      <div>
        <h2 className="text-2xl font-bold mb-4">With No Promotions (Hidden)</h2>
        <Promotions promotions={noPromotions} />
        <p className="text-gray-500 italic">
          The promotions section is hidden when no promotions exist
        </p>
      </div>
    </div>
  );
}
