import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGU_URI || "";
if(!MONGO_URI){
    throw new Error("Please define the MONGO_URI environment variable")
}

export const dbConnect = async (): Promise<void> => {
    try{
        mongoose.connect(MONGO_URI);
    }catch(error: unknown){
        console.log(error)
        throw error;
    }
}
