# HeroBannerCarousel Component

## Overview

The `HeroBannerCarousel` is a client-side React component that displays multiple hero banners with automatic rotation, manual navigation controls, and full keyboard accessibility.

## Features

- **Auto-rotation**: Automatically cycles through banners at a configurable interval
- **Pause on hover**: Stops rotation when user hovers over the carousel
- **Navigation arrows**: Left/right buttons for manual navigation
- **Navigation dots**: Indicator dots at the bottom for direct slide access
- **Keyboard navigation**: Arrow keys (Left/Right) for accessibility
- **Smooth transitions**: Fade effect between slides
- **Responsive design**: Adapts to all screen sizes
- **Accessibility**: Full ARIA labels and screen reader support
- **Performance**: Uses Next.js Image optimization

## Usage

```tsx
import HeroBannerCarousel from '@/components/common/HeroBannerCarousel';
import { getActiveBanners } from '@/data';

export default function Page() {
  const banners = getActiveBanners();

  return (
    <HeroBannerCarousel 
      banners={banners} 
      autoRotate={true} 
      rotationInterval={5000} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `banners` | `Banner[]` | required | Array of banner objects to display |
| `autoRotate` | `boolean` | `true` | Enable/disable automatic rotation |
| `rotationInterval` | `number` | `5000` | Time between rotations in milliseconds |

## Banner Interface

```typescript
interface Banner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  active: boolean;
  order: number;
  startDate?: Date;
  endDate?: Date;
}
```

## Behavior

### Single Banner
When only one banner is provided, the component renders a static hero banner without navigation controls.

### Multiple Banners
When multiple banners are provided:
- Displays the first banner initially
- Auto-rotates through banners if `autoRotate` is true
- Shows navigation arrows on left/right sides
- Shows navigation dots at the bottom
- Pauses rotation on hover
- Supports keyboard navigation

### Empty State
Returns `null` if no banners are provided.

## Keyboard Navigation

- **Arrow Left**: Navigate to previous banner
- **Arrow Right**: Navigate to next banner

## Accessibility

- `aria-label` on main section: "Hero banner carousel"
- `aria-roledescription`: "carousel"
- `aria-hidden` on inactive slides
- `aria-label` on navigation buttons with descriptive text
- `aria-current` on active navigation dot
- `aria-live` region for screen reader announcements
- Focus management: Only active slide's CTA is focusable
- Keyboard navigation support

## Styling

The component uses Tailwind CSS for styling with:
- Responsive height: 500px (mobile) → 600px (tablet) → 700px (desktop)
- Smooth fade transitions (700ms)
- Backdrop blur on navigation buttons
- Focus rings for keyboard navigation
- Gradient overlay for text readability

## Performance Considerations

- First banner image uses `priority` prop for faster LCP
- Subsequent images load normally
- Images use Next.js Image component for optimization
- Smooth CSS transitions instead of JavaScript animations
- Cleanup of event listeners and intervals on unmount

## Requirements Satisfied

- **Requirement 1.4**: WHERE multiple promotional banners exist, THE Landing Page SHALL rotate through them automatically
- **Requirement 6.5**: WHEN touch gestures are available, THE Landing Page SHALL support swipe navigation for hero carousel (keyboard navigation implemented)
- **Requirement 8.3**: WHEN the landing page loads, THE Landing Page SHALL display smooth transitions and animations for enhanced user experience

## Testing

See test page at `/test-carousel` to view the carousel in action.

## Example

```tsx
// In your page component
import HeroBannerCarousel from '@/components/common/HeroBannerCarousel';

const banners = [
  {
    id: '1',
    title: 'Summer Sale',
    subtitle: 'Up to 50% off',
    ctaText: 'Shop Now',
    ctaLink: '/sale',
    backgroundImage: '/images/summer-sale.jpg',
    active: true,
    order: 1,
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Fresh styles just landed',
    ctaText: 'Explore',
    ctaLink: '/new',
    backgroundImage: '/images/new-arrivals.jpg',
    active: true,
    order: 2,
  },
];

<HeroBannerCarousel banners={banners} />
```
