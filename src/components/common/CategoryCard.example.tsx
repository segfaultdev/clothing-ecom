/**
 * Example usage of CategoryCard component
 * 
 * This file demonstrates how to use the CategoryCard component
 * with sample data.
 */

import CategoryCard from './CategoryCard';
import { Category } from '@/types/landing-page';

// Example category data
const exampleCategory: Category = {
  id: 'men',
  name: 'Men',
  slug: 'men',
  description: 'Clothing and accessories for men',
  image: 'https://placehold.co/800x600/dbeafe/3b82f6?text=Men',
  itemCount: 156,
  order: 1,
};

/**
 * Example: Basic CategoryCard usage
 */
export function BasicCategoryCardExample() {
  return <CategoryCard category={exampleCategory} />;
}

/**
 * Example: CategoryCard with different item counts
 */
export function CategoryCardVariationsExample() {
  const categories: Category[] = [
    { ...exampleCategory, id: '1', name: 'Men', itemCount: 156 },
    { ...exampleCategory, id: '2', name: 'Women', itemCount: 243 },
    { ...exampleCategory, id: '3', name: 'Kids', itemCount: 89 },
    { ...exampleCategory, id: '4', name: 'Accessories', itemCount: 67 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
