import Link from 'next/link';
import { PromotionsProps, Promotion } from '@/types/landing-page';

/**
 * Promotions Component
 * 
 * Displays active promotions with title, discount details, validity period, and CTA.
 * Conditionally renders only when active promotions exist.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5
 */
export default function Promotions({ promotions }: PromotionsProps) {
  // Conditional rendering: only show if promotions exist
  if (!promotions || promotions.length === 0) {
    return null;
  }

  /**
   * Format discount text based on type
   */
  const formatDiscount = (promotion: Promotion): string => {
    if (promotion.discountType === 'percentage') {
      return `${promotion.discountValue}% OFF`;
    }
    return `$${promotion.discountValue} OFF`;
  };

  /**
   * Format validity period
   */
  const formatValidityPeriod = (validFrom: Date, validUntil: Date): string => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    const fromStr = validFrom.toLocaleDateString('en-US', options);
    const untilStr = validUntil.toLocaleDateString('en-US', options);
    return `Valid: ${fromStr} - ${untilStr}`;
  };

  return (
    <section 
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50"
      aria-labelledby="promotions-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 
            id="promotions-heading"
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Special Offers
          </h2>
          <p className="text-gray-600">
            Don&apos;t miss out on these amazing deals
          </p>
        </div>

        {/* Promotions Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {promotions.map((promotion) => (
            <div 
              key={promotion.id}
              role="listitem"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Discount Badge */}
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {formatDiscount(promotion)}
                </div>

                {/* Promotion Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {promotion.title}
                </h3>

                {/* Promotion Description */}
                <p className="text-gray-600 mb-4">
                  {promotion.description}
                </p>

                {/* Validity Period */}
                <p className="text-sm text-gray-500 mb-6">
                  {formatValidityPeriod(promotion.validFrom, promotion.validUntil)}
                </p>

                {/* CTA Button */}
                <Link
                  href={promotion.ctaLink}
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                  aria-label={`${promotion.ctaText} - ${promotion.title}`}
                >
                  {promotion.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
