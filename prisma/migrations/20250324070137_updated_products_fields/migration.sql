/*
  Warnings:

  - Added the required column `care` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensions` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `material` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "care" TEXT NOT NULL,
ADD COLUMN     "dimensions" TEXT NOT NULL,
ADD COLUMN     "material" TEXT NOT NULL,
ADD COLUMN     "origin" TEXT NOT NULL;
