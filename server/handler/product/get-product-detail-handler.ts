import { GetProductDetailController } from "@/server/controller/product/controller/get-product-detail-controller";
import { ProductRepositoryImpl } from "../../infrastructure/repository/product-repository";

import { GetProductDetailUseCase } from "../../use-case/product/get-product-detail-use-case";

export function getProductDetailHandler(productId: string) {
  const repository = new ProductRepositoryImpl();
  const useCase = new GetProductDetailUseCase(repository);
  const controller = new GetProductDetailController(useCase);

  return controller.execute(productId);
}
