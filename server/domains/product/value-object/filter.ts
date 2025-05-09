export enum Category {
  Kitchen = "kitchen",
  Stationery = "stationery",
  HomeDecor = "home-decor",
  Clothing = "clothing",
  Accessories = "accessories",
}

export enum SortOption {
  Featured = "featured",
  Newest = "newest",
  PriceAsc = "price-asc",
  PriceDesc = "price-desc",
}

export class Filter {
  private constructor(
    public readonly search?: string,
    public readonly category?: (typeof Category)[keyof typeof Category][],
    public readonly sort?: (typeof SortOption)[keyof typeof SortOption],
    public readonly minPrice?: number,
    public readonly maxPrice?: number
  ) {
    this.validatePriceRange();
  }
  public static create(
    search?: string,
    category?: (typeof Category)[keyof typeof Category][],
    sort?: (typeof SortOption)[keyof typeof SortOption],
    minPrice?: number,
    maxPrice?: number
  ): Filter {
    return new Filter(search, category, sort, minPrice, maxPrice);
  }

  private validatePriceRange() {
    if (
      this.minPrice !== undefined &&
      this.maxPrice !== undefined &&
      this.minPrice > this.maxPrice
    ) {
      throw new Error("minPrice cannot be greater than maxPrice.");
    }
  }
}

