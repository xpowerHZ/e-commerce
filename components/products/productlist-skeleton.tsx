import { ProductSkeleton } from "./product-skeleton";

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};
