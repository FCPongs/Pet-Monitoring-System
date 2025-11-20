import SchedDisplay from "@/app/components/schedules/ScheduleDisplay";

interface PageProps {
    params: {
        petId: string;
    };
}
export default async function Page({ params }: PageProps) {
    const { petId } = await params;
    return (
        <>
          <SchedDisplay id={String(petId)} />
        </>

    );
}