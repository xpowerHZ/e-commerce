import { GetProductsUseCase } from "@/server/use-cases/product/get-products";
import { Filter } from "@/types/Product";

export class GetProductsController {
  private useCase: GetProductsUseCase;

  constructor(useCase: GetProductsUseCase) {
    this.useCase = useCase;
  }

  async getProducts(filter: Filter) {
    const products = await this.useCase.getProducts(filter);
    return products;
  }
}
