"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePetContext } from "@/lib/hooks";

export default function PetList() {
  const { pets, handleChangeSelectedId, selectedPet } = usePetContext();
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button
            onClick={() => handleChangeSelectedId(pet.id)}
            className={cn(
              "flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition",
              { "bg-[#EFF1F2]": selectedPet === pet.id }
            )}
          >
            <Image
              src={pet.imageUrl}
              width={45}
              height={45}
              alt="Pet image"
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
