import HeroBanner from '@/components/common/HeroBanner';
import HeroBannerCarousel from '@/components/common/HeroBannerCarousel';
import FeaturedCategories from '@/components/common/FeaturedCategories';
import TrendingProducts from '@/components/product/TrendingProducts';
import NewsletterSubscription from '@/components/common/NewsletterSubscription';
import Footer from '@/components/common/Footer';
import ErrorBoundary, { ComponentErrorFallback } from '@/components/common/ErrorBoundary';
import { EmptyBanner } from '@/components/common/EmptyState';
import {
  getActiveBanners,
  getPrimaryBanner,
  getMainCategories,
  getTrendingProducts,
  mockCompanyInfo,
  mockFooterLinks,
  mockSocialLinks,
} from '@/data';

/**
 * Landing Page - Main Store Homepage
 * 
 * Server Component that composes all landing page sections:
 * - Hero Banner with promotional content
 * - Featured Categories for easy navigation
 * - Trending Products showcase
 * - Newsletter Subscription form
 * - Footer with links and information
 * 
 * Each section is wrapped with ErrorBoundary for graceful error handling.
 * 
 * Requirements: 10.1, 10.4, 7.2
 */
export default function HomePage() {
  // Fetch mock data (in production, this would be from API/database)
  const activeBanners = getActiveBanners();
  const primaryBanner = getPrimaryBanner();
  const categories = getMainCategories();
  const trendingProducts = getTrendingProducts(8);

  return (
    <div className="min-h-screen">
      <main role="main">
        {/* Hero Banner Section - Use carousel if multiple banners, single banner otherwise */}
        <ErrorBoundary fallback={<ComponentErrorFallback componentName="Hero Banner" />}>
          {activeBanners.length > 1 ? (
            <HeroBannerCarousel banners={activeBanners} autoRotate={true} />
          ) : primaryBanner ? (
            <HeroBanner
              title={primaryBanner.title}
              subtitle={primaryBanner.subtitle}
              ctaText={primaryBanner.ctaText}
              ctaLink={primaryBanner.ctaLink}
              backgroundImage={primaryBanner.backgroundImage}
            />
          ) : (
            <EmptyBanner />
          )}
        </ErrorBoundary>

        {/* Featured Categories Section */}
        <section aria-label="Featured categories">
          <ErrorBoundary fallback={<ComponentErrorFallback componentName="Featured Categories" />}>
            <FeaturedCategories categories={categories} />
          </ErrorBoundary>
        </section>

        {/* Trending Products Section */}
        <section aria-label="Trending products">
          <ErrorBoundary fallback={<ComponentErrorFallback componentName="Trending Products" />}>
            <TrendingProducts products={trendingProducts} title="Trending Products" />
          </ErrorBoundary>
        </section>

        {/* Newsletter Subscription Section */}
        <section aria-label="Newsletter subscription">
          <ErrorBoundary fallback={<ComponentErrorFallback componentName="Newsletter Subscription" />}>
            <NewsletterSubscription
              title="Stay Updated"
              subtitle="Subscribe to our newsletter for the latest products and exclusive offers"
            />
          </ErrorBoundary>
        </section>
      </main>

      {/* Footer */}
      <ErrorBoundary fallback={<ComponentErrorFallback componentName="Footer" />}>
        <Footer
          companyInfo={mockCompanyInfo}
          links={mockFooterLinks}
          socialMedia={mockSocialLinks}
        />
      </ErrorBoundary>
    </div>
  );
}
