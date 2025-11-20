'use client';

import { useSched } from "@/hooks/sched";
import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import { createViewMonthGrid, createViewWeek } from '@schedule-x/calendar';
import 'temporal-polyfill/global';
import '@schedule-x/theme-default/dist/index.css';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { useEffect } from "react";

interface SchedDisplayProps {
    id: string;
}
export default function SchedDisplay({ id }: SchedDisplayProps) {
    const { data, isPending } = useSched(id);
    const calendar = useNextCalendarApp({
        views: [createViewWeek(), createViewMonthGrid()],
        events: [],
        plugins: [
            createEventModalPlugin(),
        ],
    })

    useEffect(() => {
        if (!data?.startDate || !data?.endDate || !calendar?.events) return;
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);

        const startPlain = Temporal.PlainDate.from(start.toISOString().slice(0, 10));
        const endPlain = Temporal.PlainDate.from(end.toISOString().slice(0, 10));
        const schedName = data.name;
        calendar.events.add({
            id: "1",
            title: schedName,
            start: startPlain,
            end: endPlain,
            description: data.defaultMedication
                .map(time =>
                    `${time.time}\n${time.medication
                        .map(med => `${med.medName} (${med.dosage} ${med.drugType})`)
                        .join("\n")}`
                )
                .join("\n\n"),
        });
    },
        [data, calendar]);

    if (isPending || !data?.startDate || !data?.endDate) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex flex-col items-center p-5">
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    );
}

function med(value: { medName: string; dosage: string; drugType: string; }, index: number, array: { medName: string; dosage: string; drugType: string; }[]): unknown {
    throw new Error("Function not implemented.");
}

