import { Product } from "@/server/domain/product/entities/product";
import { ProductRepository } from "@/server/domain/product/interfaces/product-repository";
import { Filter, FilterParams } from "@/types/Product";

export class GetProductsUseCase {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async getProducts(filter: FilterParams): Promise<Product[]> {
    return this.repository.getProducts(filter);
  }
}
