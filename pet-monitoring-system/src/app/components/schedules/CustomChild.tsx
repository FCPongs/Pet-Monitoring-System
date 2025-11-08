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
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useForm, useFieldArray } from 'react-hook-form';
import MedChild from "./MedChild";
import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
export default function CustomChild({ form }: any) {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: `customMedication`,
    });
    const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});
    function onClick(date: string) {
        setToggle((prev) => ({
            ...prev,
            [date]: !prev?.[date]
        }));
    }
    return (
        <>
            {fields.map((custom, index) => (
                <React.Fragment key={custom.id}>
                    <div className="flex gap-5">
                        <div className="flex w-1/2 mb-5 gap-5">
                            <FormField
                                control={form.control}
                                name={`customMedication.${index}.date`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Custom Date</FormLabel>
                                        <FormControl>
                                            <Popover open={toggle[custom.id] ?? false} onOpenChange={() => onClick(custom.id)}>
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
                            <div>
                                <FormField
                                    control={form.control}
                                    name={`customMedication.${index}.time`}
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
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5 mb-5">
                        <MedChild form={form} medType="customMedication" schedIndex={index} />
                    </div>
                </React.Fragment>
            ))}
            <div className="flex justify-end">
                <Button type="button" onClick={() => append({
                    date: undefined,
                    time: "",
                    medication: [{ medName: "", dosage: "", drugType: "" }],
                })}>
                    Add Custom
                </Button>
            </div>
        </>
    )
}