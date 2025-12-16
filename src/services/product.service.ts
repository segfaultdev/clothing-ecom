import { prisma } from '@/lib/prisma'

export class ProductService {
  static async getAll(filters?: {
    categoryId?: string
    featured?: boolean
    search?: string
    limit?: number
    page?: number
  }) {
    const { categoryId, featured, search, limit = 20, page = 1 } = filters || {}

    const where: any = {}
    if (categoryId) where.categoryId = categoryId
    if (featured) where.featured = true
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          category: true,
          variants: true,
        },
        take: limit,
        skip: (page - 1) * limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ])

    return {
      products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  }

  static async getById(id: string) {
    return prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        variants: true,
        reviews: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    })
  }

  static async getBySlug(slug: string) {
    return prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        variants: true,
        reviews: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    })
  }

  static async create(data: {
    name: string
    slug: string
    description?: string
    price: number
    comparePrice?: number
    images: string[]
    categoryId: string
    stock?: number
    featured?: boolean
  }) {
    return prisma.product.create({
      data,
      include: {
        category: true,
      },
    })
  }

  static async update(id: string, data: any) {
    return prisma.product.update({
      where: { id },
      data,
      include: {
        category: true,
        variants: true,
      },
    })
  }

  static async delete(id: string) {
    return prisma.product.delete({
      where: { id },
    })
  }

  static async getFeatured(limit = 8) {
    return prisma.product.findMany({
      where: { featured: true },
      include: {
        category: true,
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
    })
  }
}
