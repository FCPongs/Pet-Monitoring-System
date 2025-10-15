'use client';
import { usePets } from "@/hooks/pet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { IdCard, List } from "lucide-react";
import { useState } from "react";

export default function PetsPage() {
    const [view, setView] = useState();
    const pet = usePets();

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
            {view === "Card" ?
                (<div>
                    Shown in card
                </div>)
                :
                (<div>
                    Shown in list
                </div>)}
            {
                pet.map((pets) => {
                    return <li key={pets.id}>{pets.name}</li>
                })
            }
        </>
    )
}
