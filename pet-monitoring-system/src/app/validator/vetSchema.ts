import * as z from "zod";

export const vetValidate = z.object(
    {
        name: z.string().min(1, "Veterinary Clinic's name is required."),
        doctor: z.string().min(1, "Doctor's name is required."),
        location: z.string().min(1, "Location is required")
    }
)

export type Vet = z.infer<typeof vetValidate>