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
  handleChangeSelectedId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPet, setSelectedPet] = useState<string | null>(null);

  const handleChangeSelectedId = (id: string) => {
    setSelectedPet(id);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPet,
        handleChangeSelectedId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
