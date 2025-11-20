import { NextRequest } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
import { Schedule } from "@/app/models/schedule";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    await connectDb();
    const sched = await Schedule.findById(id);

    if (!sched) {
      return NextResponse.json({ message: "Pet not found" }, { status: 404 });
    }
    return NextResponse.json(sched, { status: 200 });
  } catch (err) {
    console.error("Error fetching sched:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}