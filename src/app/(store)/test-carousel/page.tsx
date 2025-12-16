import HeroBannerCarousel from '@/components/common/HeroBannerCarousel';
import { getActiveBanners } from '@/data';

/**
 * Test page for HeroBannerCarousel component
 * 
 * Demonstrates the carousel functionality with multiple banners,
 * auto-rotation, navigation controls, and keyboard accessibility.
 */
export default function TestCarouselPage() {
  const banners = getActiveBanners();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Hero Banner Carousel Test</h1>
        <p className="text-gray-600 mb-8">
          This page demonstrates the hero banner carousel with auto-rotation,
          navigation arrows, dots, and keyboard accessibility (use arrow keys).
        </p>
      </div>

      <HeroBannerCarousel banners={banners} autoRotate={true} rotationInterval={5000} />

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Auto-rotation every 5 seconds</li>
            <li>✓ Pause on hover</li>
            <li>✓ Navigation arrows (left/right)</li>
            <li>✓ Navigation dots at bottom</li>
            <li>✓ Keyboard navigation (Arrow Left/Right keys)</li>
            <li>✓ Smooth fade transitions</li>
            <li>✓ Accessible with ARIA labels and screen reader support</li>
            <li>✓ Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
