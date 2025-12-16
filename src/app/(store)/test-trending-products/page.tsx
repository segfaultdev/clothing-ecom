import TrendingProducts from '@/components/product/TrendingProducts';
import { getTrendingProducts } from '@/data/mock-products';

/**
 * Test page for TrendingProducts component
 */
export default function TestTrendingProductsPage() {
  const products = getTrendingProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          TrendingProducts Component Test
        </h1>
        
        {/* Test with all products */}
        <TrendingProducts products={products} />
        
        {/* Test with fewer products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            With 3 Products (fewer than 4)
          </h2>
          <TrendingProducts 
            products={products.slice(0, 3)} 
            title="Limited Selection"
          />
        </div>
        
        {/* Test with empty products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            With No Products (should not render)
          </h2>
          <TrendingProducts products={[]} />
          <p className="text-center text-gray-500">
            (Component should not render above)
          </p>
        </div>
      </div>
    </div>
  );
}
