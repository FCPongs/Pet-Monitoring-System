
'use client';
import { useVets } from "@/hooks/vet";
export default function VetsPage() {
    const vets = useVets();

    return (
        <>
            <div>
                {vets.map((vet) => (
                    <div key={vet.name}>
                        <div>Name: {vet.name}</div>
                        <div>Doctor: {vet.doctor}</div>
                        <div>Location: {vet.location}</div>
                    </div>
                ))}
            </div>
        </>
    )
}