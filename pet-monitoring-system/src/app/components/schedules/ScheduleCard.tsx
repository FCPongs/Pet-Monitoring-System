
interface ScheduleCard {
    id: string | number;
    name: string;
    startDate: string;
    endDate: string;
}
import Link from "next/link";
export default function ScheduleCard({ id, name, startDate, endDate }: ScheduleCard) {
    return (
        <>
            <Link href={`/schedule/${id}/viewSchedule`}>
                <div className="rounded-md cursor-pointer !w-full p-5 before:ease relative overflow-hidden border border-[#E1EEBC]  bg-white text-black font-semibold shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#90C67C] before:opacity-10 before:duration-700 hover:shadow-[#90C67C] hover:before:-translate-x-150">
                    {/* Name */}
                    <div>
                        {name}
                    </div>
                    {/* StartDate */}
                    <div>
                        {"From: " + startDate}
                    </div>
                    {/* EndDate */}
                    <div>
                        {"To: " + endDate}
                    </div>
                </div>
            </Link>
        </>
    )
}