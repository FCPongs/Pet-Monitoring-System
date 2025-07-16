import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI){
    throw Error("Please add a URI in the env");
}

export const connectDb = async ():Promise<void> => {
    try{
        await mongoose.connect(MONGO_URI);
    } catch (error:unknown){
        throw error;
    }
}