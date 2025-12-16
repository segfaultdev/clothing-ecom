# Promotions Component

## Overview

The `Promotions` component displays active promotions with discount details, validity periods, and call-to-action buttons. It implements conditional rendering to only show when active promotions exist.

## Requirements

Validates requirements: 4.1, 4.2, 4.3, 4.4, 4.5

## Features

- **Conditional Rendering**: Only displays when promotions array is not empty
- **Discount Display**: Shows both percentage and fixed amount discounts
- **Validity Period**: Displays formatted date range for promotion validity
- **CTA Buttons**: Links to filtered product pages for each promotion
- **Responsive Design**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Visual Prominence**: Uses gradient backgrounds and hover effects
- **Accessibility**: Includes ARIA labels and semantic HTML

## Props

```typescript
interface PromotionsProps {
  promotions: Promotion[];
}

interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  validFrom: Date;
  validUntil: Date;
  ctaText: string;
  ctaLink: string;
  active: boolean;
}
```

## Usage

```tsx
import Promotions from '@/components/common/Promotions';
import { getActivePromotions } from '@/data';

export default function HomePage() {
  const activePromotions = getActivePromotions();
  
  return (
    <div>
      <Promotions promotions={activePromotions} />
    </div>
  );
}
```

## Behavior

### Conditional Rendering
- Returns `null` when `promotions` array is empty or undefined
- Only renders the section when at least one promotion exists

### Discount Formatting
- **Percentage**: Displays as "30% OFF"
- **Fixed Amount**: Displays as "$20 OFF"

### Validity Period
- Formats dates as "Valid: Jun 1, 2024 - Aug 31, 2024"
- Uses locale-aware date formatting

### Layout
- **Mobile (< 768px)**: Single column
- **Tablet (768px - 1024px)**: 2 columns
- **Desktop (> 1024px)**: 3 columns

## Styling

- Gradient background: purple-50 to pink-50
- Card shadows with hover effects
- Gradient CTA buttons with scale animation on hover
- Rounded corners and consistent spacing

## Accessibility

- Semantic HTML with `section`, `h2`, and proper heading hierarchy
- ARIA labels on CTA buttons with descriptive text
- Role attributes for list structure
- Keyboard navigable links

## Testing

See `Promotions.example.tsx` for usage examples and test page at `/test-promotions`.

## Related Components

- `HeroBanner`: Main promotional banner
- `TrendingProducts`: Featured products section
- `FeaturedCategories`: Category navigation
