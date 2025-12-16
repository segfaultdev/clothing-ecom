/**
 * LoadingSkeleton Components
 * 
 * Reusable skeleton loading components for products, categories, and other content.
 * Provides visual feedback while data is loading.
 * 
 * Requirements: 7.2
 */

/**
 * ProductCardSkeleton - Loading placeholder for ProductCard
 */
export function ProductCardSkeleton() {
  return (
    <div className="group relative flex flex-col bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-[3/4] bg-gray-200" />
      
      {/* Content Skeleton */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        
        {/* Category */}
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        
        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-1/4 mt-2" />
      </div>
    </div>
  );
}

/**
 * CategoryCardSkeleton - Loading placeholder for CategoryCard
 */
export function CategoryCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-[4/3] bg-gray-200" />
      
      {/* Overlay Skeleton */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <div className="h-6 bg-gray-300 rounded w-2/3 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/3" />
      </div>
    </div>
  );
}

/**
 * TrendingProductsSkeleton - Loading state for entire TrendingProducts section
 */
export function TrendingProductsSkeleton() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8" aria-label="Loading trending products">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * FeaturedCategoriesSkeleton - Loading state for FeaturedCategories section
 */
export function FeaturedCategoriesSkeleton() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Loading categories">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-2 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
        </div>

        {/* Categories Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <CategoryCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * HeroBannerSkeleton - Loading state for HeroBanner
 */
export function HeroBannerSkeleton() {
  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse"
      aria-label="Loading hero banner"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <div className="h-12 bg-gray-300 rounded w-96 mx-auto" />
          <div className="h-6 bg-gray-300 rounded w-64 mx-auto" />
          <div className="h-12 bg-gray-300 rounded w-32 mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
}
