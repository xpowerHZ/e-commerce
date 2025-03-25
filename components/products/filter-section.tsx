"use client";

import { ReactNode } from "react";

import { FilterSideBar } from "@/components/products/FilterSideBar";
import { FilterSortSection } from "@/components/products/FilterSortSection";

export default function FilterSection({ children }: { children: ReactNode }) {
  return (
    <>
      <FilterSortSection>
        <FilterSideBar />

        {children}
      </FilterSortSection>
    </>
  );
}
