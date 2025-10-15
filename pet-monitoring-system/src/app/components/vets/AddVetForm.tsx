'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { vetValidate } from '@/app/validator/vetSchema';
import { Vet } from '@/app/validator/vetSchema';
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

export default function AddVetForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            doctor: "",
            location: "",
        },
        resolver: zodResolver(vetValidate),
    });

    const onSubmit = (data: Vet) => {
        
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
                                    <FormLabel>Veterinary Clinic's Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="doctor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Doctor's Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="doctor"
                                            placeholder="John Doe"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className='mt-5 cursor-pointer'>Submit</Button>
                </form>
            </Form>
        </>
    )
}