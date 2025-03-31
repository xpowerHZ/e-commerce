import { ProductRepositoryImpl } from "@/server/repositories/product";
import { GetProductsUseCase } from "@/server/use-cases/product/get-products";
import { Filter, FilterParams } from "@/types/Product";

export function getProductsAction(filter: FilterParams) {
  const repository = new ProductRepositoryImpl();
  const useCase = new GetProductsUseCase(repository);
}
