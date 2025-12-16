import Link from 'next/link';
import { TrendingProductsProps } from '@/types/landing-page';
import ProductCard from './ProductCard';
import { EmptyProducts } from '@/components/common/EmptyState';

/**
 * TrendingProducts Component
 * 
 * Displays a section of trending/featured products in a responsive grid.
 * Shows 4-8 products (or fewer if less available).
 * 
 * Requirements: 2.1, 2.2
 */
export default function TrendingProducts({ 
  products, 
  title = 'Trending Products' 
}: TrendingProductsProps) {
  // Display 4-8 products, or all if fewer than 4
  const displayProducts = products.slice(0, Math.min(products.length, 8));
  
  // Show empty state if no products
  if (displayProducts.length === 0) {
    return <EmptyProducts />;
  }

  return (
    <section 
      className="py-12 px-4 md:px-6 lg:px-8"
      aria-labelledby="trending-products-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 
            id="trending-products-heading"
            className="text-3xl font-bold text-gray-900"
          >
            {title}
          </h2>
          
          {/* Optional View All Link */}
          {products.length > 8 && (
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              aria-label="View all products"
            >
              View All →
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          role="list"
        >
          {displayProducts.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} showQuickView={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
