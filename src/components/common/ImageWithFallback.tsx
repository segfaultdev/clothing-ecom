'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { PLACEHOLDER_IMAGES } from '@/constants/placeholders';

/**
 * ImageWithFallback Component
 * 
 * Wrapper around Next.js Image component that handles loading errors gracefully.
 * Falls back to placeholder image if the primary image fails to load.
 * 
 * Requirements: 7.2
 */

interface ImageWithFallbackProps extends Omit<ImageProps, 'src' | 'onError'> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Use provided fallback or default placeholder
      const fallback = fallbackSrc || PLACEHOLDER_IMAGES.PRODUCT_DEFAULT;
      setImgSrc(fallback);
      
      // Log error for monitoring
      console.warn(`Failed to load image: ${src}, using fallback: ${fallback}`);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
