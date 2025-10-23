'use client';
import { usePets } from "@/hooks/pet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { IdCard, List } from "lucide-react";
import { useState } from "react";
import PetCard from "../../../components/pets/PetCard";
export default function PetsPage() {
    const [view, setView] = useState<string>("Card");
    const { data: pet } = usePets();

    return (
        <>
            <div className="flex justify-end p-5 w-full">
                <ToggleGroup type="single">
                    <ToggleGroupItem onClick={() => setView("Card")} className="h-10 w-20 cursor-pointer" value="Card">
                        <IdCard className="!h-7 !w-7" />
                    </ToggleGroupItem>
                    <ToggleGroupItem onClick={() => setView("List")} className="h-10 w-20 cursor-pointer" value="b">
                        <List className="!h-7 !w-7" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div className="p-5 font-bold text-xl">
                Pets:
            </div>
            {view === "Card" ?
                (
                    <div className="flex">
                        {pet?.map(pets => (
                            <div className="w-150 p-5" key={pets._id}>
                                <PetCard name={pets.name} age={String(pets.age)} type={String(pets.animalType)} breed={String(pets.breed)} vet={
                                    typeof pets.vet === "object"
                                        ? pets.vet?.name
                                        : "no name"
                                } />
                            </div>
                        ))}
                    </div>

                )
                :
                (<div>
                    Shown in list
                </div>)}
        </>
    )
}
