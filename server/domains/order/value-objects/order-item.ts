import { Product } from "@/server/domains/product/entities/product";

export class OrderItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  itemTotal(): number {
    return this.product.price * this.quantity;
  }
}
