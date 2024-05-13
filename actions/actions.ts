"use server";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function addPet(formdata) {
  await sleep(2000);

  try {
    await prisma.pet.create({
      data: {
        name: formdata.get("name"),
        ownerName: formdata.get("ownerName"),
        age: +formdata.get("age"),
        imageUrl:
          formdata.get("imageUrl") ||
          "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
        notes: formdata.get("notes"),
      },
    });

    revalidatePath("/app", "layout");
  } catch (error) {
    return {
      message: "Could not add pet.",
    };
  }
}

export async function editPet(petId, formData) {
  await sleep(2000);

  try {
    await prisma.pet.update({
      where: {
        id: petId,
      },
      data: {
        name: formData.get("name"),
        ownerName: formData.get("ownerName"),
        age: +formData.get("age"),
        imageUrl: formData.get("imageUrl"),
        notes: formData.get("notes"),
      },
    });

    revalidatePath("/app", "layout");
  } catch (error) {
    return {
      message: "Could not edit pet.",
    };
  }
}
