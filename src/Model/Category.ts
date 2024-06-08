import { z } from "zod";

export const categorySchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(1, { message: "Name must not be empty" }),
    description: z.string().min(1, { message: "Description must not be empty" }),
});

export type CategoryRequest = z.infer<typeof categorySchema>;