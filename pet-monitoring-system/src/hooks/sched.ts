import { Sched } from "@/app/validator/scheduleSchema";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

type AddSchedResponse = {
  message: string;
  data: Sched;
};

export function useAddSched() {
    return useMutation({
        mutationFn: async (newSched: Sched): Promise<AddSchedResponse> => {
            const response = await axios.post("/api/schedule", newSched)
            console.log("Added: "+JSON.stringify(response))
            return response.data;
        }
    })
}