import { useState } from "react";
import { useEffect } from "react";
import { Pet } from "@/app/validator/petSchema";

export default function usePets() {
    const [pet, setPet] = useState<Pet>();
    useEffect(() => {
        const fetchPets = async () => {
            const data = await fetch("/app/api/pets");
            if (!data) {
                throw new Error("Error in network response")
            } else {
                const pets = await data.json();
                setPet(pets);
            }}
        fetchPets();
    }, []);
    return pet;
};