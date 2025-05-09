import { Suspense } from "react";

import ProductsList from "../../components/products/ProductList";
import FilterSection from "@/components/products/filter-section";
import { TitleSection } from "@/components/products/TitleSection";
import { ActiveFilterBadges } from "@/components/products/active-filters-badges";
import { SortDropDown } from "@/components/products/SortDropdown";
import { ProductListSkeleton } from "@/components/products/productlist-skeleton";
import { FilterRequestType } from "@/shared/product/get-products-filter";

type ProductsPageProps = {
  searchParams: Promise<FilterRequestType>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const filterQueries = await searchParams;

  // Ensure category is an array even if it's a single string
  if (typeof filterQueries.category === "string") {
    filterQueries.category = [filterQueries.category];
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <TitleSection />
        <FilterSection>
          <SortDropDown />
        </FilterSection>
      </div>
      <ActiveFilterBadges />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductsList filterQueries={filterQueries} />
      </Suspense>
    </div>
  );
}
