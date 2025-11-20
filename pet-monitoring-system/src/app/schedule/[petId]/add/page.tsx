'use client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import MedChild from "@/app/components/schedules/MedChild";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useForm, useFieldArray } from 'react-hook-form';
import { Sched } from "@/app/validator/scheduleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { schedValidate } from "@/app/validator/scheduleSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useEffect } from "react";
import { useAddSched } from "@/hooks/sched";
import CustomChild from "@/app/components/schedules/CustomChild";
import { useEditPets } from "@/hooks/pet";
export default function addSchedule() {
        const params = useParams();
    const petId = params.petId;
    const [toggle, setToggle] = useState<{ [key: string]: boolean }>({
        start: false,
        end: false,
    });
    const [hasCustom, setCustom] = useState<boolean>(false);

    const { mutateAsync: addSchedule } = useAddSched();
    const { mutateAsync: editPet } = useEditPets(String(petId));

    const form = useForm<Sched>({
        resolver: zodResolver(schedValidate),
        defaultValues: {
            timesPerDay: 1,
            defaultMedication: [],
        }
    })
    async function onSubmit(data: Sched) {
        const createdSched = await addSchedule(data); // Schedule added
        console.log("Created sched id:", createdSched.data._id);
        editPet({ schedule: createdSched.data._id }); // This sends an ID
    }
    function setOpen(date: string, value: boolean) {
        setToggle((prev) => ({
            ...prev,
            [date]: value
        }))
    }
    const timesPerDay = Number(form.watch("timesPerDay")) || 0;
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "defaultMedication",
    });
    function handleClick() {
        form.resetField("customMedication");
        setCustom(!hasCustom);
    }

    useEffect(() => {
        if (timesPerDay < 0) return;
        const diff = timesPerDay - fields.length;

        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                append({ time: "", medication: [{ medName: "", dosage: "", drugType: "" }] });
            }
        } else if (diff < 0) {
            for (let i = 0; i < Math.abs(diff); i++) {
                remove(fields.length - 1 - i);
            }
        }
    }, [timesPerDay]);

    return (
        <>
            <div className="flex justify-center mt-20 h-[100vh] w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex gap-10">
                            {/* First Part */}
                            <div className="flex flex-col gap-5 w-[30%]">
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Schedule Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="shadcn"
                                                        {...field}
                                                        value={field.value ?? ""}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex gap-5 justify-between">
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name="startDate"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Start Date:</FormLabel>
                                                    <FormControl>
                                                        <Popover open={toggle.start} onOpenChange={(value) => setOpen("start", value)}>
                                                            <PopoverTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    id="date"
                                                                    className="w-40 justify-between font-normal"
                                                                >
                                                                    {field.value ? new Date(field.value).toLocaleDateString() : "Pick a date"}
                                                                </Button>

                                                            </PopoverTrigger>
                                                            <PopoverContent className="" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    onSelect={(date) => field.onChange(date)}
                                                                    {...field}
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name="endDate"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>End Date:</FormLabel>
                                                    <FormControl>
                                                        <Popover open={toggle.end} onOpenChange={(value) => setOpen("end", value)}>
                                                            <PopoverTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    id="date"
                                                                    className="w-40 justify-between font-normal"
                                                                >
                                                                    {field.value ? new Date(field.value).toLocaleDateString() : "Pick a date"}
                                                                </Button>

                                                            </PopoverTrigger>
                                                            <PopoverContent className="" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    onSelect={(date) => field.onChange(date)}
                                                                    {...field}
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="timesPerDay"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>How many times in a day</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        placeholder="shadcn"
                                                        {...field}
                                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex gap-5 mt-20">
                                        <Button type="submit">Submit</Button>
                                        {!hasCustom ?
                                            <Button onClick={handleClick} type="button">Add Custom Date</Button> :
                                            <Button onClick={handleClick} type="button">Remove Custom Date</Button>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Second Part */}

                            <div className="overflow-auto h-[80vh] p-1 w-[70%]">
                                <div className="text-lg mb-3">Default</div>
                                <div className="flex flex-col">
                                    <div>
                                        {fields.map((sched, index) => (
                                            <React.Fragment key={sched.id}>
                                                <div className="flex gap-5 w-full mb-5 items-start">
                                                    <FormField
                                                        control={form.control}
                                                        name={`defaultMedication.${index}.time`} // SHOULD BE TIME
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Time</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        type="string"
                                                                        min={0}
                                                                        placeholder="shadcn"
                                                                        {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <div className="flex flex-col gap-5 h-[100%]">
                                                        <MedChild form={form} schedIndex={index} medType="defaultMedication" />
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div>
                                        {hasCustom &&
                                            <div className="">
                                                <div className="text-lg mb-3">Custom Date</div>
                                                <CustomChild form={form} />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}// pet-monitoring-system\src\app\schedule\add\page.tsx