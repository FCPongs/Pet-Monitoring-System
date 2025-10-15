import { useState } from "react";
import { useEffect } from "react";
import { Pet } from "@/app/validator/petSchema";

export function usePets() {
    const [pet, setPet] = useState<Pet[]>([]);
    useEffect(() => {
        const fetchPets = async () => {
            const data = await fetch("/api/pets");
            if (!data.ok) {
                throw new Error("Error in network response");
            }
            else {
                const pets = await data.json();
                setPet(pets);
            }
        }
        fetchPets();
    }, []);
    return pet;
};
export function usePet(id: string) {
    const [pet, setPet] = useState<Pet>();
    useEffect(() => {
        const fetchPet = async () => {
            const data = await fetch(`/api/pets/${id}`)
            if (!data.ok) {
                throw new Error("Error in network response");
            }
            else {
                const pets = await data.json();
                setPet(pets);
            }
        }
        fetchPet();
    }, [id]);
    return pet;
}

export async function useAddPets(newPet: Pet) {
    try {
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPet)
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