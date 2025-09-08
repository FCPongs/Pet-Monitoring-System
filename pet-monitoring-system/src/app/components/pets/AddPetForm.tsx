'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { petValidate, Pet } from '@/app/validator/petSchema';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

export default function AddPetForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            age: undefined,
            animalType: "",
            breed: "",
            vet: ""
        },
        resolver: zodResolver(petValidate),
    });

    const onSubmit = async (data: Pet) => {
        console.log(`Data submitted: ${data}`)
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
                                        <Input
                                            id="vet"
                                            placeholder="e.g Makilala Veterinary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className='mt-5 hover'>Submit</Button>
                </form>
            </Form>

        </>
    )
}
