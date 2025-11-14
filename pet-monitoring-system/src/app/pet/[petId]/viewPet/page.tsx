'use client'
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation";
import ViewPet from "@/app/components/pets/ViewPet";
export default function viewPet() {
    const params = useParams();
    const route = useRouter();
    const petId = params.petId;
    return (
        <>
            <div className="h-[90vh]">
                <ViewPet id={String(petId)} />
            </div>
        </>
    )
}
// pages\schedule\addExisting\page.tsx