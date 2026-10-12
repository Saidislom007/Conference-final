import { useState, useEffect } from "react"
import { CardImage } from "../components/CardImage"
import Navbar from "@/components/Navbar"
import getConfercences from "../hooks/api"
import type { Conference } from "@/types/api.type"

export default function ConferencesPage() {
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
        <div className="min-h-screen bg-gray-50 ">
            <Navbar />
            <main className="flex  px-4 py-12 flex-col">
                <h1 className="text-3xl font-bold text-gray-800 pb-4">Konferensiyalar</h1>
                <p>Maqola topshirish mumkin bo'lgan konferensiyalar, sho'balar va maqola yuborish muddatlari bilan.                </p>
                <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
                    {conferences.map((conference) => (
                        <CardImage imageUrl={conference.img} title={conference.title} type={conference.type} />
                    ))}

                    <CardImage />


                </div>
            </main>

        </div>
    )
}
