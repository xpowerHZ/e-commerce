export type Product = {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  image: string;
  featured: boolean;
  material: string;
  origin: string;
  dimensions: string;
  care: string;
  createdAt: string;
};

export const Category = {
  kitchen: { display: "Kitchen", value: "kitchen" },
  stationery: { display: "Stationary", value: "stationery" },
  "home-decor": { display: "Home Decor", value: "home-decor" },
  clothing: { display: "Clothing", value: "clothing" },
  accessories: { display: "Accessories", value: "accessories" },
} as const;

export type CategoryType = (typeof Category)[keyof typeof Category]["value"];

export const SortOption = {
  featured: { key: "featured", display: "Featured", value: "featured" },
  newest: { key: "newest", display: "Newest", value: "newest" },
  "price-asc": {
    key: "priceLow",
    display: "Price: Low to High",
    value: "price-asc",
  },
  "price-desc": {
    key: "priceHigh",
    display: "Price: High to Low",
    value: "price-desc",
  },
} as const;

export type SortOptionValue =
  (typeof SortOption)[keyof typeof SortOption]["value"];

export type PriceRange = {
  minPrice?: number;
  maxPrice?: number;
};

export type Filter = {
  category: CategoryType[];
  sort: SortOptionValue;
  min: number;
  max: number;
};

export const getDefaultFilter = (): Filter => ({
  category: [],
  sort: SortOption.featured.value,
  min: 0,
  max: Infinity,
});

export type FilterParams = {
  search?: string;
  category?: CategoryType[];
  sort?: SortOptionValue;
  min?: number;
  max?: number;
};
