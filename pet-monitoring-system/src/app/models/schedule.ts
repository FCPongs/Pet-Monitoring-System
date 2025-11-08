import mongoose from "mongoose";

const { Schema, models } = mongoose;

const medicationSchema = new Schema({
    medName: { type: String, required: true },
    dosage: { type: String, required: true },
    drugType: { type: String, required: true },
}, { _id: false })
const defaultMedicationSchema = new Schema({
    time: { type: String, required: true },
    medication: [medicationSchema]
})
const customMedicationSchema = new Schema({
    date: { type: [Date], required: true },
    time: { type: String, required: true },
    medication: [medicationSchema]
})
const scheduleSchema = new Schema({
    name: { type: String, required: [true, ""] },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    defaultMedication: [{
        time: { type: String, required: true },
        medication: [medicationSchema]
    }],
    customedMedication: [{
        date: { type: [Date], required: true },
        time: { type: String, required: true },
        medication: [medicationSchema]
    }]
})

export const Schedule = models.Schedule || mongoose.model("Schedule", scheduleSchema);