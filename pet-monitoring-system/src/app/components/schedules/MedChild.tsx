
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import React from 'react';


export default function MedChild({ form, schedIndex, medType }: { form: any; schedIndex: number, medType: string }) {
    const baseName = schedIndex !== undefined ?
        `${medType}.${schedIndex}.medication` :
        `${medType}.medication`;
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: `${medType}.${schedIndex}.medication`,
    });
    return (
        <>
            {fields.map((medication, index) => (
                <React.Fragment key={medication.id}>
                    <div className="flex items-start gap-5">
                        <FormField
                            control={form.control}
                            name={`${medType}.${schedIndex}.medication.${index}.medName`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Medicine Name </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`${medType}.${schedIndex}.medication.${index}.dosage`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dosage</FormLabel>
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
                        <FormField
                            control={form.control}
                            name={`${medType}.${schedIndex}.medication.${index}.drugType`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Drug Type</FormLabel>
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
                        <div className="flex items-center justify-center self-stretch mt-5">
                            {fields.length > 1 && (
                                <CircleMinus
                                    size={20}
                                    strokeWidth={2.5}
                                    color="black"
                                    className=""
                                    onClick={() => remove(index)}
                                />
                            )}
                        </div>
                    </div>
                </React.Fragment>
            ))}
            <div className="flex justify-end">
                <Button
                    type="button"
                    onClick={() => append({
                        medication: [{ medName: "", dosage: "", drugType: "" }]
                    })}>Add Medicine</Button>
            </div>
        </>
    )
}