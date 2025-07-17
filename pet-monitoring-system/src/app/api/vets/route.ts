import { connectDb } from "@/lib/connectMongodb";
import { NextRequest, NextResponse } from "next/server";
import { Vet } from "@/models/vets/vet";

export const GET = async () =>{
    await connectDb;
    try{
        return NextResponse.json(Vet.find);
    }catch(error:unknown){
        throw error;
    }
}