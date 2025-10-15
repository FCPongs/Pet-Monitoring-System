'use client';
import { usePet } from "@/hooks/pet";
import { useParams } from "next/navigation";

export default function viewPet() {
    const params = useParams();
    const pet = usePet(params.id as string);
    return (
        <>
        <div>
            {pet?.animalType}
        </div>
        </>
    );
}