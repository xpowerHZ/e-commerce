import prisma from "./prisma";
import { allProducts } from "@/data/products";
export async function populateData() {
  try {
    await prisma.product.createMany({
      data: allProducts.map(({ id, date, ...product }) => ({
        ...product,
        price: product.price.toString(), // Convert price to string for Decimal type
      })),
      skipDuplicates: true, // Prevent duplicate entries
    });

    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    await prisma.$disconnect();
  }
}
