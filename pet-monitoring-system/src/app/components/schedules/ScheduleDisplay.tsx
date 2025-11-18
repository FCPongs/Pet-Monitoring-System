'use client';
import { useSched } from "@/hooks/sched"
interface SchedDisplayProps {
    id: string,
}
export default function SchedDisplay({ id }: SchedDisplayProps) {
    const { data, isPending } = useSched(id);
    return (
        <>
            <div>
                {data?.name}
            </div>
        </>
    )
}