import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGU_URI || "";
if(!MONGO_URI){
    throw new Error("Please define the MONGO_URI environment variable")
}

export async function dbConnect(){
    try{
        await mongoose.connect(MONGO_URI);
    } catch(error) {
        console.log(error);
        throw error;
    }
}
