import { Order } from "../../domains/order/entities/order";
import { IOrderRepository } from "../../domains/order/interfaces/i-repository";
import { IUnitOfWork } from "@/server/domains/i-unit-of-work";
import { IPaymentProcessor } from "../../domains/order/interfaces/payment-processor";

export class CreateOrderUseCase {
  private orderRepository: IOrderRepository;
  private paymentProcessor: IPaymentProcessor;
  private unitOfWork: IUnitOfWork;

  constructor(
    orderRepository: IOrderRepository,
    paymentProcessor: IPaymentProcessor,
    unitOfWork: IUnitOfWork
  ) {
    this.orderRepository = orderRepository;
    this.paymentProcessor = paymentProcessor;
    this.unitOfWork = unitOfWork;
  }

  async execute(order: Order): Promise<Order> {
    const customer = new Date().toString(); // mock customer
    const paymentId = await this.paymentProcessor.pay(order.totalPrice);

    return this.unitOfWork.transaction(async () => {
      const newOrder = await this.orderRepository.createOrder(
        order,
        customer,
        paymentId
      );

      return newOrder;
      // const completeOrder = await this.orderRepository.createOrderItem(
      //   order.orderItems,
      //   orderRecord.orderId!
      // );
      // return completeOrder;
    });
  }
}
