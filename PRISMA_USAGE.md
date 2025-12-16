# Prisma Usage Guide

## Project Structure

```
src/
├── app/api/              # API routes
│   ├── products/         # Product endpoints
│   ├── cart/            # Cart endpoints
│   ├── orders/          # Order endpoints
│   └── categories/      # Category endpoints
├── lib/
│   └── prisma.ts        # Prisma client instance
└── services/            # Business logic layer
    ├── product.service.ts
    └── cart.service.ts
```

## API Endpoints

### Products

**GET /api/products**
- Query params: `categoryId`, `featured`, `search`, `limit`, `page`
- Returns: List of products with pagination

**GET /api/products/[id]**
- Returns: Single product with category, variants, and reviews

**POST /api/products**
- Body: `{ name, slug, description, price, images, categoryId, stock }`
- Returns: Created product

**PATCH /api/products/[id]**
- Body: Product fields to update
- Returns: Updated product

**DELETE /api/products/[id]**
- Returns: Success message

### Cart

**GET /api/cart?userId=xxx**
- Returns: User's cart with items

**POST /api/cart**
- Body: `{ userId, productId, quantity, size, color }`
- Returns: Added cart item

**PATCH /api/cart/[itemId]**
- Body: `{ quantity }`
- Returns: Updated cart item

**DELETE /api/cart/[itemId]**
- Returns: Success message

### Orders

**GET /api/orders?userId=xxx**
- Returns: User's orders

**GET /api/orders/[id]**
- Returns: Single order with items

**POST /api/orders**
- Body: `{ userId, items, shippingAddress, paymentMethod, subtotal, tax, shipping }`
- Returns: Created order

**PATCH /api/orders/[id]**
- Body: `{ status, paymentStatus }`
- Returns: Updated order

### Categories

**GET /api/categories**
- Returns: All categories with product count

**POST /api/categories**
- Body: `{ name, slug, description, image }`
- Returns: Created category

## Usage Examples

### 1. Fetching Products in a Component

```typescript
// app/(store)/products/page.tsx
import { ProductService } from '@/services/product.service'

export default async function ProductsPage() {
  const { products, pagination } = await ProductService.getAll({
    featured: true,
    limit: 12,
  })

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}
```

### 2. Using API Routes from Client

```typescript
// Client-side fetch
async function addToCart(productId: string, quantity: number) {
  const response = await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 'user-id',
      productId,
      quantity,
    }),
  })
  
  const data = await response.json()
  return data
}
```

### 3. Direct Prisma Usage in Server Components

```typescript
import { prisma } from '@/lib/prisma'

export default async function HomePage() {
  const featuredProducts = await prisma.product.findMany({
    where: { featured: true },
    include: { category: true },
    take: 8,
  })

  return (
    <div>
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### 4. Using Service Layer

```typescript
import { CartService } from '@/services/cart.service'

// In an API route or server action
export async function addToCartAction(userId: string, productId: string) {
  const cartItem = await CartService.addItem({
    userId,
    productId,
    quantity: 1,
  })
  
  return cartItem
}
```

### 5. Complex Queries

```typescript
// Get products with reviews and average rating
const products = await prisma.product.findMany({
  include: {
    category: true,
    reviews: {
      select: {
        rating: true,
      },
    },
  },
})

// Calculate average rating
const productsWithRating = products.map(product => ({
  ...product,
  averageRating: product.reviews.length > 0
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0,
}))
```

### 6. Transactions

```typescript
// Create order and update stock atomically
const order = await prisma.$transaction(async (tx) => {
  // Create order
  const newOrder = await tx.order.create({
    data: {
      userId,
      orderNumber,
      total,
      items: {
        create: items,
      },
    },
  })

  // Update product stock
  for (const item of items) {
    await tx.product.update({
      where: { id: item.productId },
      data: {
        stock: {
          decrement: item.quantity,
        },
      },
    })
  }

  return newOrder
})
```

## Best Practices

1. **Use Service Layer**: Keep business logic in services, not API routes
2. **Error Handling**: Always wrap Prisma calls in try-catch
3. **Transactions**: Use for operations that must succeed together
4. **Indexes**: Already defined in schema for common queries
5. **Pagination**: Always paginate large result sets
6. **Select Fields**: Use `select` to fetch only needed fields
7. **Include Relations**: Use `include` to fetch related data

## Common Patterns

### Pagination
```typescript
const page = 1
const limit = 20
const products = await prisma.product.findMany({
  take: limit,
  skip: (page - 1) * limit,
})
```

### Search
```typescript
const products = await prisma.product.findMany({
  where: {
    OR: [
      { name: { contains: searchTerm, mode: 'insensitive' } },
      { description: { contains: searchTerm, mode: 'insensitive' } },
    ],
  },
})
```

### Aggregations
```typescript
const stats = await prisma.order.aggregate({
  where: { userId },
  _sum: { total: true },
  _count: true,
})
```

## Next Steps

1. Set up your database connection in `.env.local`
2. Run `npm run prisma:generate` to generate the client
3. Run `npm run prisma:migrate` to create tables
4. Run `npm run prisma:seed` to add sample data
5. Start using the APIs in your components!
