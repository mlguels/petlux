import { z } from "zod";
import { DEFAULT_PET_IMAGE } from "./constants";

export const petIdSchema = z.string().cuid();

export const petFormSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    ownerName: z
      .string()
      .trim()
      .min(1, { message: "Owner name is required" })
      .max(50, { message: "Owner name is too long" }),
    imageUrl: z.union([
      z.literal(""),
      z.string().trim().url({ message: "Invalid image url" }),
    ]),
    age: z.coerce.number().int().positive().max(100),
    notes: z.union([z.literal(""), z.string().trim().max(1000)]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || DEFAULT_PET_IMAGE,
  }));

export type TPetForm = z.infer<typeof petFormSchema>;
