"use client";

import { createContext, useState } from "react";
import { Pet } from "@/lib/types";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPet: string | null;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
