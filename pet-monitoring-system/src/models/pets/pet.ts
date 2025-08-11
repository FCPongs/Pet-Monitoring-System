import mongoose from "mongoose";

const { Schema, } = mongoose;

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please input pet's name."]
    },
    animalType: {
        type: String,
        require: [true, "Please input pet's animal type."]
    },
    breed: {
        type: String,
        require: [true, "Please input pet's breed."]
    },
    vet: {
        type: String,
        require: [true, "Please input pet's vet."]
    },
})

export const Pet = mongoose.models.Pet || mongoose.model('Pet', petSchema);