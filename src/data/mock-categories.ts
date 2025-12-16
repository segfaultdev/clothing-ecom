/**
 * Mock category data for development
 */

import { Category } from '@/types/landing-page';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

export const mockCategories: Category[] = [
  {
    id: 'men',
    name: 'Men',
    slug: 'men',
    description: 'Clothing and accessories for men',
    image: PLACEHOLDER_IMAGES.CATEGORY_MEN,
    itemCount: 156,
    order: 1,
  },
  {
    id: 'women',
    name: 'Women',
    slug: 'women',
    description: 'Clothing and accessories for women',
    image: PLACEHOLDER_IMAGES.CATEGORY_WOMEN,
    itemCount: 243,
    order: 2,
  },
  {
    id: 'kids',
    name: 'Kids',
    slug: 'kids',
    description: 'Clothing for children',
    image: PLACEHOLDER_IMAGES.CATEGORY_KIDS,
    itemCount: 89,
    order: 3,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Bags, jewelry, and other accessories',
    image: PLACEHOLDER_IMAGES.CATEGORY_ACCESSORIES,
    itemCount: 67,
    order: 4,
  },
];

// Helper function to get all main categories
export function getMainCategories(): Category[] {
  return mockCategories.filter(c => !c.parentId).sort((a, b) => a.order - b.order);
}
