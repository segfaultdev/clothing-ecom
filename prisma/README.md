# Prisma Setup Guide

## Database Setup

### 1. Configure Database Connection

Update the `DATABASE_URL` in `.env.local` with your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/clothing_ecommerce?schema=public"
```

### 2. Generate Prisma Client

```bash
npm run prisma:generate
```

### 3. Run Migrations

Create and apply database migrations:

```bash
npm run prisma:migrate
```

This will create all tables in your database.

### 4. Seed Database (Optional)

Populate your database with sample data:

```bash
npm run prisma:seed
```

### 5. View Database (Optional)

Open Prisma Studio to view and edit your data:

```bash
npm run prisma:studio
```

## Database Schema

The schema includes:

- **User**: Customer and admin accounts
- **Category**: Product categories
- **Product**: Product catalog with variants
- **Cart**: Shopping cart functionality
- **Order**: Order management
- **Address**: User shipping addresses
- **Review**: Product reviews

## Common Commands

- `npx prisma migrate dev --name <migration-name>` - Create a new migration
- `npx prisma db push` - Push schema changes without migrations (dev only)
- `npx prisma db pull` - Pull schema from existing database
- `npx prisma studio` - Open Prisma Studio GUI
- `npx prisma format` - Format schema file

## Using Prisma in Your Code

Import the Prisma client:

```typescript
import { prisma } from '@/lib/prisma'

// Example: Get all products
const products = await prisma.product.findMany({
  include: {
    category: true,
  },
})
```
