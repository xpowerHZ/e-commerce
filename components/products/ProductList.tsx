import { ProductCard } from "@/components/ui/product-card";
import { FilterParams } from "@/types/Product";

import { getProducts } from "@/api/products/products";

type ProductsListProps = {
  filterQueries: FilterParams;
};

export default async function ProductsList({
  filterQueries,
}: ProductsListProps) {
  const products = await getProducts(filterQueries);
  console.log("PRODUCTS", products);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={
              product.category.charAt(0).toUpperCase() +
              product.category.slice(1)
            }
            price={product.price.toNumber()}
            image={product.image || "/placeholder.svg"}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
