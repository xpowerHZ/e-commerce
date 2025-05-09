export const CategoryMap = {
  kitchen: { display: "Kitchen", value: "kitchen" },
  stationery: { display: "Stationery", value: "stationery" },
  "home-decor": { display: "Home Decor", value: "home-decor" },
  clothing: { display: "Clothing", value: "clothing" },
  accessories: { display: "Accessories", value: "accessories" },
} as const;

export type Category = (typeof CategoryMap)[keyof typeof CategoryMap]["value"];