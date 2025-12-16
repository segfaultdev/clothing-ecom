import { FeaturedCategoriesProps } from '@/types/landing-page';
import CategoryCard from './CategoryCard';
import { EmptyCategories } from './EmptyState';

/**
 * FeaturedCategories Component
 * 
 * Displays a responsive grid of category cards for easy navigation.
 * Shows all main clothing categories (Men, Women, Kids, Accessories).
 * 
 * Requirements: 3.1, 3.2, 3.5, 10.1, 10.4
 */
export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  // Show empty state if no categories
  if (!categories || categories.length === 0) {
    return <EmptyCategories />;
  }

  return (
    <section 
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="featured-categories-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 
            id="featured-categories-heading"
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Explore our collection of clothing and accessories
          </p>
        </div>

        {/* Categories Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {categories.map((category) => (
            <div key={category.id} role="listitem">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
