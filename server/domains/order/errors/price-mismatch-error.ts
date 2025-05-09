// --- PriceMismatchError ---

export class PriceMismatchError extends Error {
  public readonly status: number;
  public readonly productId: string;
  public readonly requestPrice: number;
  public readonly updatedPrice: number;
  public readonly payload: { productId: string; updatedPrice: number };

  constructor(productId: string, updatedPrice: number, requestPrice: number) {
    super(`Price for item ${productId} was updated.`);
    this.name = "PriceMismatchError";
    this.status = 409;
    this.requestPrice = requestPrice;
    this.productId = productId;
    this.updatedPrice = updatedPrice;
    this.payload = { productId, updatedPrice };
    Object.setPrototypeOf(this, PriceMismatchError.prototype);
  }
}
