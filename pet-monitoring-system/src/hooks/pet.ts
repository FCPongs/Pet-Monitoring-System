
import { Pet } from "@/app/validator/petSchema";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export function usePets() {
    return useQuery({
        queryKey: ['pets'],
        queryFn: async (): Promise<Pet[]> => {
            const response = await fetch("/api/pets");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
    });
}
export function usePet(id: string) {
    return useQuery({
        queryKey: [`pets`, id],
        queryFn: async (): Promise<Pet> => {
            const response = await axios.get(`/api/pets/${id}`)
            return response.data;
        }
    })
}

export function useAddPets() {
    return useMutation({
        mutationFn: async (newPet: Pet): Promise<Pet> => {
            const response = await axios.post("/api/pets", newPet)
            return response.data.data;
        }
    })
}
export function useEditPets(id: string | number) {
    return useMutation({
        mutationFn: async (editPet: any): Promise<Pet> => {
            const response = await axios.patch(`/api/pets/${id}`, editPet)
            return response.data;
        }
    })
}
// export async function useAddPets(newPet: Pet) {
//     try {
//         const res = await fetch("/api/pets", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newPet)
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
// export function usePets() {
//     const [pet, setPet] = useState<Pet[]>([]);
//     useEffect(() => {
//         const fetchPets = async () => {
//             const data = await fetch("/api/pets");
//             if (!data.ok) {
//                 throw new Error("Error in network response");
//             }
//             else {
//                 const pets = await data.json();
//                 setPet(pets);
//             }
//         }
//         fetchPets();
//     }, []);
//     return pet;
// };
// export function usePet(id: string) {
//     const [pet, setPet] = useState<Pet>();
//     useEffect(() => {
//         const fetchPet = async () => {
//             const data = await fetch(`/api/pets/${id}`)
//             if (!data.ok) {
//                 throw new Error("Error in network response");
//             }
//             else {
//                 const pets = await data.json();
//                 setPet(pets);
//             }
//         }
//         fetchPet();
//     }, [id]);
//     return pet;
// }