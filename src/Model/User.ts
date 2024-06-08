import { z } from 'zod';

const GenderEnum = z.enum(['MALE', 'FEMALE', 'OTHER']);



export const UserRequestSchema = z.object({
    username: z.string().min(8, { message: "Username must be at least 8 characters long" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    firstName: z.string()
        .min(1, { message: "First name must not be empty" }).optional(),
    lastName: z.string()
        .min(1, { message: "Last name must not be empty" }).optional(),
    email: z.string()
        .email({ message: "Invalid email address" }),
    phoneNumber: z.string()
        .min(10, { message: "Phone number must be at least 10 digits long" })
        .regex(/^[0-9]+$/, "Phone number must contain only digits").optional(),
    dateOfBirth: z.date()
        .refine((date) => date <= new Date(), {
            message: "Date of birth must be a past date."
        }).optional(),
    gender: GenderEnum.optional(),
});

export type UserRequest = z.infer<typeof UserRequestSchema>;


export type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string
}