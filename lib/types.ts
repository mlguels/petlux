import { Pet } from "@prisma/client";

// Omitting the id, createdAt, and updatedAt fields from the Pet type
export type PetEssentials = Omit<Pet, "id" | "createdAt" | "updatedAt">;
