'use client';

import Link from 'next/link';
import ImageWithFallback from './ImageWithFallback';
import { HeroBannerProps } from '@/types/landing-page';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

/**
 * HeroBanner Component
 * 
 * Displays a large promotional banner with headline, subheadline, and CTA button.
 * Supports background image optimization via Next.js Image component.
 * 
 * @param title - Main headline text
 * @param subtitle - Supporting subheadline text
 * @param ctaText - Call-to-action button text
 * @param ctaLink - URL for the CTA button
 * @param backgroundImage - URL of the background image
 */
export default function HeroBanner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      aria-label="Hero banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={backgroundImage}
          fallbackSrc={PLACEHOLDER_IMAGES.BANNER_HERO}
          alt={`${title} - promotional banner`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href={ctaLink}
              className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
              aria-label={`${ctaText} - ${title}`}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
