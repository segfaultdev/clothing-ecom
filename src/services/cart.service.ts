import { prisma } from '@/lib/prisma'

export class CartService {
  static async getOrCreate(userId: string) {
    let cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
        include: {
          items: {
            include: {
              product: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      })
    }

    return cart
  }

  static async addItem(data: {
    userId: string
    productId: string
    quantity: number
    size?: string
    color?: string
  }) {
    const { userId, productId, quantity, size, color } = data

    const cart = await this.getOrCreate(userId)

    // Check if item already exists
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
        size,
        color,
      },
    })

    if (existingItem) {
      return prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
        include: { product: true },
      })
    }

    return prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
        size,
        color,
      },
      include: { product: true },
    })
  }

  static async updateItem(itemId: string, quantity: number) {
    return prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
      include: { product: true },
    })
  }

  static async removeItem(itemId: string) {
    return prisma.cartItem.delete({
      where: { id: itemId },
    })
  }

  static async clearCart(userId: string) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
    })

    if (cart) {
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      })
    }
  }

  static async getTotal(userId: string) {
    const cart = await this.getOrCreate(userId)
    
    const total = cart.items.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity)
    }, 0)

    return {
      subtotal: total,
      itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0),
    }
  }
}
