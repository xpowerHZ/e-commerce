import { IUnitOfWork } from "../domains/i-unit-of-work";
import prisma from "@/lib/prisma";

export class PrismaUnitOfWork implements IUnitOfWork {
  private prisma = prisma;

  async transaction<T>(operation: () => Promise<T>): Promise<T> {
    return this.prisma.$transaction(operation);
  }
}
