
// --- ProductNotFoundError ---

export class ProductNotFoundError extends Error {
  public readonly status: number;
  public readonly productId: string;

  constructor(productId: string) {
    super(`Product with ID ${productId} not found.`);
    this.name = 'ProductNotFoundError';
    this.status = 404;
    this.productId = productId;
    Object.setPrototypeOf(this, ProductNotFoundError.prototype);
  }
}