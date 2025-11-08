import { NextRequest } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
import { Schedule } from "@/app/models/schedule";
import { NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    await connectDb(); //? Connect to Database (Mongoose)
    try {
        const sched = await req.json();
        const createdSched = await Schedule.create(sched);
        return NextResponse.json(
            { message: "Pet created", data: createdSched },
            { status: 201 }
        );
    } catch (error: unknown) {
        return NextResponse.json(
            { message: "Failed to create pet", error },
            { status: 500 }
        )
    }
}