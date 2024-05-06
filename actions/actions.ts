"use server";

import prisma from "@/lib/db";

export async function addPet(formdata) {
  await prisma.pet.create({
    data: {
      name: formdata.get("name"),
      ownerName: formdata.get("ownerName"),
      imageUrl: formdata.get("imageUrl"),
      age: +formdata.get("age"),
      notes: formdata.get("notes"),
    },
  });
}
