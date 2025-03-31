import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.number().gte(0),
  image: z.string(),
  featured: z.boolean(),
  material: z.string(),
  origin: z.string(),
  dimensions: z.string(),
  care: z.string(),
  createdAt: z.date(),
});

export type Product = z.infer<typeof productSchema>;
