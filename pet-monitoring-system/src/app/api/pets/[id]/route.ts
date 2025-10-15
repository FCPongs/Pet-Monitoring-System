import { Pet } from "@/app/models/pet";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
interface ParamProps {
    params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    try {
        await connectDb();
        const pet = await Pet.findById(id);
        return NextResponse.json(pet, { status: 200 })
    } catch {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 },
        );
    }
}