import { Order } from "../entities/order";

export interface IOrderRepository {
  createOrder(
    order: Order,
    customer: string,
    paymentId: string
  ): Promise<Order>;
}
