import { z } from "zod";

export const RequestOrderItemSchema = z.object({
  productId: z.string(),
  price: z.number().gte(0),
  quantity: z.number().int().gte(1),
});

export const OrderRequestSchema = z.object({
  items: z.array(RequestOrderItemSchema),
  totalPrice: z.number().gte(0),
});

export type RequestOrderItemType = z.infer<typeof RequestOrderItemSchema>;
export type OrderRequestType = z.infer<typeof OrderRequestSchema>;
