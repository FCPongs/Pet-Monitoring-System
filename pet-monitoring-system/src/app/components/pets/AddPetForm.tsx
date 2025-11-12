'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { petValidate, Pet } from '@/app/validator/petSchema';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { useAddPets } from '@/hooks/pet';
import { useVets } from '@/hooks/vet';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function AddPetForm() {
    const route = useRouter();
    const { mutate, mutateAsync } = useAddPets();
    const { data: vets } = useVets();
    const form = useForm({
        defaultValues: {
            name: "",
            age: "",
            animalType: "",
            breed: "",
            vet: null,
        },
        resolver: zodResolver(petValidate),
    });

    const onSubmit = async (data: Pet) => {
        console.log(`Data submitted: ${JSON.stringify(data)}`);
        if (data.vet === "no-vet") {
            mutate({ ...data, vet: null });
            toast.error("Pet has not been created");
        } else {
            const petData = await mutateAsync(data);
            console.log("Pet ID: "+petData._id);
            toast.success("Pet Successfully created");
            //route.push("/pet/viewPets"); // Redirect to specific pet page
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pet Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            placeholder="e.g Luna" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pet Age</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="age"
                                            placeholder="e.g 1" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="animalType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Animal Type</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="animalType"
                                            placeholder="e.g Dog" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="breed"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Breed</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="breed"
                                            placeholder="e.g Puspin" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="vet"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Veterinary</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue="no-vet">
                                            <SelectTrigger className='w-full'>
                                                <SelectValue placeholder="Select a vet" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Vet Clinics</SelectLabel>
                                                    <SelectItem value="no-vet">No vet</SelectItem>
                                                    {vets?.map((vet) => (
                                                        <SelectItem value={vet._id!}>{vet.name}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='w-full flex justify-end'>
                        <Button type="submit" className='mt-5 cursor-pointer'>Submit</Button>
                    </div>
                </form>
            </Form>

        </>
    )
}
