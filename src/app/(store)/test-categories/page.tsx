import FeaturedCategories from '@/components/common/FeaturedCategories';
import { mockCategories } from '@/data/mock-categories';

/**
 * Test page for FeaturedCategories component
 */
export default function TestCategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Featured Categories Test
        </h1>
        
        <FeaturedCategories categories={mockCategories} />
      </div>
    </main>
  );
}
