import mongoose from "mongoose";

const {Schema, models} = mongoose


const vetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter clinic's name."]
    },
    doctor:{
        type: String,
        required: [true, "Please enter doctor's name."]
    },
} )

export const Vet = models.Vet || mongoose.model('Vet', vetSchema);