"use server";
import { ProductRepositoryImpl } from "@/server/infrastructure/repository/product-repository";

import { OrderRepositoryImpl } from "../../infrastructure/repository/order-repository";
import { GetProductDetailUseCase } from "@/server/use-case/product/get-product-detail-use-case";
import { CreateOrderUseCase } from "../../use-case/order/create-order-use-case";
import { PrismaUnitOfWork } from "@/server/infrastructure/prisma-unit-of-work";

import { CreateOrderController } from "../../controller/order/controller/create-order-controller";
import { OrderView } from "../../controller/order/presenter";
import { StripePaymentProcessor } from "@/server/infrastructure/stripe-payment-processor";
import {
  OrderRequestSchema,
  OrderRequestType,
} from "../../../shared/order/create-order-request";

export async function createOrderHandler(
  orderRequest: OrderRequestType
): Promise<OrderView> {
  OrderRequestSchema.parse(orderRequest);

  const productRepository = new ProductRepositoryImpl();
  const orderRepository = new OrderRepositoryImpl();
  const unitOfWork = new PrismaUnitOfWork();
  const paymentProcessor = new StripePaymentProcessor();
  const getProductDetailUseCase = new GetProductDetailUseCase(
    productRepository
  );
  const createOrderUseCase = new CreateOrderUseCase(
    orderRepository,
    paymentProcessor,
    unitOfWork
  );
  const controller = new CreateOrderController(
    getProductDetailUseCase,
    createOrderUseCase
  );
  return controller.execute(orderRequest);
}
