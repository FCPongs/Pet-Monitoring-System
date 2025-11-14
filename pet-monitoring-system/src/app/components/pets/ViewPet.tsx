import { usePet } from "@/hooks/pet";
import { useVet } from "@/hooks/vet";
import { useSched } from "@/hooks/sched";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <div className="flex !w-full h-full">
                <div className="flex w-1/2 items-center flex-col gap-5">
                    <div className="flex gap-5 justify-start">
                        <div>
                            Pet Name: {data?.name}
                        </div>
                    </div>

                    <div className="flex gap-5 justify-start">
                        <div>
                            Animal Type: {data?.animalType}
                        </div>
                        <div>
                            Animal Breed: {data?.breed}
                        </div>
                    </div>

                    <div>
                        Vets:
                        {Array.isArray(data?.vet) && data.vet.length > 0 ? (
                            data.vet.map((v) => (
                                <div key={v._id}>
                                    {v.name}
                                </div>
                            ))
                        ) : (
                            <div>Not found</div>
                        )}
                    </div>

                </div>
                <div className="w-1/2 bg-green-100">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div>
                            {Array.isArray(data?.schedule) ?
                                (
                                    <div>
                                        {data.schedule.map((sched) => (
                                            typeof sched == "string" ?
                                                (<div>
                                                    <div>{sched}</div>
                                                </div>)
                                                :
                                                (<div>
                                                    {sched.name}
                                                </div>)
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
                        <Link href={`/schedule/add/${id}/`}>
                            <Button className="cursor-pointer">
                                Add Schedule
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}