'use client';

import Link from 'next/link';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { ProductCardProps } from '@/types/landing-page';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

/**
 * ProductCard Component
 * 
 * Displays a product with image, name, price, and optional discount badge.
 * Includes hover effects and links to product detail page.
 * 
 * Requirements: 2.3, 2.4, 2.5, 10.3, 10.5
 */
export default function ProductCard({ product, showQuickView = false }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <article 
      className="group relative flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      aria-label={`Product: ${product.name}`}
    >
      {/* Product Image with Link */}
      <Link 
        href={`/products/${product.slug}`}
        className="relative aspect-[3/4] overflow-hidden bg-gray-100"
        aria-label={`View details for ${product.name}`}
      >
        <ImageWithFallback
          src={product.image || PLACEHOLDER_IMAGES.PRODUCT_DEFAULT}
          fallbackSrc={PLACEHOLDER_IMAGES.PRODUCT_DEFAULT}
          alt={`${product.name} - ${product.category}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div 
            className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded"
            aria-label={`${discountPercentage}% discount`}
          >
            -{discountPercentage}%
          </div>
        )}

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <Link 
          href={`/products/${product.slug}`}
          className="hover:text-blue-600 transition-colors"
        >
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice!.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quick View Button (Optional) */}
        {showQuickView && product.inStock && (
          <button
            className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label={`Quick view ${product.name}`}
            onClick={(e) => {
              e.preventDefault();
              // Quick view functionality to be implemented
              console.log('Quick view:', product.id);
            }}
          >
            Quick View
          </button>
        )}
      </div>
    </article>
  );
}
