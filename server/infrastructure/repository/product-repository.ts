import prisma from "@/lib/prisma";

import { Product } from "../../domains/product/entities/product";
import {
  Category,
  Filter,
  SortOption,
} from "../../domains/product/value-object/filter";

import { Prisma } from "@prisma/client";

import { IProductRepository } from "@/server/domains/product/interfaces/i-product-repository";

export class ProductRepositoryImpl implements IProductRepository {
  private db;

  constructor() {
    this.db = prisma;
  }

  async getProducts(filter: Filter): Promise<Product[]> {
    const whereConditions: Prisma.ProductWhereInput = {};
    const orderByConditions: Prisma.ProductOrderByWithRelationInput = {};

    const sort = filter.sort ?? SortOption.Featured;

    if (filter.category) {
      whereConditions.category = {
        in: Array.isArray(filter.category)
          ? filter.category
          : [filter.category],
      };
    }

    if (filter.minPrice || filter.maxPrice) {
      const priceFilter: Prisma.IntFilter = {};
      if (filter.minPrice) {
        priceFilter.gte = filter.minPrice;
      }
      if (filter.maxPrice) {
        priceFilter.lte = filter.maxPrice;
      }
      whereConditions.price = priceFilter;
    }

    if (filter.search) {
      whereConditions.name = { contains: filter.search, mode: "insensitive" };
    }

    switch (sort) {
      case SortOption.Featured:
        break;
      case SortOption.Newest:
        orderByConditions.createdAt = "desc";
        break;
      case SortOption.PriceAsc:
        orderByConditions.price = "asc";
        break;
      case SortOption.PriceDesc:
        orderByConditions.price = "desc";
        break;
      default:
        console.warn("Unknown sort option:", sort);
    }
    const productsDb = await this.db.product.findMany({
      where: whereConditions,
      orderBy: orderByConditions,
    });

    const products = productsDb.map(
      (productRecord) =>
        new Product({
          ...productRecord,
          category: productRecord.category as Category,
          price: productRecord.price,
        })
    );
    return products;
  }

  async getProductDetail(productId: string): Promise<Product | null> {
    const product = await this.db.product.findUnique({
      where: { id: productId },
    });

    return product
      ? new Product({
          ...product,
          category: product.category as Category,
        })
      : null;
  }
}
