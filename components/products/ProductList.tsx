import { ProductCard } from "@/components/ui/product-card";
import { CategoryMap } from "@/mapper/category-map";
import { Filter } from "@/server/domains/product/value-object/filter";
import { getProductsHandler } from "@/server/handler/product/get-products-handler";
import { FilterRequestType } from "@/shared/product/get-products-filter";

type ProductsListProps = {
  filterQueries: FilterRequestType;
};

export default async function ProductsList({
  filterQueries,
}: ProductsListProps) {
  const filterRequest = toFilterRequest(filterQueries);
  const products = await getProductsHandler(filterRequest);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={CategoryMap[product.category as keyof typeof CategoryMap].display}
            price={product.price}
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

const toFilterRequest = (filterQueries: FilterRequestType) => {
  const filterRequest: FilterRequestType = {
    ...filterQueries,
    minPrice: filterQueries.minPrice ? filterQueries.minPrice * 100 : undefined,
    maxPrice: filterQueries.maxPrice ? filterQueries.maxPrice * 100 : undefined,
  };
  return filterRequest;
};
