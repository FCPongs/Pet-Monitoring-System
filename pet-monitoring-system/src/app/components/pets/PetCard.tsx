
import {
    Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface PetCardProps {
    id: string | number;
    name: string;
    age: string;
    type: string;
    breed: string;
    vet?: string;
}
export default function PetCard({ id, name, age, type, breed, vet }: PetCardProps) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{name ?? "Name"}</CardTitle>
                    <CardDescription className="text-md">Card Description</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 w-full">
                        <div className="py-1 px-2 bg-[#328E6E] text-md text-white rounded-lg">Age: {age ?? "n/a"}</div>
                        <div className="py-1 px-2 bg-[#67AE6E] text-md text-white rounded-lg">Type: {type ?? "n/a"}</div>
                        <div className="py-1 px-2 bg-[#90C67C] text-md rounded-lg">Breed: {breed ?? "n/a"}</div>
                        <div className="py-1 px-2 bg-[#E1EEBC] text-md rounded-lg">Vet: {vet ? JSON.stringify(vet) : "n/a"}</div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex gap-2 w-full justify-end">
                        <Button>View</Button>
                        <Button>Edit</Button>
                        <Button className="cursor-pointer">
                            <Link href={`/schedule/add/${id}`}>
                            Add Schedule
                            </Link>
                            </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}