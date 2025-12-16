# Clothing E-Commerce Platform

A modern, full-stack e-commerce platform built with Next.js 16, TypeScript, Prisma, and Tailwind CSS. Features a complete shopping experience with product catalog, cart management, checkout, and order tracking.

## Features

- 🛍️ Product catalog with categories and search
- 🛒 Shopping cart with real-time updates
- 💳 Checkout and order management
- 👤 User authentication and profiles
- 📦 Order tracking and history
- ⭐ Product reviews and ratings
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔒 Secure API routes
- 📊 Admin dashboard (coming soon)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components
- **Authentication**: NextAuth.js (ready to integrate)

## Project Structure

```
clothing-ecommerce/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (store)/           # Store pages (products, cart, etc.)
│   │   ├── admin/             # Admin dashboard
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── admin/            # Admin components
│   │   ├── cart/             # Cart components
│   │   ├── checkout/         # Checkout components
│   │   ├── common/           # Shared components
│   │   ├── product/          # Product components
│   │   └── ui/               # UI primitives
│   ├── lib/                  # Utilities and configs
│   │   └── prisma.ts         # Prisma client
│   ├── services/             # Business logic layer
│   │   ├── cart.service.ts
│   │   └── product.service.ts
│   └── types/                # TypeScript types
├── prisma/
│   ├── schema.prisma         # Database schema
│   ├── seed.ts              # Database seeding
│   └── README.md            # Prisma documentation
└── public/                   # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clothing-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy .env.local and update with your values
DATABASE_URL="postgresql://user:password@localhost:5432/clothing_ecommerce"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

4. Set up the database:
```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database with sample data (optional)
npm run prisma:seed
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run prisma:seed` - Seed database with sample data

## API Routes

### Products
- `GET /api/products` - List products (with filters)
- `GET /api/products/[id]` - Get single product
- `POST /api/products` - Create product
- `PATCH /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Cart
- `GET /api/cart?userId=xxx` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PATCH /api/cart/[itemId]` - Update cart item
- `DELETE /api/cart/[itemId]` - Remove cart item

### Orders
- `GET /api/orders?userId=xxx` - Get user's orders
- `GET /api/orders/[id]` - Get single order
- `POST /api/orders` - Create order
- `PATCH /api/orders/[id]` - Update order status

### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create category

See [PRISMA_USAGE.md](./PRISMA_USAGE.md) for detailed API documentation and usage examples.

## Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User** - Customer and admin accounts
- **Product** - Product catalog with variants
- **Category** - Product categories
- **Cart** - Shopping cart
- **Order** - Order management
- **Review** - Product reviews
- **Address** - Shipping addresses

See [prisma/schema.prisma](./prisma/schema.prisma) for the complete schema.

## Development

### Adding New Features

1. Update Prisma schema if needed
2. Create/update API routes in `src/app/api`
3. Add service layer logic in `src/services`
4. Build UI components in `src/components`
5. Create pages in `src/app`

### Database Changes

```bash
# After modifying schema.prisma
npm run prisma:migrate

# View changes in Prisma Studio
npm run prisma:studio
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the application:
```bash
npm run build
npm run start
```

Ensure your database is accessible and environment variables are set.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
