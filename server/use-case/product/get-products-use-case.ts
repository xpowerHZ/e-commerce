import { Product } from "../../domains/product/entities/product";
import { Filter } from "../../domains/product/value-object/filter";
import { IProductRepository } from "@/server/domains/product/interfaces/i-product-repository";

export class GetProductsUseCase {
  private repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async getProducts(filter: Filter): Promise<Product[]> {
    const products = await this.repository.getProducts(filter);
    return products;
  }
}
