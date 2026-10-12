import type { Conference } from "../types/api.type";
import {useQuery} from "@tanstack/react-query";

export default function useConferences<T extends Conference>() {
    return useQuery<T[]>({
        queryKey: ['conferences'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/conferences/');
            return response.json() as Promise<T[]>;
        },
    });
}
        
 
        