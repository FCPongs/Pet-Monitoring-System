import * as z from "zod";
import { vetValidate } from "./vetSchema";
//** Zod schema: Runtime object (exists when your code is running and can validate data)
const petValidate = z.object({
    _id: z.string().optional(),
    name: z.string().min(1, "Please enter pet's name"),
    age: z.string().optional()
        .refine((val) => !isNaN(Number(val)), {
            message: "Age must be a valid number"
        }),
    animalType: z.string().min(1, "Please enter pet's animal type"),
    breed: z.string().optional(),
    vet: z.union([z.string(), vetValidate]).optional(),
})

//** Typescript type: Compile time
type Pet = z.infer<typeof petValidate>

export { petValidate }
export type { Pet }; 
