/**
 * Example usage of ProductCard component
 * This file demonstrates how to use the ProductCard component
 */

import ProductCard from './ProductCard';
import { mockProducts } from '@/data/mock-products';

export default function ProductCardExample() {
  // Example 1: Basic product card
  const basicProduct = mockProducts[0];

  // Example 2: Product with discount
  const discountProduct = mockProducts[1];

  // Example 3: Product with quick view
  const quickViewProduct = mockProducts[2];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">ProductCard Component Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Product Card */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Product</h2>
          <ProductCard product={basicProduct} />
        </div>

        {/* Product with Discount */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Product with Discount</h2>
          <ProductCard product={discountProduct} />
        </div>

        {/* Product with Quick View */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Product with Quick View</h2>
          <ProductCard product={quickViewProduct} showQuickView={true} />
        </div>
      </div>

      {/* Grid of all products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">All Products Grid</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} showQuickView={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
