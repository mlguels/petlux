"use server";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function addPet(formdata) {
  await sleep(2000);
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
}
