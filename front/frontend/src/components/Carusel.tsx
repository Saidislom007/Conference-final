import { CardImage } from "./CardImage"
import { useState, useEffect } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../@/components/ui/carousel"
import getConfercences from "../hooks/api"
import type { Conference } from "@/types/api.type";


export function CarouselSize() {
    const [conferences, setConferences] = useState<Conference[]>([]);

    useEffect(() => {
        const fetchConferences = async () => {
            try {
                const data = await getConfercences<Conference>();
                setConferences(data);
            } catch (error) {
                console.error('Error fetching conferences:', error);
            }
        };

        fetchConferences();
    }, []);

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className=""
        >
            <CarouselContent>
                {conferences.map((conference) => (
                    <CarouselItem key={conference.id} className="w-[300px]">
                        <CardImage imageUrl={conference.img} title={conference.title} type={conference.type} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
