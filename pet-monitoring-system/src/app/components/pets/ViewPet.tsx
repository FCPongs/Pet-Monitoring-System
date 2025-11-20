import { usePet } from "@/hooks/pet";
import { useVet } from "@/hooks/vet";
import { useSched } from "@/hooks/sched";
import { Button } from "@/components/ui/button";
import ScheduleCard from "../schedules/ScheduleCard";
import Link from "next/link";
import { Input } from "@/components/ui/input";

interface viewPetProps {
    id: string | number;
}

export default function ViewPet({ id }: viewPetProps) {
    const { data, isPending, isFetching } = usePet(String(id));

    if (isPending || isFetching)
        return (
            <div>Loading</div>);

    return (
        <>
            <div className="flex !w-full h-[92vh]">
                <div className="flex w-1/2 p-5">
                    <div className="flex gap-5 rounded-lg shadow-xl px-5 flex-col h-full !w-[100%]">
                        <div className="flex justify-start w-full mb-5 text-lg font-semibold">General Information</div>
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold">
                                Pet Name:
                            </div>
                            <div className="border-1 border-gray-100 shadow-sm p-2 rounded-sm">
                                {data?.name}
                            </div>
                        </div>

                        <div className="flex gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <div className="font-semibold">
                                    Animal Type:
                                </div>
                                <div className="border-1 shadow-sm p-2 rounded-sm">
                                    {data?.animalType}
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <div className="font-semibold">
                                    Animal Breed:
                                </div>
                                <div className=" border-1 shadow-sm p-2 rounded-sm">
                                    {data?.breed}
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col gap-2">
                            <div className="font-semibold">
                                Vets:
                            </div>

                            {Array.isArray(data?.vet) && data.vet.length > 0 ? (
                                data.vet.map((v) => (
                                    <div key={v._id}>
                                        {v.name}
                                    </div>
                                ))
                            ) : (
                                <div>No Vet</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-5">
                    <div className="flex rounded-lg shadow-xl px-5 flex-col h-full !w-[100%]">
                        <div className="mb-5 text-lg font-semibold">Schedule</div>
                        <div className="flex justify-center items-start w-[100%]">
                            {Array.isArray(data?.schedule) ?
                                (
                                    <div className="flex flex-col gap-5 w-[90%]">
                                        {data.schedule.map((sched) => (
                                            typeof sched == "string" ?
                                                (<div>
                                                    <div>{sched}</div>
                                                </div>)
                                                :
                                                (
                                                    <div>
                                                        <ScheduleCard
                                                            id={String(sched._id)}
                                                            name={sched.name}
                                                            startDate={String(sched.startDate)}
                                                            endDate={String(sched.endDate)}
                                                        />
                                                    </div>
                                                )
                                        ))}
                                    </div>
                                ) :
                                (
                                    <div>
                                        No schedules found for {data?.name}
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex justify-end p-5 h-full items-end">
                            <Link href={`/schedule/${id}/add`}>
                                <Button className="cursor-pointer">
                                    Add Schedule
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}