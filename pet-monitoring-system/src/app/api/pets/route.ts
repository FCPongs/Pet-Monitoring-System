import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
import { Pet } from "../models/pet";

export const GET = async() => {
    await connectDb(); //? Connect to Database (Mongoose)
    try{
        const pets = await Pet.find();
        return NextResponse.json(pets);
    }catch(error:unknown){
        throw error;
    }
}