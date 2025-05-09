import { GetProductsUseCase } from "@/server/use-case/product/get-products-use-case";

import { ProductCardView, ProductPresenter } from "../presenter";
import {
  Category,
  Filter,
  SortOption,
} from "@/server/domains/product/value-object/filter";
import { FilterRequestType } from "@/shared/product/get-products-filter";

export class GetProductsController {
  private useCase: GetProductsUseCase;

  constructor(useCase: GetProductsUseCase) {
    this.useCase = useCase;
  }

  async getProducts(
    requestFilter: FilterRequestType
  ): Promise<ProductCardView[]> {
    const filter = Filter.create(
      requestFilter.search,
      requestFilter.category as Category[],
      requestFilter.sort as SortOption,
      requestFilter.minPrice,
      requestFilter.maxPrice
    );
    const products = await this.useCase.getProducts(filter);
    const productCardsData = products.map((product) =>
      ProductPresenter.toCardView(product)
    );

    return productCardsData;
  }
}
