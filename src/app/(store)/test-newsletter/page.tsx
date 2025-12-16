import NewsletterSubscription from '@/components/common/NewsletterSubscription';

/**
 * Test page for NewsletterSubscription component
 */
export default function TestNewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Newsletter Subscription Component Test
        </h1>
        
        {/* Default props */}
        <NewsletterSubscription />
        
        {/* Custom props */}
        <div className="mt-8">
          <NewsletterSubscription
            title="Join Our Community"
            subtitle="Get exclusive deals and early access to new collections"
          />
        </div>
      </div>
    </div>
  );
}
