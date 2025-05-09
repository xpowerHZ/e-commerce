import { ProductRepositoryImpl } from "@/server/infrastructure/repository/product-repository";
import { GetProductsUseCase } from "@/server/use-case/product/get-products-use-case";

import { Filter } from "../../domains/product/value-object/filter";
import { GetProductsController } from "@/server/controller/product/controller/get-products-controller";
import {
  filterRequestSchema,
  FilterRequestType,
} from "@/shared/product/get-products-filter";
import { ProductCardView } from "@/server/controller/product/presenter";

export function getProductsHandler(
  filterRequest: FilterRequestType
): Promise<ProductCardView[]> {
  filterRequestSchema.parse(filterRequest);
  const repository = new ProductRepositoryImpl();
  const useCase = new GetProductsUseCase(repository);
  const controller = new GetProductsController(useCase);
  return controller.getProducts(filterRequest);
}

