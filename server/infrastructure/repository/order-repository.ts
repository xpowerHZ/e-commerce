import prisma from "@/lib/prisma";
import { IOrderRepository } from "../../domains/order/interfaces/i-repository";
import { Order } from "../../domains/order/entities/order";
import { OrderItem } from "../../domains/order/value-objects/order-item";

export class OrderRepositoryImpl implements IOrderRepository {
  private db;

  constructor() {
    this.db = prisma;
  }

  async createOrder(
    newOrder: Order,
    customer: string,
    paymentId: string
  ): Promise<Order> {
    const orderRecord = await this.db.order.create({
      data: {
        customer: customer,
        paymentId: paymentId,
        totalPrice: newOrder.totalPrice,
      },
    });

    const orderItemsData = newOrder.orderItems.map((orderItem) => {
      return {
        orderId: orderRecord.id,
        productId: orderItem.product.id!,
        price: orderItem.product.price,
        quantity: orderItem.quantity,
        totalPrice: orderItem.quantity * orderItem.product.price,
      };
    });

    await this.db.orderItem.createMany({
      data: orderItemsData,
    });

    newOrder.orderId = orderRecord.id;

    return newOrder;
  }
}
