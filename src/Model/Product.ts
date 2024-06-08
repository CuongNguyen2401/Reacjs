// models/Product.ts
import { z } from 'zod';
import { Status } from './Enums/Status';

const ProductStatusSchema = z.nativeEnum(Status);

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number().nonnegative(),
    salePrice: z.number().nonnegative(),
    quantity: z.number().int().nonnegative(),
    categoryId: z.number().int(),
    image: z.string().url(),
    productStatus: ProductStatusSchema
});

export type Product = z.infer<typeof ProductSchema>;
