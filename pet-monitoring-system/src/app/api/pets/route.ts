import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
import { Pet } from "../../models/pet";
// import { Vet } from "@/app/models/vet";

export const GET = async () => {
    await connectDb(); //? Connect to Database (Mongoose)
    try {
        const pets = await Pet.find().populate('vet');
        return NextResponse.json(pets);
    } catch (error: unknown) {
        throw error;
    }
}
export const POST = async (req: NextRequest) => {
    await connectDb(); //? Connect to Database (Mongoose)
    try {
        const pet = await req.json();
        const petCreated = await Pet.create(pet);
        return NextResponse.json(
            { message: "Pet created", data: petCreated },
            { status: 201 }
        );
    } catch (error: unknown) {
        return NextResponse.json(
            { message: "Failed to create pet", error },
            { status: 500 }
        )
    }
}