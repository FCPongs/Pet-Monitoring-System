'use client';
import { usePets } from "@/hooks/pet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { IdCard, List } from "lucide-react";
import { useState } from "react";
import PetCard from "@/app/components/pets/PetCard";
import LoadingLogo from "@/app/components/loading/loadingGif";
export default function PetsPage() {
    const [view, setView] = useState<string>("Card");
    const { data: pet, isFetching, isPending } = usePets();
    if (isPending || isFetching)
        return (
            <div className="flex w-full justify-center items-center h-full">
                <LoadingLogo />
            </div>
            );
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
                    <div className="flex flex-col">
                        {pet?.map(pets => (
                            <div className="w-150 p-5" key={pets._id}>
                                <PetCard id={String(pets._id)} name={pets.name} age={String(pets.age)} type={String(pets.animalType)} breed={String(pets.breed)} vet={
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
