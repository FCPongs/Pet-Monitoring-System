
// export default function DefaultChild() {
//     return (
//         <>
//             <div className="text-lg mb-3">Default</div>
//             {fields.map((sched, index) => (
//                 <React.Fragment key={sched.id}>
//                     <div className="flex  gap-5 w-full mb-5">
//                         <FormField
//                             control={form.control}
//                             name={`defaultMedication.${index}.time`} // SHOULD BE TIME
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Time</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             type="string"
//                                             min={0}
//                                             placeholder="shadcn"
//                                             {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />
//                         <MedChild form={form} schedIndex={index} medType="defaultMedication" />
//                     </div>
//                 </React.Fragment>
//             ))}
//         </div >
//             <div></div>
//         </>
//     )
// }