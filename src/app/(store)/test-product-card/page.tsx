/**
 * Test page for ProductCard component
 * Navigate to /test-product-card to view
 */

import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/data/mock-products';

export default function TestProductCardPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">ProductCard Component Test</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Individual Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Product */}
          <div>
            <h3 className="text-lg font-medium mb-2">Basic Product</h3>
            <ProductCard product={mockProducts[0]} />
          </div>

          {/* Product with Discount */}
          <div>
            <h3 className="text-lg font-medium mb-2">With Discount</h3>
            <ProductCard product={mockProducts[1]} />
          </div>

          {/* Product with Quick View */}
          <div>
            <h3 className="text-lg font-medium mb-2">With Quick View</h3>
            <ProductCard product={mockProducts[2]} showQuickView={true} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Full Product Grid</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showQuickView={true} 
            />
          ))}
        </div>
      </section>

      <section className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Component Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Next.js Image optimization with responsive sizes</li>
          <li>✅ Hover effects (image zoom, shadow increase)</li>
          <li>✅ Discount badge with automatic percentage calculation</li>
          <li>✅ Links to product detail pages (/products/[slug])</li>
          <li>✅ Accessibility attributes (ARIA labels, alt text)</li>
          <li>✅ Responsive grid layout</li>
          <li>✅ Optional quick view button</li>
          <li>✅ Out of stock indicator (if applicable)</li>
        </ul>
      </section>
    </main>
  );
}
