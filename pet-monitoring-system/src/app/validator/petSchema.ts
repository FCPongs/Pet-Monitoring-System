import * as z from "zod";

//** Zod schema: Runtime object (exists when your code is running and can validate data)
const petValidate = z.object({
    name: z.string().min(1, "Please enter pet's name"),
    age: z.number().optional()
    .refine((val) => !isNaN(Number(val)), {
        message: "Age must be a valid number"
    }),
    animalType: z.string().min(1, "Please enter pet's age"),
    breed: z.string().optional(),
    vet: z.string().optional()
})

//** Typescript type: Compile time
type Pet = z.infer<typeof petValidate>
