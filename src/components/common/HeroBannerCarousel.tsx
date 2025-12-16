'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ImageWithFallback from './ImageWithFallback';
import { Banner } from '@/types/landing-page';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

interface HeroBannerCarouselProps {
  banners: Banner[];
  autoRotate?: boolean;
  rotationInterval?: number; // in milliseconds
}

/**
 * HeroBannerCarousel Component
 * 
 * Client component that displays multiple hero banners with auto-rotation,
 * navigation controls, and keyboard accessibility.
 * 
 * @param banners - Array of banner objects to display
 * @param autoRotate - Whether to automatically rotate banners (default: true)
 * @param rotationInterval - Time between rotations in ms (default: 5000)
 */
export default function HeroBannerCarousel({
  banners,
  autoRotate = true,
  rotationInterval = 5000,
}: HeroBannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Navigate to next banner
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  // Navigate to previous banner
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  }, [banners.length]);

  // Navigate to specific banner
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isPaused || banners.length <= 1) return;

    const interval = setInterval(goToNext, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, rotationInterval, goToNext, banners.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Handle single banner case
  if (banners.length === 0) {
    return null;
  }

  if (banners.length === 1) {
    const banner = banners[0];
    return (
      <section 
        className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
        aria-label="Hero banner"
      >
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={banner.backgroundImage}
            fallbackSrc={PLACEHOLDER_IMAGES.BANNER_HERO}
            alt={`${banner.title} - promotional banner`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {banner.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              {banner.subtitle}
            </p>
            <div>
              <Link
                href={banner.ctaLink}
                className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                aria-label={`${banner.ctaText} - ${banner.title}`}
              >
                {banner.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentBanner = banners[currentIndex];

  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      aria-label="Hero banner carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={banner.backgroundImage}
                fallbackSrc={PLACEHOLDER_IMAGES.BANNER_HERO}
                alt={`${banner.title} - promotional banner`}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                className="object-cover"
                sizes="100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center h-full max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  {banner.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                  {banner.subtitle}
                </p>
                <div>
                  <Link
                    href={banner.ctaLink}
                    className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                    aria-label={`${banner.ctaText} - ${banner.title}`}
                    tabIndex={index === currentIndex ? 0 : -1}
                  >
                    {banner.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="Previous banner"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50"
        aria-label="Next banner"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to banner ${index + 1}: ${banner.title}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {banners.length}: {currentBanner.title}
      </div>
    </section>
  );
}
