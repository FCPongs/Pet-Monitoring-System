import { useEffect } from "react";
import { useState } from "react";
import { Vet } from "@/app/validator/vetSchema";
import { NextRequest } from "next/server";


export function useVets() {
    const [vets, setVets] = useState<Vet[]>([])
    useEffect(() => {
        const fetchVets = async () => {
            const data = await fetch("/api/vets")
            if (!data.ok) {
                throw new Error("Error in network response");
            } else {
                const vet = await data.json();
                setVets(vet)
            }
        }
        fetchVets();
    }, [])
    return vets;
}

export function useVet(id: string | number) {
    const [vet, setVet] = useState<Vet>();
    useEffect(() => {
        const fetchVet = async () => {
            const data = await fetch(`/api/vets/${id}`);
            if (!data.ok) {
                throw new Error("Network response was not ok");
            }
            const vet = await data.json()
            setVet(vet);
        }
        fetchVet();
    }, [id])
    return vet;
}


export async function useAddVets(newVet: Vet) {
    try {
        const res = await fetch("/api/vets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVet)
        });
        if (!res.ok) {
            throw new Error("Failed to add vet");
        }
        return await res.json();
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}