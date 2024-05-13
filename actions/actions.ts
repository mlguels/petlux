"use server";

import prisma from "@/lib/db";

export async function addPet(formdata) {
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
}
