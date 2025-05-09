"use client";

import { FilterBadge } from "@/components/ui/filter-badge";
import { Category, CategoryMap } from "@/mapper/category-map";
import { SortOptionMap } from "@/mapper/sort-option-map";


import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ActiveFilterBadges = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract values from the URL
  const categories = searchParams.getAll("category") as Category[];
  const minParam = searchParams.get("min");
  const maxParam = searchParams.get("max");
  const min = minParam ? Number(minParam) : undefined;
  const max = maxParam ? Number(maxParam) : undefined;
  const search = searchParams.get("search") ?? undefined;
  const sort = searchParams.get("sort") ?? undefined;

  // Determine if there is any active filter
  const hasAnyFilter =
    categories.length > 0 ||
    search ||
    min !== undefined ||
    max !== undefined ||
    sort;

  const updateURL = (updatedParams: URLSearchParams) => {
    router.replace(`${pathname}?${updatedParams.toString()}`);
  };

  // Remove a filter that has a single value
  const handleRemoveBadge = (param: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.delete(param);
    updateURL(updatedParams);
  };

  // Remove a specific category from the URL
  const handleRemoveCategory = (category: Category) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    const updatedCategories = updatedParams
      .getAll("category")
      .filter((c) => c !== category);
    updatedParams.delete("category");
    updatedCategories.forEach((c) => updatedParams.append("category", c));
    updateURL(updatedParams);
  };

  if (!hasAnyFilter) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {search && (
        <FilterBadge
          label={`Search: ${search}`}
          onRemove={() => handleRemoveBadge("search")}
        />
      )}
      {categories.map((c) => (
        <FilterBadge
          key={c}
          label={CategoryMap[c as keyof typeof CategoryMap]?.display}
          onRemove={() => handleRemoveCategory(c)}
        />
      ))}
      {min !== undefined && (
        <FilterBadge
          label={`Min Price: $${min}`}
          onRemove={() => handleRemoveBadge("min")}
        />
      )}
      {max !== undefined && (
        <FilterBadge
          label={`Max Price: $${max}`}
          onRemove={() => handleRemoveBadge("max")}
        />
      )}
      {sort && (
        <FilterBadge
          label={SortOptionMap[sort as keyof typeof SortOptionMap]?.display}
          onRemove={() => handleRemoveBadge("sort")}
        />
      )}
      <button
        onClick={() => router.replace("/products")}
        className="text-sm text-muted-foreground hover:text-foreground underline"
      >
        Clear all
      </button>
    </div>
  );
};
