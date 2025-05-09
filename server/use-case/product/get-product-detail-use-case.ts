
import { ProductNotFoundError } from "../../domains/product/errors/product-errors";
import { Product } from "../../domains/product/entities/product";
import { IProductRepository } from "@/server/domains/product/interfaces/i-product-repository";

export class GetProductDetailUseCase {
  private repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async execute(productId: string): Promise<Product> {
    const product = await this.repository.getProductDetail(productId);
    if (!product) throw new ProductNotFoundError(productId);

    return product;
  }
}
