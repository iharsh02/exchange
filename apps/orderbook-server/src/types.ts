import { z } from "zod";

export const OrderInputSchema = z.object({
  baseAsset: z.string(),
  quoteAsset: z.string(),
  price: z.number(),
  quantity: z.number(),
  side: z.enum(["bid", "ask"]),
  type: z.enum(["limit", "market"]),
  kind: z.enum(["ioc"]).optional(),
});
