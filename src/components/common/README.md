# Common Components

This directory contains reusable UI components used across the landing page.

## Error Handling & Loading States

### ErrorBoundary

A React error boundary component that catches JavaScript errors in child components and displays a fallback UI.

**Features:**
- Catches errors in child component tree
- Prevents entire page crashes
- Displays user-friendly error message
- Provides refresh button to recover
- Optional custom fallback UI
- Error logging for monitoring
- Customizable error handler callback

**Usage:**
```tsx
import ErrorBoundary, { ComponentErrorFallback } from '@/components/common/ErrorBoundary';

// Wrap components to catch errors
<ErrorBoundary fallback={<ComponentErrorFallback componentName="Product List" />}>
  <ProductList />
</ErrorBoundary>

// Or use default fallback
<ErrorBoundary>
  <CategoryGrid />
</ErrorBoundary>
```

**Requirements:** 7.2

### LoadingSkeleton

Reusable skeleton loading components that provide visual feedback while data is loading.

**Components:**
- `ProductCardSkeleton` - Loading placeholder for ProductCard
- `CategoryCardSkeleton` - Loading placeholder for CategoryCard
- `TrendingProductsSkeleton` - Loading state for entire TrendingProducts section
- `FeaturedCategoriesSkeleton` - Loading state for FeaturedCategories section
- `HeroBannerSkeleton` - Loading state for HeroBanner

**Features:**
- Matches component dimensions and layout
- Smooth pulse animation
- Responsive design
- Accessible with ARIA labels

**Usage:**
```tsx
import { ProductCardSkeleton, TrendingProductsSkeleton } from '@/components/common/LoadingSkeleton';

// Show skeleton while loading
{isLoading ? <TrendingProductsSkeleton /> : <TrendingProducts products={products} />}
```

**Requirements:** 7.2

### EmptyState

Components that display appropriate messages when no data is available.

**Components:**
- `EmptyState` - Generic empty state with customizable content
- `EmptyProducts` - No products available state
- `EmptyCategories` - No categories available state
- `EmptyBanner` - Default banner when no banners exist

**Features:**
- User-friendly messaging
- Helpful CTAs to guide users
- Icon support
- Consistent styling
- Accessible

**Usage:**
```tsx
import { EmptyProducts, EmptyCategories } from '@/components/common/EmptyState';

// Show empty state when no data
{products.length === 0 ? <EmptyProducts /> : <ProductGrid products={products} />}
```

**Requirements:** 7.2

### ImageWithFallback

A wrapper around Next.js Image component that handles loading errors gracefully.

**Features:**
- Automatic fallback to placeholder on error
- Error logging for monitoring
- Supports custom fallback images
- All Next.js Image props supported
- Prevents broken image display

**Usage:**
```tsx
import ImageWithFallback from '@/components/common/ImageWithFallback';

<ImageWithFallback
  src={product.image}
  fallbackSrc="/images/placeholder-product.jpg"
  alt={product.name}
  fill
  sizes="(max-width: 640px) 50vw, 25vw"
/>
```

**Requirements:** 7.2

## Navigation

A client component that displays the main navigation bar with links to key sections and a mobile hamburger menu.

### Props

No props required - the component is self-contained with predefined navigation links.

### Features

- Links to Products, Categories, Cart, and Account pages
- Mobile hamburger menu with slide-out drawer
- Responsive design:
  - Hamburger menu on mobile (< 768px)
  - Full horizontal navigation on desktop (≥ 768px)
- Sticky positioning at top of viewport
- Smooth transitions and hover effects
- Accessibility attributes:
  - ARIA labels for all interactive elements
  - Screen reader text for menu state
  - Keyboard navigation support
  - Focus indicators on all links
- Brand logo/name linking to home page

### Usage

```tsx
import Navigation from '@/components/common/Navigation';

// The Navigation component is integrated into the root layout
// and appears automatically on all pages
<Navigation />
```

### Requirements Validation

- ✅ 5.1: Displays navigation bar at top with links to main sections
- ✅ 5.2: Includes links to Products, Categories, Cart, and Account
- ✅ 10.5: Includes accessibility features (ARIA labels, keyboard navigation)

## CategoryCard

A component that displays a single category with image, name, and item count.

### Props

```typescript
interface CategoryCardProps {
  category: Category;
}
```

### Features

- Responsive image with Next.js Image optimization
- Hover effects with scale animation and overlay
- Links to category page using slug
- Displays item count with proper pluralization
- Accessibility attributes (ARIA labels, alt text)

### Usage

```tsx
import CategoryCard from '@/components/common/CategoryCard';
import { Category } from '@/types/landing-page';

const category: Category = {
  id: 'men',
  name: 'Men',
  slug: 'men',
  image: '/images/categories/men.jpg',
  itemCount: 156,
  order: 1,
};

<CategoryCard category={category} />
```

## FeaturedCategories

A component that displays a responsive grid of category cards.

### Props

```typescript
interface FeaturedCategoriesProps {
  categories: Category[];
}
```

### Features

- Responsive grid layout:
  - 1 column on mobile
  - 2 columns on tablet (sm breakpoint)
  - 4 columns on desktop (lg breakpoint)
- Section header with title and description
- Renders all provided categories
- Returns null if no categories provided
- Semantic HTML with proper ARIA labels

### Usage

```tsx
import FeaturedCategories from '@/components/common/FeaturedCategories';
import { mockCategories } from '@/data/mock-categories';

<FeaturedCategories categories={mockCategories} />
```

## Requirements Validation

### CategoryCard
- ✅ 3.3: Displays category image, name, and item count
- ✅ 3.4: Links to category page using slug
- ✅ 10.3: Uses Next.js Image component for optimization
- ✅ 10.5: Includes accessibility attributes

### FeaturedCategories
- ✅ 3.1: Displays categories section on landing page
- ✅ 3.2: Shows all main clothing categories
- ✅ 3.5: Responsive grid layout
- ✅ 10.1: Separate reusable component
- ✅ 10.4: Uses Server Component (default in Next.js 14)

## Styling

Both components use Tailwind CSS for styling with:
- Responsive design patterns
- Hover effects and transitions
- Shadow effects for depth
- Proper spacing and typography
- Accessibility-focused color contrast
