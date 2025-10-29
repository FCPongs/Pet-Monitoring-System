import mongoose from "mongoose";

const { Schema, models } = mongoose;
const scheduleSchema = new Schema({
    name: { type: String, required: [true, ""] },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    defaultMedication: [{
        time: { type: String, required: true },
        medication: [{
            medName: { type: String, required: true },
            dosage: { type: String, required: true },
            drugType: { type: String, required: true },
        }]
    }],
    customedMedication: [{
        date: { type: [Date], required: true },
        time: { type: String, required: true },
        medication: [{
            medName: { type: String, required: true },
            dosage: { type: String, required: true },
            drugType: { type: String, required: true },
        }]
    }]
})

export const Schedule = models.Schedule || mongoose.model("Schedule", scheduleSchema);