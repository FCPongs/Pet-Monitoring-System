
import {
    Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
interface VetCardProps {
    name: string;
    doctor: string;
    location: string;
}
export default function VetCard({ name, doctor, location }: VetCardProps) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{name ?? "Name"}</CardTitle>
                    <CardDescription className="text-md">Card Description</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                    
                </CardContent>
                <CardFooter>
                    <div className="flex gap-2 w-full justify-end">
                        <Button>View</Button>
                        <Button>Edit</Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}