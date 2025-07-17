import { connectDb } from "@/lib/connectMongodb";
import { NextRequest, NextResponse } from "next/server";
import { Vet } from "@/models/vets/vet";

export const GET = async () =>{
    await connectDb;
    try{
        const vets = await Vet.find();
        return NextResponse.json(vets);
    }catch(error:unknown){
        throw error;
    }
}