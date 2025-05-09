import {
  Category,
  SortOption,
} from "@/server/domains/product/value-object/filter";
import { z } from "zod";

export const filterRequestSchema = z.object({
  search: z.string().min(1).optional(),
  category: z.array(z.nativeEnum(Category)).optional(),
  sort: z.nativeEnum(SortOption).optional(),
  minPrice: z.number().gte(0).optional(),
  maxPrice: z.number().gte(0).optional(),
});

export type FilterRequestType = z.infer<typeof filterRequestSchema>;
