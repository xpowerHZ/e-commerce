import { Filter, FilterParams } from "@/types/Product";
import { Product } from "../entities/product";

export interface ProductRepository {
  getProducts(filter: FilterParams): Promise<Product[]>;
}
