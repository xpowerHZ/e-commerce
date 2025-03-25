"use client";
import { SortOption, SortOptionValue } from "@/types/Product";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const SortOptions = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createSortUrl = (sortValue: SortOptionValue) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortValue);
    return `${pathname}?${params}`;
  };

  return Object.values(SortOption).map((sortOption) => (
    <DropdownMenuItem key={sortOption.value} asChild>
      <Link href={createSortUrl(sortOption.value)} replace>
        {sortOption.display}
      </Link>
    </DropdownMenuItem>
  ));
};
