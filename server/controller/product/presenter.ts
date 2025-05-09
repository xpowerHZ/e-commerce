import { productDefaults } from "../../domains/product/constants";
import { Product } from "../../domains/product/entities/product";

export type ProductDetailView = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  featured: boolean;
  material: string;
  origin: string;
  dimensions: string;
  care: string;
  createdAt: Date;
};

export type ProductCardView = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

export type ProductOrderView = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export const ProductPresenter = {
  toCardView(product: Product): ProductCardView {
    return {
      id: product.id!,
      name: product.name,
      image: product.image || productDefaults.DEFAULT_IMAGE,
      category: product.category,
      price: product.price / 100,
    };
  },

  toDetailView(product: Product): ProductDetailView {
    return {
      id: product.id!,
      name: product.name,
      category: product.category,
      price: product.price / 100,
      image: product.image || productDefaults.DEFAULT_IMAGE,
      featured: product.featured || productDefaults.DEFAULT_FEATURED,
      material: product.material,
      origin: product.origin || productDefaults.DEFAULT_ORIGIN,
      dimensions: product.dimensions || productDefaults.DEFAULT_DIMENSIONS,
      care: product.care || productDefaults.DEFAULT_CARE,
      createdAt: product.createdAt!,
    };
  },

  toProductOrderView(product: Product): ProductOrderView {
    return {
      id: product.id!,
      name: product.name,
      price: product.price / 100,
      image: product.image || productDefaults.DEFAULT_IMAGE,
    };
  },
};
