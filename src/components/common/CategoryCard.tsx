'use client';

import Link from 'next/link';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { Category } from '@/types/landing-page';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

/**
 * CategoryCard Component Props
 */
interface CategoryCardProps {
  category: Category;
}

/**
 * CategoryCard Component
 * 
 * Displays a category with image, name, and item count.
 * Includes hover effects and links to category page.
 * 
 * Requirements: 3.3, 3.4, 10.3, 10.5
 */
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article 
      className="group relative flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      aria-label={`Category: ${category.name}`}
    >
      {/* Category Link Wrapper */}
      <Link 
        href={`/categories/${category.slug}`}
        className="relative aspect-[4/3] overflow-hidden bg-gray-100"
        aria-label={`Browse ${category.name} category`}
      >
        {/* Category Image */}
        <ImageWithFallback
          src={category.image || PLACEHOLDER_IMAGES.FALLBACK}
          fallbackSrc={PLACEHOLDER_IMAGES.FALLBACK}
          alt={`${category.name} category`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
      </Link>

      {/* Category Info */}
      <div className="p-4 flex flex-col items-center text-center">
        {/* Category Name */}
        <Link 
          href={`/categories/${category.slug}`}
          className="hover:text-blue-600 transition-colors"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {category.name}
          </h3>
        </Link>

        {/* Item Count */}
        <p className="text-sm text-gray-600">
          {category.itemCount} {category.itemCount === 1 ? 'item' : 'items'}
        </p>
      </div>
    </article>
  );
}
