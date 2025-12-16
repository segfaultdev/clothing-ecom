import Promotions from '@/components/common/Promotions';
import { mockPromotions, getActivePromotions } from '@/data';

/**
 * Test page for Promotions component
 */
export default function TestPromotionsPage() {
  const activePromotions = getActivePromotions();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Promotions Component Test
        </h1>

        {/* Test with active promotions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Active Promotions</h2>
          <Promotions promotions={activePromotions} />
        </div>

        {/* Test with all promotions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">All Promotions</h2>
          <Promotions promotions={mockPromotions} />
        </div>

        {/* Test with empty array */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">No Promotions (Should be hidden)</h2>
          <Promotions promotions={[]} />
          <p className="text-gray-600 italic mt-4">
            ↑ The promotions section should not render when the array is empty
          </p>
        </div>
      </div>
    </div>
  );
}
