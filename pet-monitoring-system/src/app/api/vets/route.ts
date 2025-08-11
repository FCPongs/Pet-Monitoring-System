import { connectDb } from "@/lib/connectMongodb";
import { NextRequest, NextResponse } from "next/server";
import { Vet } from "@/app/models/vet";

export const GET = async () => {
    await connectDb;
    try {
        const vets = await Vet.find();
        return NextResponse.json(vets);
    } catch (error: unknown) {
        throw error;
    }
}

export const POST = async (req: NextRequest) => {
    await connectDb();
    try {
        const vet = await req.json();
        await Vet.create(vet);
        return NextResponse.json(
            { message: "Vet created", data: vet },
            { status: 201 }
        )
    } catch (error: unknown) {
        return NextResponse.json(
            {message: "Failed to add vet", error: error}
        )
    }
}