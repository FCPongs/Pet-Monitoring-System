
'use client';
import { useVets } from "@/hooks/vet";
import VetCard from "@/app/components/vets/VetCard";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { IdCard, List } from "lucide-react";
import { useState } from "react";
import LoadingLogo from "@/app/components/loading/loadingGif";

export default function VetsPage() {
    const { data, isPending, isFetching } = useVets();
    const [view, setView] = useState<string>("Card");

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
                Vets:
            </div>

            {view === "Card" ?
                (
                    <div className="flex">
                        {data?.map((vets) => (
                            <div className="w-150 p-5">
                                <VetCard name={String(vets.name)} doctor={String(vets.doctor)} location={String(vets.location)} />
                            </div>
                        ))}
                    </div>
                ) :
                (
                    <div className="p-5">
                        Show in list
                    </div>
                )}
        </>
    )
}