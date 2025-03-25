import prisma from "@/lib/prisma";
import {
  CategoryType,
  FilterParams,
  Product,
  SortOption,
} from "@/types/Product";

export async function getProducts(filter: FilterParams) {
  const where: any = {};
  const orderBy: any = {};

  // Ensure filter.sort has a valid default value
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

  return prisma.product.findMany({
    where,
    orderBy: Object.keys(orderBy).length ? orderBy : undefined,
  });
}

export async function getProduct(id: string): Promise<Product> {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return {
    ...product,
    category: product.category as CategoryType,
    price: product.price.toNumber(),
    createdAt: product.createdAt.toISOString(),
  };
}
