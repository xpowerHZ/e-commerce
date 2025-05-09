import { OrderItem } from "../value-objects/order-item";

export class Order {
  orderId?: string;
  orderItems: OrderItem[] = [];
  totalPrice: number;

  constructor(items: OrderItem[]) {
    // Initialize the orderItems array with the provided items
    items.forEach((item) => this.orderItems.push(item));

    // Calculate the total of the order
    const total = this.orderItems.reduce((total, item) => {
      return total + item.itemTotal();
    }, 0);

    // Add shipping cost if < 50
    this.totalPrice = total >= 5000 ? total : total + 599;
  }
}
