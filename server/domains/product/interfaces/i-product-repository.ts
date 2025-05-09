import { Filter } from "../value-object/filter";
import { Product } from "../entities/product";

export interface IProductRepository {
  getProducts(filter: Filter): Promise<Product[]>;

  getProductDetail(productId: string): Promise<Product | null>;
}
