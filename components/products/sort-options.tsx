"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { SortOption, SortOptionMap } from "@/mapper/sort-option-map";

export const SortOptions = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createSortUrl = (sortValue: SortOption) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortValue);
    return `${pathname}?${params}`;
  };

  return Object.values(SortOptionMap).map((sortOption) => (
    <DropdownMenuItem key={sortOption.value} asChild>
      <Link href={createSortUrl(sortOption.value)} replace>
        {sortOption.display}
      </Link>
    </DropdownMenuItem>
  ));
};
