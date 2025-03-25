import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SortOption } from "@/types/Product";
import { ArrowUpDown } from "lucide-react";
import { SortOptions } from "./sort-options";

export const SortDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <ArrowUpDown className="h-4 w-4" />
          Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <SortOptions />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
