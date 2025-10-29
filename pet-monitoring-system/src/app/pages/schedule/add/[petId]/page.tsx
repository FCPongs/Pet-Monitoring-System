'use client';
import { useParams } from "next/navigation"
export default function addSchedule() {
    const params = useParams();
    const petId = params.petId;
    return (
        <>
        <div>Add sched: {petId}</div>
        </>
    )
}