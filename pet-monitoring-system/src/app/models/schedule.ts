import mongoose from "mongoose";

const { Schema, models } = mongoose;

const TimeMedicationSchema = new Schema({
    scheduleID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule'
    },
    name: { type: String, required: [true, ""] },
    time: { type: String, required: [true, "Time is required"] },
    note: { type: String },
    medication: {
        medName: { type: String, required: [true, "Please input medication name"] },
        dosage: { type: String },
        drugType: { type: String }
    }
})


const scheduleSchema = new Schema({
    timeMedication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TimeMedication",
        required: true
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
})

export const Schedule = models.Schedule || mongoose.model("Schedule", scheduleSchema)
export const TimeMedication = models.TimeMedication || mongoose.model("TimeMedication", TimeMedicationSchema);