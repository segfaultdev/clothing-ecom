import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'mens' },
      update: {},
      create: {
        name: "Men's Clothing",
        slug: 'mens',
        description: 'Stylish clothing for men',
        image: '/images/categories/mens.jpg',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'womens' },
      update: {},
      create: {
        name: "Women's Clothing",
        slug: 'womens',
        description: 'Trendy clothing for women',
        image: '/images/categories/womens.jpg',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'accessories' },
      update: {},
      create: {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Complete your look with accessories',
        image: '/images/categories/accessories.jpg',
      },
    }),
  ])

  console.log('✅ Categories created')

  // Create sample products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { slug: 'classic-white-tshirt' },
      update: {},
      create: {
        name: 'Classic White T-Shirt',
        slug: 'classic-white-tshirt',
        description: 'A timeless white t-shirt made from premium cotton',
        price: 29.99,
        comparePrice: 39.99,
        images: ['/images/products/tshirt-white.jpg'],
        categoryId: categories[0].id,
        stock: 100,
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'denim-jeans' },
      update: {},
      create: {
        name: 'Slim Fit Denim Jeans',
        slug: 'denim-jeans',
        description: 'Comfortable slim fit jeans for everyday wear',
        price: 79.99,
        comparePrice: 99.99,
        images: ['/images/products/jeans-blue.jpg'],
        categoryId: categories[0].id,
        stock: 50,
        featured: true,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'summer-dress' },
      update: {},
      create: {
        name: 'Floral Summer Dress',
        slug: 'summer-dress',
        description: 'Light and breezy summer dress with floral pattern',
        price: 59.99,
        images: ['/images/products/dress-floral.jpg'],
        categoryId: categories[1].id,
        stock: 30,
        featured: true,
      },
    }),
  ])

  console.log('✅ Products created')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
