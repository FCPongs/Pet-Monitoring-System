import { useEffect } from "react";
import { useState } from "react";
import { Vet } from "@/app/validator/vetSchema";
import { NextRequest } from "next/server";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useVets() {
    return useQuery({
        queryKey: ['vet'],
        queryFn: async (): Promise<Vet[]> => {
            const response = await axios.get("/api/vets")
            return response.data;
        }
    })
}
export function useVet(id: string) {
    return useQuery({
        queryKey: ['vet', id],
        queryFn: async (): Promise<Vet> => {
            const response = await axios.post("api/vets", id);
            return response.data;
        }
    })
}
export function useAddVets() {
    return useMutation({
        mutationFn: async (data: Vet): Promise<Vet> => {
            const response = await axios.post("/api/vets", data)
            return response.data;
        }
    })
}
// export async function useAddVets(newVet: Vet) {
//     try {
//         const res = await fetch("/api/vets", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newVet)
//         });
//         if (!res.ok) {
//             throw new Error("Failed to add vet");
//         }
//         return await res.json();
//     } catch (error) {
//         console.log("Error", error);
//         throw error;
//     }
// }
// export function useVets() {
//     const [vets, setVets] = useState<Vet[]>([])
//     useEffect(() => {
//         const fetchVets = async () => {
//             const data = await fetch("/api/vets")
//             if (!data.ok) {
//                 throw new Error("Error in network response");
//             } else {
//                 const vet = await data.json();
//                 setVets(vet)
//             }
//         }
//         fetchVets();
//     }, [])
//     return vets;
// }
// export function useVet(id: string | number) {
//     const [vet, setVet] = useState<Vet>();
//     useEffect(() => {
//         const fetchVet = async () => {
//             const data = await fetch(`/api/vets/${id}`);
//             if (!data.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const vet = await data.json()
//             setVet(vet);
//         }
//         fetchVet();
//     }, [id])
//     return vet;
// }