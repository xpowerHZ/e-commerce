export const SortOptionMap = {
  featured: { display: "Featured", value: "featured" },
  newest: { display: "Newest", value: "newest" },
  "price-asc": {
    display: "Price: Low to High",
    value: "price-asc",
  },
  "price-desc": {
    display: "Price: High to Low",
    value: "price-desc",
  },
} as const;

export type SortOption =
  (typeof SortOptionMap)[keyof typeof SortOptionMap]["value"];
