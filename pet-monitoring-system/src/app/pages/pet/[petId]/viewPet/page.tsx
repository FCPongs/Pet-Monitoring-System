'use client'
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation";
export default function viewPet() {
    const params = useParams();
    const route = useRouter();
    const petId = params.petId;
    return (
        <>
            <div>View: {petId}</div>
            <Button onClick={() => {route.push(`/pages/schedule/addExisting/${petId}`)}}>Add schedule</Button>
        </>
    )
}
// pages\schedule\addExisting\page.tsx