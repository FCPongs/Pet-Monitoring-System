import mongoose from 'mongoose';
const { Schema, models } = mongoose;

const PetSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    age: {
        type: Number,
    },
    animalType: {
        type: String,
        required: [true, "Please indicate what animal type."]
    },
    breed: {
        type: String
    },
    vet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vet",
        default: null,
    }

    //todo: Schedules and History (Vet info: When was added).
})
export const Pet = models.Pet || mongoose.model('Pet', PetSchema);