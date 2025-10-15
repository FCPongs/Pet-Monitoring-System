import { Vet } from "@/app/models/vet";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
interface ParamProps {
    params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    try {
        await connectDb();
        const vet = await Vet.findById(id);
        return NextResponse.json(vet, { status: 200 })
    } catch {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 },
        );
    }
}