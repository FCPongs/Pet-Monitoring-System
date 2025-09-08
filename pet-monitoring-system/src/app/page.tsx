import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full h-[100vh] bg-blue-100 justify-center items-center">
        <div className="text-2xl font-bold">
          Pet Monitoring System
        </div>
        <div className="flex gap-5">
          <Link href={"/pages/pet/addPet"}>
            <Button className="">
              Add Pet
            </Button>
          </Link>
          <Link href={"/pages/vet/addVet"}>
            <Button className="">
              Add Vet
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
