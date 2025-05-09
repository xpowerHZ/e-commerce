import z from "zod";
import { Category } from "../value-object/filter";


const productSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.nativeEnum(Category),
  price: z.number().gte(0),
  image: z.string().optional(),
  featured: z.boolean().optional(),
  material: z.string(),
  origin: z.string(),
  dimensions: z.string().optional(),
  care: z.string().optional(),
  createdAt: z.date().optional(),
});
export type ProductType = z.infer<typeof productSchema>;

export class Product {
  id?: string;
  name!: string;
  category!: Category;
  price!: number;
  image?: string;
  featured?: boolean;
  material!: string;
  origin!: string;
  dimensions?: string;
  care?: string;
  createdAt?: Date;

  constructor(props: ProductType) {
    Object.assign(this, productSchema.parse(props));
  }
}
