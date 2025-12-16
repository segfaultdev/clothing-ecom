# ProductCard Component

## Overview

The `ProductCard` component is a reusable React component that displays product information in a card format. It's designed for use in product listings, featured products sections, and trending products displays on the landing page.

## Features

- ✅ **Product Image**: Optimized with Next.js Image component
- ✅ **Product Information**: Name, category, and price display
- ✅ **Discount Badge**: Automatic discount percentage calculation and display
- ✅ **Hover Effects**: Smooth image zoom and shadow transitions
- ✅ **Navigation**: Links to product detail pages
- ✅ **Accessibility**: ARIA labels and semantic HTML
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Out of Stock Indicator**: Visual overlay for unavailable products
- ✅ **Optional Quick View**: Button for quick product preview

## Requirements Satisfied

- **2.3**: Display product image, name, price, and quick view button
- **2.4**: Navigate to product detail page on click
- **2.5**: Provide visual feedback on hover
- **10.3**: Use Next.js Image component for optimization
- **10.5**: Include accessibility attributes

## Usage

### Basic Usage

```tsx
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/data/mock-products';

export default function ProductList() {
  const product = mockProducts[0];
  
  return <ProductCard product={product} />;
}
```

### With Quick View Button

```tsx
<ProductCard product={product} showQuickView={true} />
```

### In a Grid Layout

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} showQuickView={true} />
  ))}
</div>
```

## Props

### `ProductCardProps`

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `product` | `Product` | Yes | - | Product data object |
| `showQuickView` | `boolean` | No | `false` | Show quick view button on hover |

### `Product` Interface

```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  categoryId: string;
  inStock: boolean;
  featured?: boolean;
  trending?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## Styling

The component uses Tailwind CSS for styling with the following features:

- **Card Container**: White background with rounded corners and shadow
- **Hover Effects**: 
  - Image scales to 105%
  - Shadow increases from `shadow-sm` to `shadow-lg`
  - Quick view button fades in
- **Responsive**: Adapts to different screen sizes
- **Transitions**: Smooth 300ms transitions for all interactive elements

## Accessibility

- Semantic HTML with `<article>` element
- ARIA labels for product name and actions
- Alt text for images includes product name and category
- Keyboard accessible links and buttons
- Focus states for interactive elements

## Image Optimization

- Uses Next.js `Image` component with `fill` layout
- Responsive sizes: `(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw`
- Lazy loading enabled (priority=false)
- Fallback to placeholder image if product image is missing
- Aspect ratio maintained at 3:4 (portrait)

## Discount Badge

When a product has an `originalPrice` greater than the current `price`:
- Discount percentage is automatically calculated
- Red badge appears in top-right corner
- Original price shown with strikethrough
- Current price displayed prominently

## Out of Stock Handling

When `product.inStock` is `false`:
- Semi-transparent black overlay appears
- "Out of Stock" text displayed
- Quick view button is hidden
- Product remains clickable to view details

## Examples

See `ProductCard.example.tsx` for comprehensive usage examples.

## Related Components

- `TrendingProducts`: Uses ProductCard to display trending products
- `FeaturedCategories`: Similar card pattern for categories

## Future Enhancements

- Quick view modal implementation
- Add to cart button
- Wishlist/favorite toggle
- Product rating display
- Multiple image carousel
- Color/size variant selector
