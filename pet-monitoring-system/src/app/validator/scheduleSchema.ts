import * as z from "zod";

const medicationSchema = z.object({
    medName: z.string().min(1, "Please add a medication name"),
    dosage: z.string().min(1, "Please add a dosage"),
    drugType: z.string().min(1, "Please add a drug type")
})
const defaultMedicationSchema = z.object({
    time: z.string().min(1, "Time is required"),
    medication: z.array(medicationSchema).min(1, "Please add at least 1 medication")
})
const customMedicationSchema = z.object({
  date: z.date(),
  time: z.string().min(1, "Time is required"),
  medication: z.array(medicationSchema).min(1, "Please add at least 1 medication"),
});

export const schedValidate = z.object(
    {
        _id: z.string().optional(),
        name: z.string().min(1, "Please enter a name"),
        startDate: z.date(),
        endDate: z.date(),
        defaultMedication: z.array(defaultMedicationSchema),
        customMedication: z.array(customMedicationSchema).optional(),
        timesPerDay: z.number().optional(),
    }
)

export type Sched = z.infer<typeof schedValidate> ;