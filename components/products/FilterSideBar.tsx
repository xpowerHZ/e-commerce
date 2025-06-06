"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { CategoryCheckboxes } from "./category-checkboxes";
import { PriceFilter } from "./price-filters";
import { Category } from "@/mapper/category-map";

type FilterSideBarProps = {};

export const FilterSideBar = ({}: FilterSideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  // Local state for controlling the sidebar open state
  const [isOpen, setIsOpen] = useState(false);

  // Local state for filters
  const [categories, setCategories] = useState<Category[]>([]);
  const [priceLimit, setPriceLimit] = useState<{ minPrice: number; maxPrice: number }>({
    minPrice: 0,
    maxPrice: Infinity,
  });

  // Sync the filter state with the URL search parameters when the sidebar opens
  useEffect(() => {
    if (isOpen) {
      // Get current values from URL
      const categoryQuery = searchParams.getAll("category") as Category[];
      const minPriceQuery = Number(searchParams.get("minPrice") ?? 0);
      const maxPriceQuery = Number(searchParams.get("maxPrice") ?? Infinity);

      setCategories(categoryQuery);
      setPriceLimit({ minPrice: minPriceQuery, maxPrice: maxPriceQuery });
    }
  }, [isOpen, searchParams]);

  const applyFilters = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Remove only the filter keys that you're updating
    newSearchParams.delete("category");
    newSearchParams.delete("minPrice");
    newSearchParams.delete("maxPrice");

    // Append the updated filter values
    if (categories.length > 0) {
      categories.forEach((category) => {
        newSearchParams.append("category", category);
      });
    }

    if (priceLimit.minPrice > 0) {
      newSearchParams.set("minPrice", priceLimit.minPrice.toString());
    }

    if (priceLimit.maxPrice < Infinity) {
      newSearchParams.set("maxPrice", priceLimit.maxPrice.toString());
    }

    // Update URL with the new search parameters
    const newUrl = `${pathname}?${newSearchParams.toString()}`;
    router.replace(newUrl);

    // Close the sidebar after applying filters
    setIsOpen(false);
    if (sheetCloseRef.current) {
      sheetCloseRef.current.click();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow down your product search</SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <h3 className="font-medium mb-4">Categories</h3>
          <div className="space-y-3">
            <CategoryCheckboxes
              selectedCategories={categories}
              setSelectedCategories={setCategories}
            />
          </div>
          <Separator className="my-6" />
          <h3 className="font-medium mb-4">Price Range</h3>
          <PriceFilter priceLimit={priceLimit} setPriceLimit={setPriceLimit} />
        </div>
        <SheetFooter className="mt-4">
          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
        </SheetFooter>
        <SheetClose ref={sheetCloseRef} className="hidden" />
      </SheetContent>
    </Sheet>
  );
};
