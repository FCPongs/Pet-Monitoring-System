'use client';
import { useVet } from "@/hooks/vet";
import { useParams } from "next/navigation";

export default function viewVet() {
    const params = useParams();
    const vet = useVet(params.id as string);
    return (
        <>
            <div>{vet?.name}</div>
        </>
    )
}