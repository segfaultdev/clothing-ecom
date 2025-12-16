import { 
  HeroBannerSkeleton, 
  FeaturedCategoriesSkeleton, 
  TrendingProductsSkeleton 
} from '@/components/common/LoadingSkeleton';

/**
 * Loading Component for Store Pages
 * 
 * Displays skeleton loaders while the landing page content is being fetched.
 * Provides better perceived performance with visual feedback.
 * 
 * Requirements: 7.2
 */
export default function StoreLoading() {
  return (
    <div className="min-h-screen">
      <main role="main">
        {/* Hero Banner Skeleton */}
        <HeroBannerSkeleton />

        {/* Featured Categories Skeleton */}
        <FeaturedCategoriesSkeleton />

        {/* Trending Products Skeleton */}
        <TrendingProductsSkeleton />

        {/* Newsletter Section - Simple placeholder */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse" />
            <div className="h-12 bg-gray-200 rounded w-80 mx-auto animate-pulse" />
          </div>
        </section>
      </main>
    </div>
  );
}
