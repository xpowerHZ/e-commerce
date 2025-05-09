import { GetProductDetailUseCase } from "@/server/use-case/product/get-product-detail-use-case";
import { CreateOrderUseCase } from "../../../use-case/order/create-order-use-case";
import { OrderItem } from "../../../domains/order/value-objects/order-item";
import { Order } from "../../../domains/order/entities/order";
import { PriceMismatchError } from "../../../domains/order/errors/price-mismatch-error";
import { OrderPresenter, OrderView } from "../presenter";
import { OrderRequestType } from "@/shared/order/create-order-request";

export class CreateOrderController {
  private getProductDetailUseCase: GetProductDetailUseCase;
  private createOrderUseCase: CreateOrderUseCase;

  constructor(
    getProductDetailUseCase: GetProductDetailUseCase,
    createOrderUseCase: CreateOrderUseCase
  ) {
    this.getProductDetailUseCase = getProductDetailUseCase;
    this.createOrderUseCase = createOrderUseCase;
  }

  async execute(orderRequest: OrderRequestType): Promise<OrderView> {
    const orderItems: OrderItem[] = [];
    for (const item of orderRequest.items) {
      const product = await this.getProductDetailUseCase.execute(
        item.productId
      );

      if (product.price !== item.price) {
        throw new PriceMismatchError(item.productId, product.price, item.price);
      }

      orderItems.push(new OrderItem(product, item.quantity));
    }

    // Create the order
    const newOrder = new Order(orderItems);

    // Validate final price
    if (orderRequest.totalPrice !== newOrder.totalPrice) {
      throw Error("Total price does not match");
    }

    const orderRecord = await this.createOrderUseCase.execute(newOrder);
    return OrderPresenter.toOrderView(orderRecord);
  }
}
