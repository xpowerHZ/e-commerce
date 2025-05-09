import { ProductOrderView, ProductPresenter } from "../product/presenter";
import { Order } from "../../domains/order/entities/order";

export type OrderView = {
  orderId: string;
  totalPrice: number;
  orderItems: OrderItemsView[];
};

export type OrderItemsView = {
  product: ProductOrderView;
  quantity: number;
};

export const OrderPresenter = {
  toOrderView(order: Order): OrderView {
    return {
      orderId: order.orderId!,
      totalPrice: order.totalPrice,
      orderItems: order.orderItems.map((orderItem) => {
        return {
          product: ProductPresenter.toProductOrderView(orderItem.product),
          quantity: orderItem.quantity,
        } as OrderItemsView;
      }),
    };
  },
};
