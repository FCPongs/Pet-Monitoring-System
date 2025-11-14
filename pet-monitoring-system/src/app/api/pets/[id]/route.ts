import { Pet } from "@/app/models/pet";
import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectMongodb";
import { Schedule } from "@/app/models/schedule";
import { Vet } from "@/app/models/vet";
interface ParamProps {
  params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    await connectDb();
    const pet = await Pet.findById(id);

    if (!pet) {
      return NextResponse.json({ message: "Pet not found" }, { status: 404 });
    }

    if (pet.schedule && pet.schedule.length > 0) {
      await pet.populate("schedule");
    }
    if (pet.vet && pet.vet.length > 0) {
      await pet.populate("vet");
    }

    return NextResponse.json(pet, { status: 200 });
  } catch (err) {
    console.error("Error fetching pet:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectDb();
    const updates = await req.json();
    const petCheck = await Pet.findById(id);

    if (!petCheck) {
      return NextResponse.json({ message: "Pet not found" }, { status: 404 });
    }

    if (updates.schedule) {
      await Pet.findByIdAndUpdate(
        id,
        { $push: { schedule: updates.schedule } },
        { new: true }
      );
      delete updates.schedule;
    }

    if (Object.keys(updates).length > 0) {
      await Pet.findByIdAndUpdate(id, { $set: updates }, { new: true });
    }

    return NextResponse.json({ message: "Pet updated successfully" }, { status: 200 });

  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
