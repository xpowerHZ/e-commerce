import prisma from "@/lib/prisma";
import { Filter, FilterParams, SortOption } from "@/types/Product";
import { Product } from "../domain/product/entities/product";
import { Prisma } from "@prisma/client";

export class ProductRepositoryImpl {
  private db;

  constructor() {
    this.db = prisma;
  }

  getProducts(filter: FilterParams): Prisma.PrismaPromise<Product[]> {
    const where: any = {};
    const orderBy: any = {};

    const sort = filter.sort ?? SortOption.featured.value;

    if (filter.category) {
      where.category = { in: filter.category };
    }

    if (filter.min) {
      where.price = { gte: filter.min };
    }

    if (filter.max) {
      where.price = { ...where.price, lte: filter.max };
    }

    if (filter.search) {
      where.name = { contains: filter.search, mode: "insensitive" };
    }

    switch (sort) {
      case SortOption.featured.value:
        break;
      case SortOption.newest.value:
        orderBy.createdAt = "desc";
        break;
      case SortOption["price-asc"].value:
        orderBy.price = "asc";
        break;
      case SortOption["price-desc"].value:
        orderBy.price = "desc";
        break;
      default:
        console.warn("Unknown sort option:", sort);
    }

    return this.db.product.findMany({
      where,
      orderBy: Object.keys(orderBy).length ? orderBy : undefined,
    });
  }
}
