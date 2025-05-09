import { GetProductDetailUseCase } from "@/server/use-case/product/get-product-detail-use-case";
import { ProductDetailView, ProductPresenter } from "../presenter";

export class GetProductDetailController {
  private useCase: GetProductDetailUseCase;

  constructor(useCase: GetProductDetailUseCase) {
    this.useCase = useCase;
  }

  async execute(productId: string): Promise<ProductDetailView> {
    const product = await this.useCase.execute(productId);
    return ProductPresenter.toDetailView(product);
  }
}
